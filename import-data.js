#!/usr/bin/env node

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const https = require('https');

// Function to delay execution for rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Geocoding function using Nominatim (free, no API key required)
async function geocodeLocation(location, city, state) {
    if (!location && !city && !state) return { lat: null, lng: null };
    
    // Try to build a complete address
    const query = location || `${city}, ${state}`;
    const encodedQuery = encodeURIComponent(query + ', USA');
    
    return new Promise((resolve) => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodedQuery}`;
        
        https.get(url, {
            headers: { 'User-Agent': 'SchoolShootingGlobe/1.0' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const results = JSON.parse(data);
                    if (results && results.length > 0) {
                        resolve({
                            lat: parseFloat(results[0].lat),
                            lng: parseFloat(results[0].lon)
                        });
                    } else {
                        resolve({ lat: null, lng: null });
                    }
                } catch (error) {
                    console.error(`Geocoding error for "${query}":`, error.message);
                    resolve({ lat: null, lng: null });
                }
            });
        }).on('error', (error) => {
            console.error(`HTTP error for "${query}":`, error.message);
            resolve({ lat: null, lng: null });
        });
    });
}

// Function to normalize race/ethnicity
function normalizeRace(race) {
    if (!race) return null;
    const r = race.toLowerCase();
    if (r.includes('white') || r.includes('caucasian')) return 'White';
    if (r.includes('black') || r.includes('african')) return 'Black';
    if (r.includes('hispanic') || r.includes('latino')) return 'Latino';
    if (r.includes('asian') || r.includes('chinese') || r.includes('korean')) return 'Asian';
    if (r.includes('native') || r.includes('indian') || r.includes('ai')) return 'Native American';
    if (r.includes('mixed') || r.includes('multiracial')) return 'Mixed';
    return 'Other';
}

// Function to determine school type from name/enrollment
function getSchoolType(schoolName, enrollment, lowGrade, highGrade) {
    const name = schoolName.toLowerCase();
    
    if (name.includes('elementary') || name.includes('primary')) return 'Elementary';
    if (name.includes('middle') || name.includes('junior')) return 'Middle School';
    if (name.includes('high school') || name.includes('secondary')) return 'High School';
    if (name.includes('university') || name.includes('college')) return 'University';
    if (name.includes('preschool') || name.includes('kindergarten')) return 'Preschool';
    
    // Try to determine from grades
    if (lowGrade && highGrade) {
        const low = parseInt(lowGrade) || 0;
        const high = parseInt(highGrade) || 0;
        
        if (high <= 5) return 'Elementary';
        if (low >= 6 && high <= 8) return 'Middle School';
        if (low >= 9) return 'High School';
        if (high >= 12) return 'High School';
    }
    
    return 'School';
}

// Function to process Washington Post CSV data
async function processWashingtonPostData(csvPath) {
    return new Promise((resolve, reject) => {
        const incidents = [];
        let counter = 1;
        
        fs.createReadStream(csvPath)
            .pipe(csv())
            .on('data', (row) => {
                // Skip if no date
                if (!row.date) return;
                
                const incident = {
                    id: `us-wp-${String(counter).padStart(4, '0')}`,
                    date: row.date,
                    name: row.school_name || 'Unknown School',
                    location: `${row.city}, ${row.state}`,
                    lat: parseFloat(row.lat) || null,
                    lng: parseFloat(row.long) || null,
                    country: 'US',
                    killed: parseInt(row.killed) || 0,
                    injured: parseInt(row.injured) || 0,
                    type: getSchoolType(row.school_name, row.enrollment, row.low_grade, row.high_grade),
                    perp: {
                        name: row.shooter_relationship1 === 'student' ? 'Student' : 'Unknown',
                        age: parseInt(row.age_shooter1) || null,
                        gender: row.gender_shooter1 === 'm' ? 'Male' : row.gender_shooter1 === 'f' ? 'Female' : null,
                        race: normalizeRace(row.race_ethnicity_shooter1),
                        cisTrans: null // Not available in Washington Post data
                    }
                };
                
                // If lat/lng is missing, we'll geocode later
                incidents.push(incident);
                counter++;
            })
            .on('end', () => {
                console.log(`Processed ${incidents.length} incidents from Washington Post data`);
                resolve(incidents);
            })
            .on('error', reject);
    });
}

// Function to geocode missing coordinates
async function geocodeMissingCoordinates(incidents) {
    console.log('Geocoding missing coordinates...');
    let geocoded = 0;
    
    for (const incident of incidents) {
        if (!incident.lat || !incident.lng) {
            const coords = await geocodeLocation(incident.location, null, null);
            if (coords.lat && coords.lng) {
                incident.lat = coords.lat;
                incident.lng = coords.lng;
                geocoded++;
                console.log(`Geocoded: ${incident.location} -> ${coords.lat}, ${coords.lng}`);
            } else {
                console.log(`Failed to geocode: ${incident.location}`);
            }
            
            // Rate limiting - wait 1 second between requests to respect Nominatim's usage policy
            await delay(1000);
        }
    }
    
    console.log(`Successfully geocoded ${geocoded} locations`);
    return incidents;
}

// Function to add some notable international incidents (from existing data)
function addInternationalIncidents() {
    return [
        { id:"pk-001", date:"2014-12-16", name:"Army Public School", location:"Peshawar, Pakistan", lat:33.993, lng:71.528, country:"Pakistan", killed:145, injured:79, type:"Military School", perp:{name:"Taliban militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },
        { id:"ke-001", date:"2015-04-02", name:"Garissa University College", location:"Garissa, Kenya", lat:-0.454, lng:39.640, country:"Kenya", killed:147, injured:79, type:"University", perp:{name:"Al-Shabaab militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },
        { id:"ru-001", date:"2004-09-01", name:"Beslan School", location:"Beslan, North Ossetia, Russia", lat:43.186, lng:44.546, country:"Russia", killed:334, injured:783, type:"School", perp:{name:"Chechen separatists",age:null,gender:"Male",race:null}, note:"Hostage crisis/terrorist attack" },
        { id:"no-001", date:"2011-07-22", name:"Utøya Island", location:"Utøya, Norway", lat:60.069, lng:10.257, country:"Norway", killed:69, injured:66, type:"Youth Camp", perp:{name:"Anders Behring Breivik",age:32,gender:"Male",race:"White",religion:"Christian nationalist"} },
        { id:"de-001", date:"2002-04-26", name:"Gutenberg-Gymnasium", location:"Erfurt, Germany", lat:50.979, lng:11.033, country:"Germany", killed:17, injured:0, type:"Gymnasium", perp:{name:"Robert Steinhäuser",age:19,gender:"Male",race:"White"} },
        { id:"de-002", date:"2009-03-11", name:"Winnenden School", location:"Winnenden, Germany", lat:48.879, lng:9.313, country:"Germany", killed:16, injured:9, type:"School", perp:{name:"Tim Kretschmer",age:17,gender:"Male",race:"White"} },
        { id:"ca-001", date:"1989-12-06", name:"École Polytechnique", location:"Montreal, Canada", lat:45.505, lng:-73.614, country:"Canada", killed:14, injured:14, type:"University", perp:{name:"Marc Lépine",age:25,gender:"Male",race:"White"} },
        { id:"br-001", date:"2011-04-07", name:"Tasso da Silveira School", location:"Rio de Janeiro, Brazil", lat:-22.872, lng:-43.364, country:"Brazil", killed:12, injured:12, type:"Elementary", perp:{name:"Wellington de Oliveira",age:23,gender:"Male",race:"Mixed"} },
        { id:"fi-001", date:"2007-11-07", name:"Jokela High School", location:"Jokela, Finland", lat:60.541, lng:25.063, country:"Finland", killed:8, injured:1, type:"High School", perp:{name:"Pekka-Eric Auvinen",age:18,gender:"Male",race:"White"} },
        { id:"fi-002", date:"2008-09-23", name:"Seinäjoki University", location:"Kauhajoki, Finland", lat:62.432, lng:22.176, country:"Finland", killed:10, injured:1, type:"University", perp:{name:"Matti Saari",age:22,gender:"Male",race:"White"} },
        { id:"uk-001", date:"1996-03-13", name:"Dunblane Primary School", location:"Dunblane, Scotland", lat:56.188, lng:-3.962, country:"UK", killed:17, injured:15, type:"Primary School", perp:{name:"Thomas Hamilton",age:43,gender:"Male",race:"White"} },
        { id:"ru-002", date:"2018-10-17", name:"Kerch Polytechnic College", location:"Kerch, Crimea", lat:45.357, lng:36.475, country:"Russia", killed:20, injured:70, type:"College", perp:{name:"Vladislav Roslyakov",age:18,gender:"Male",race:"White"} },
        { id:"ru-003", date:"2021-05-11", name:"School No. 175", location:"Kazan, Russia", lat:55.797, lng:49.107, country:"Russia", killed:9, injured:23, type:"School", perp:{name:"Ilnaz Galyaviev",age:19,gender:"Male",race:"White"} },
        { id:"ru-004", date:"2022-09-26", name:"School No. 88", location:"Izhevsk, Russia", lat:56.855, lng:53.211, country:"Russia", killed:17, injured:24, type:"School", perp:{name:"Artyom Kazantsev",age:34,gender:"Male",race:"White"} },
        { id:"rs-001", date:"2023-05-03", name:"Vladislav Ribnikar Elementary", location:"Belgrade, Serbia", lat:44.814, lng:20.465, country:"Serbia", killed:9, injured:6, type:"Elementary", perp:{name:"Kosta Kecmanović",age:13,gender:"Male",race:"White"} },
        { id:"cz-001", date:"2023-12-21", name:"Charles University", location:"Prague, Czech Republic", lat:50.088, lng:14.419, country:"Czech Republic", killed:14, injured:25, type:"University", perp:{name:"David Kozák",age:24,gender:"Male",race:"White"} },
        { id:"th-001", date:"2022-10-06", name:"Uthai Sawan Nursery", location:"Nong Bua Lamphu, Thailand", lat:17.217, lng:102.429, country:"Thailand", killed:36, injured:12, type:"Nursery", perp:{name:"Panya Khamrab",age:34,gender:"Male",race:"Asian"} }
    ];
}

// Main processing function
async function main() {
    try {
        console.log('Starting data import process...');
        
        // Process Washington Post data
        const washingtonPostPath = path.join(__dirname, 'raw-data', 'washingtonpost-school-shootings.csv');
        let incidents = await processWashingtonPostData(washingtonPostPath);
        
        // Geocode missing coordinates (with rate limiting)
        incidents = await geocodeMissingCoordinates(incidents);
        
        // Add international incidents
        const internationalIncidents = addInternationalIncidents();
        incidents = incidents.concat(internationalIncidents);
        
        // Sort by total casualties (killed + injured) descending, then by date
        incidents.sort((a, b) => {
            const casualtiesA = (a.killed || 0) + (a.injured || 0);
            const casualtiesB = (b.killed || 0) + (b.injured || 0);
            
            if (casualtiesA !== casualtiesB) {
                return casualtiesB - casualtiesA; // Higher casualties first
            }
            
            // If casualties are equal, sort by date (newer first)
            return new Date(b.date) - new Date(a.date);
        });
        
        console.log(`Total incidents processed: ${incidents.length}`);
        console.log(`US incidents: ${incidents.filter(i => i.country === 'US').length}`);
        console.log(`International incidents: ${incidents.filter(i => i.country !== 'US').length}`);
        
        // Generate the JavaScript output file
        const outputContent = `// Global School Shootings Database - Complete Dataset
// Sources: Washington Post, K-12 SSDB, International Reports
// Total incidents: ${incidents.length}
// Last updated: ${new Date().toISOString().split('T')[0]}

const INCIDENTS = [
${incidents.map(incident => `  ${JSON.stringify(incident, null, 0)}`).join(',\n')}
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INCIDENTS };
}

// For browser use
if (typeof window !== 'undefined') {
  window.INCIDENTS = INCIDENTS;
}
`;
        
        // Write to output file
        const outputPath = path.join(__dirname, 'data-full.js');
        fs.writeFileSync(outputPath, outputContent, 'utf8');
        console.log(`Data exported to: ${outputPath}`);
        
        // Generate summary statistics
        const summary = {
            totalIncidents: incidents.length,
            totalKilled: incidents.reduce((sum, i) => sum + (i.killed || 0), 0),
            totalInjured: incidents.reduce((sum, i) => sum + (i.injured || 0), 0),
            countries: [...new Set(incidents.map(i => i.country))].sort(),
            dateRange: {
                earliest: incidents.map(i => i.date).sort()[0],
                latest: incidents.map(i => i.date).sort().reverse()[0]
            },
            byCountry: {}
        };
        
        // Count by country
        incidents.forEach(incident => {
            if (!summary.byCountry[incident.country]) {
                summary.byCountry[incident.country] = { count: 0, killed: 0, injured: 0 };
            }
            summary.byCountry[incident.country].count++;
            summary.byCountry[incident.country].killed += incident.killed || 0;
            summary.byCountry[incident.country].injured += incident.injured || 0;
        });
        
        console.log('\n=== SUMMARY STATISTICS ===');
        console.log(`Total incidents: ${summary.totalIncidents}`);
        console.log(`Total killed: ${summary.totalKilled}`);
        console.log(`Total injured: ${summary.totalInjured}`);
        console.log(`Date range: ${summary.dateRange.earliest} to ${summary.dateRange.latest}`);
        console.log(`Countries covered: ${summary.countries.length}`);
        console.log('\nBy country:');
        Object.entries(summary.byCountry)
            .sort(([,a], [,b]) => b.count - a.count)
            .forEach(([country, stats]) => {
                console.log(`  ${country}: ${stats.count} incidents, ${stats.killed} killed, ${stats.injured} injured`);
            });
        
        console.log('\nData import completed successfully!');
        
    } catch (error) {
        console.error('Error during data import:', error);
        process.exit(1);
    }
}

// Install csv-parser if not available
try {
    require('csv-parser');
} catch (e) {
    console.error('csv-parser module not found. Please install it:');
    console.error('npm install csv-parser');
    process.exit(1);
}

// Run the main function
if (require.main === module) {
    main();
}