// Global School Shootings Database
// Sources: Wikipedia, K-12 SSDB, The Violence Project, Gun Violence Archive, World Population Review
// Last updated: 2026-02-13

const INCIDENTS = [
  // === UNITED STATES (by death toll) ===
  { id:"us-001", date:"2007-04-16", name:"Virginia Tech", location:"Blacksburg, Virginia", lat:37.2288, lng:-80.4234, country:"US", killed:32, injured:23, type:"University", perp:{name:"Seung-Hui Cho",age:23,gender:"Male",race:"Asian"} },
  { id:"us-002", date:"2012-12-14", name:"Sandy Hook Elementary", location:"Newtown, Connecticut", lat:41.4117, lng:-73.3095, country:"US", killed:26, injured:2, type:"Elementary", perp:{name:"Adam Lanza",age:20,gender:"Male",race:"White"} },
  { id:"us-003", date:"2022-05-24", name:"Robb Elementary", location:"Uvalde, Texas", lat:29.2097, lng:-99.7873, country:"US", killed:21, injured:17, type:"Elementary", perp:{name:"Salvador Ramos",age:18,gender:"Male",race:"Latino"} },
  { id:"us-004", date:"2018-02-14", name:"Marjory Stoneman Douglas", location:"Parkland, Florida", lat:26.3067, lng:-80.2686, country:"US", killed:17, injured:17, type:"High School", perp:{name:"Nikolas Cruz",age:19,gender:"Male",race:"White"} },
  { id:"us-005", date:"1966-08-01", name:"University of Texas Tower", location:"Austin, Texas", lat:30.2849, lng:-97.7341, country:"US", killed:16, injured:31, type:"University", perp:{name:"Charles Whitman",age:25,gender:"Male",race:"White"} },
  { id:"us-006", date:"1999-04-20", name:"Columbine High School", location:"Littleton, Colorado", lat:39.6533, lng:-105.0775, country:"US", killed:13, injured:21, type:"High School", perp:{name:"Eric Harris & Dylan Klebold",age:18,gender:"Male",race:"White"} },
  { id:"us-007", date:"2018-05-18", name:"Santa Fe High School", location:"Santa Fe, Texas", lat:29.3883, lng:-95.1022, country:"US", killed:10, injured:13, type:"High School", perp:{name:"Dimitrios Pagourtzis",age:17,gender:"Male",race:"White"} },
  { id:"us-008", date:"2005-03-21", name:"Red Lake High School", location:"Red Lake, Minnesota", lat:47.8794, lng:-95.0169, country:"US", killed:10, injured:7, type:"High School", perp:{name:"Jeff Weise",age:16,gender:"Male",race:"Native American"} },
  { id:"us-009", date:"2015-10-01", name:"Umpqua Community College", location:"Roseburg, Oregon", lat:43.2176, lng:-123.3567, country:"US", killed:10, injured:8, type:"College", perp:{name:"Christopher Harper-Mercer",age:26,gender:"Male",race:"Mixed"} },
  { id:"us-010", date:"2012-04-02", name:"Oikos University", location:"Oakland, California", lat:37.807, lng:-122.271, country:"US", killed:7, injured:3, type:"University", perp:{name:"One L. Goh",age:43,gender:"Male",race:"Asian"} },
  { id:"us-011", date:"1976-07-12", name:"CSU Fullerton", location:"Fullerton, California", lat:33.883, lng:-117.887, country:"US", killed:7, injured:2, type:"University", perp:{name:"Edward Allaway",age:37,gender:"Male",race:"White"} },
  { id:"us-012", date:"2006-10-02", name:"West Nickel Mines School", location:"Nickel Mines, Pennsylvania", lat:40.032, lng:-76.136, country:"US", killed:6, injured:5, type:"Amish School", perp:{name:"Charles Roberts",age:32,gender:"Male",race:"White"} },
  { id:"us-013", date:"2023-03-27", name:"The Covenant School", location:"Nashville, Tennessee", lat:36.08, lng:-86.802, country:"US", killed:6, injured:2, type:"Private School", perp:{name:"Aiden Hale",age:28,gender:"Transgender Male",race:"White",cisTrans:"Transgender"} },
  { id:"us-014", date:"2008-02-14", name:"Northern Illinois University", location:"DeKalb, Illinois", lat:41.947, lng:-88.751, country:"US", killed:5, injured:21, type:"University", perp:{name:"Steven Kazmierczak",age:27,gender:"Male",race:"White"} },
  { id:"us-015", date:"1989-01-17", name:"Cleveland Elementary", location:"Stockton, California", lat:37.958, lng:-121.291, country:"US", killed:5, injured:31, type:"Elementary", perp:{name:"Patrick Purdy",age:24,gender:"Male",race:"White"} },
  { id:"us-016", date:"1991-11-01", name:"University of Iowa", location:"Iowa City, Iowa", lat:41.661, lng:-91.530, country:"US", killed:6, injured:1, type:"University", perp:{name:"Gang Lu",age:28,gender:"Male",race:"Asian"} },
  { id:"us-017", date:"2021-11-30", name:"Oxford High School", location:"Oxford, Michigan", lat:42.824, lng:-83.264, country:"US", killed:4, injured:7, type:"High School", perp:{name:"Ethan Crumbley",age:15,gender:"Male",race:"White"} },
  { id:"us-018", date:"2024-09-04", name:"Apalachee High School", location:"Winder, Georgia", lat:33.997, lng:-83.711, country:"US", killed:4, injured:9, type:"High School", perp:{name:"Colt Gray",age:14,gender:"Male",race:"White"} },
  { id:"us-019", date:"2023-02-13", name:"Michigan State University", location:"East Lansing, Michigan", lat:42.702, lng:-84.482, country:"US", killed:3, injured:5, type:"University", perp:{name:"Anthony McRae",age:43,gender:"Male",race:"Black"} },
  { id:"us-020", date:"2014-10-24", name:"Marysville Pilchuck High School", location:"Marysville, Washington", lat:48.052, lng:-122.190, country:"US", killed:4, injured:4, type:"High School", perp:{name:"Jaylen Fryberg",age:15,gender:"Male",race:"Native American"} },
  { id:"us-021", date:"2014-06-10", name:"Reynolds High School", location:"Troutdale, Oregon", lat:45.539, lng:-122.394, country:"US", killed:1, injured:1, type:"High School", perp:{name:"Jared Padgett",age:15,gender:"Male",race:"White"} },
  { id:"us-022", date:"2019-11-14", name:"Saugus High School", location:"Santa Clarita, California", lat:34.417, lng:-118.466, country:"US", killed:2, injured:3, type:"High School", perp:{name:"Nathaniel Berhow",age:16,gender:"Male",race:"Asian"} },
  { id:"us-023", date:"2022-10-24", name:"Central VPA High School", location:"St. Louis, Missouri", lat:38.633, lng:-90.234, country:"US", killed:2, injured:7, type:"High School", perp:{name:"Orlando Harris",age:19,gender:"Male",race:"Black"} },
  { id:"us-024", date:"2023-12-06", name:"UNLV", location:"Las Vegas, Nevada", lat:36.108, lng:-115.144, country:"US", killed:3, injured:1, type:"University", perp:{name:"Anthony Polito",age:67,gender:"Male",race:"White"} },
  { id:"us-025", date:"2024-01-04", name:"Perry High School", location:"Perry, Iowa", lat:41.828, lng:-94.098, country:"US", killed:1, injured:5, type:"High School", perp:{name:"Dylan Butler",age:17,gender:"Male",race:"White"} },
  { id:"us-026", date:"2017-11-14", name:"Rancho Tehama Elementary", location:"Rancho Tehama, California", lat:40.024, lng:-122.424, country:"US", killed:5, injured:18, type:"Elementary", perp:{name:"Kevin Neal",age:43,gender:"Male",race:"White"} },
  { id:"us-027", date:"2019-05-07", name:"STEM School Highlands Ranch", location:"Highlands Ranch, Colorado", lat:39.538, lng:-104.951, country:"US", killed:1, injured:8, type:"High School", perp:{name:"Devon Erickson & Alec McKinney",age:18,gender:"Male",race:"White"} },
  { id:"us-028", date:"2001-03-05", name:"Santana High School", location:"Santee, California", lat:32.838, lng:-116.974, country:"US", killed:2, injured:13, type:"High School", perp:{name:"Charles Andrew Williams",age:15,gender:"Male",race:"White"} },
  { id:"us-029", date:"1998-03-24", name:"Westside Middle School", location:"Jonesboro, Arkansas", lat:35.842, lng:-90.704, country:"US", killed:5, injured:10, type:"Middle School", perp:{name:"Andrew Golden & Mitchell Johnson",age:13,gender:"Male",race:"White"} },
  { id:"us-030", date:"1998-05-21", name:"Thurston High School", location:"Springfield, Oregon", lat:44.046, lng:-122.917, country:"US", killed:2, injured:25, type:"High School", perp:{name:"Kip Kinkel",age:15,gender:"Male",race:"White"} },
  { id:"us-031", date:"1997-10-01", name:"Pearl High School", location:"Pearl, Mississippi", lat:32.275, lng:-90.115, country:"US", killed:2, injured:7, type:"High School", perp:{name:"Luke Woodham",age:16,gender:"Male",race:"White"} },
  { id:"us-032", date:"1997-12-01", name:"Heath High School", location:"West Paducah, Kentucky", lat:37.092, lng:-88.779, country:"US", killed:3, injured:5, type:"High School", perp:{name:"Michael Carneal",age:14,gender:"Male",race:"White"} },
  { id:"us-033", date:"2010-02-12", name:"University of Alabama Huntsville", location:"Huntsville, Alabama", lat:34.729, lng:-86.640, country:"US", killed:3, injured:3, type:"University", perp:{name:"Amy Bishop",age:44,gender:"Female",race:"White"} },
  { id:"us-034", date:"2016-09-28", name:"Townville Elementary", location:"Townville, South Carolina", lat:34.555, lng:-82.911, country:"US", killed:1, injured:3, type:"Elementary", perp:{name:"Jesse Osborne",age:14,gender:"Male",race:"White"} },
  { id:"us-035", date:"2013-10-21", name:"Sparks Middle School", location:"Sparks, Nevada", lat:39.534, lng:-119.753, country:"US", killed:1, injured:2, type:"Middle School", perp:{name:"Jose Reyes",age:12,gender:"Male",race:"Latino"} },

  // === INTERNATIONAL ===
  { id:"pk-001", date:"2014-12-16", name:"Army Public School", location:"Peshawar, Pakistan", lat:33.993, lng:71.528, country:"Pakistan", killed:145, injured:79, type:"Military School", perp:{name:"Taliban militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },
  { id:"ke-001", date:"2015-04-02", name:"Garissa University College", location:"Garissa, Kenya", lat:-0.454, lng:39.640, country:"Kenya", killed:147, injured:79, type:"University", perp:{name:"Al-Shabaab militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },
  { id:"ru-001", date:"2004-09-01", name:"Beslan School", location:"Beslan, North Ossetia, Russia", lat:43.186, lng:44.546, country:"Russia", killed:334, injured:783, type:"School", perp:{name:"Chechen separatists",age:null,gender:"Male",race:null}, note:"Hostage crisis/terrorist attack" },
  { id:"no-001", date:"2011-07-22", name:"Utøya Island", location:"Utøya, Norway", lat:60.069, lng:10.257, country:"Norway", killed:69, injured:66, type:"Youth Camp", perp:{name:"Anders Behring Breivik",age:32,gender:"Male",race:"White",religion:"Christian nationalist"} },
  { id:"de-001", date:"2002-04-26", name:"Gutenberg-Gymnasium", location:"Erfurt, Germany", lat:50.979, lng:11.033, country:"Germany", killed:17, injured:0, type:"Gymnasium", perp:{name:"Robert Steinhäuser",age:19,gender:"Male",race:"White"} },
  { id:"de-002", date:"2009-03-11", name:"Winnenden School", location:"Winnenden, Germany", lat:48.879, lng:9.313, country:"Germany", killed:16, injured:9, type:"School", perp:{name:"Tim Kretschmer",age:17,gender:"Male",race:"White"} },
  { id:"ca-001", date:"1989-12-06", name:"École Polytechnique", location:"Montreal, Canada", lat:45.505, lng:-73.614, country:"Canada", killed:14, injured:14, type:"University", perp:{name:"Marc Lépine",age:25,gender:"Male",race:"White"} },
  { id:"br-001", date:"2011-04-07", name:"Tasso da Silveira School", location:"Rio de Janeiro, Brazil", lat:-22.872, lng:-43.364, country:"Brazil", killed:12, injured:12, type:"Elementary", perp:{name:"Wellington de Oliveira",age:23,gender:"Male",race:"Mixed"} },
  { id:"az-001", date:"2009-04-30", name:"Azerbaijan State Oil Academy", location:"Baku, Azerbaijan", lat:40.409, lng:49.868, country:"Azerbaijan", killed:12, injured:13, type:"University", perp:{name:"Farda Gadirov",age:29,gender:"Male",race:null} },
  { id:"fi-001", date:"2007-11-07", name:"Jokela High School", location:"Jokela, Finland", lat:60.541, lng:25.063, country:"Finland", killed:8, injured:1, type:"High School", perp:{name:"Pekka-Eric Auvinen",age:18,gender:"Male",race:"White"} },
  { id:"fi-002", date:"2008-09-23", name:"Seinäjoki University", location:"Kauhajoki, Finland", lat:62.432, lng:22.176, country:"Finland", killed:10, injured:1, type:"University", perp:{name:"Matti Saari",age:22,gender:"Male",race:"White"} },
  { id:"uk-001", date:"1996-03-13", name:"Dunblane Primary School", location:"Dunblane, Scotland", lat:56.188, lng:-3.962, country:"UK", killed:17, injured:15, type:"Primary School", perp:{name:"Thomas Hamilton",age:43,gender:"Male",race:"White"} },
  { id:"cn-001", date:"2004-09-20", name:"Ruzhou City School", location:"Ruzhou, China", lat:34.166, lng:112.845, country:"China", killed:8, injured:4, type:"School", perp:{name:"Yan Yanming",age:null,gender:"Male",race:"Asian"} },
  { id:"ru-002", date:"2018-10-17", name:"Kerch Polytechnic College", location:"Kerch, Crimea", lat:45.357, lng:36.475, country:"Russia", killed:20, injured:70, type:"College", perp:{name:"Vladislav Roslyakov",age:18,gender:"Male",race:"White"} },
  { id:"ru-003", date:"2021-05-11", name:"School No. 175", location:"Kazan, Russia", lat:55.797, lng:49.107, country:"Russia", killed:9, injured:23, type:"School", perp:{name:"Ilnaz Galyaviev",age:19,gender:"Male",race:"White"} },
  { id:"ru-004", date:"2022-09-26", name:"School No. 88", location:"Izhevsk, Russia", lat:56.855, lng:53.211, country:"Russia", killed:17, injured:24, type:"School", perp:{name:"Artyom Kazantsev",age:34,gender:"Male",race:"White"} },
  { id:"mx-001", date:"2017-01-18", name:"Colegio Americano del Noreste", location:"Monterrey, Mexico", lat:25.668, lng:-100.310, country:"Mexico", killed:1, injured:4, type:"Private School", perp:{name:"Federico Guevara",age:15,gender:"Male",race:"Latino"} },
  { id:"ar-001", date:"2004-09-28", name:"No. 202 School", location:"Carmen de Patagones, Argentina", lat:-40.813, lng:-62.983, country:"Argentina", killed:3, injured:5, type:"School", perp:{name:"Junior",age:15,gender:"Male",race:"White"} },
  { id:"za-001", date:"1999-08-26", name:"Nic Diederichs Technical School", location:"Krugersdorp, South Africa", lat:-26.085, lng:27.770, country:"South Africa", killed:2, injured:4, type:"School", perp:{name:"Unknown student",age:17,gender:"Male",race:"White"} },
  { id:"rs-001", date:"2023-05-03", name:"Vladislav Ribnikar Elementary", location:"Belgrade, Serbia", lat:44.814, lng:20.465, country:"Serbia", killed:9, injured:6, type:"Elementary", perp:{name:"Kosta Kecmanović",age:13,gender:"Male",race:"White"} },
  { id:"cz-001", date:"2023-12-21", name:"Charles University", location:"Prague, Czech Republic", lat:50.088, lng:14.419, country:"Czech Republic", killed:14, injured:25, type:"University", perp:{name:"David Kozák",age:24,gender:"Male",race:"White"} },
  { id:"th-001", date:"2022-10-06", name:"Uthai Sawan Nursery", location:"Nong Bua Lamphu, Thailand", lat:17.217, lng:102.429, country:"Thailand", killed:36, injured:12, type:"Nursery", perp:{name:"Panya Khamrab",age:34,gender:"Male",race:"Asian"} },
  { id:"in-001", date:"2007-12-13", name:"Gurgaon school shooting", location:"Gurgaon, India", lat:28.459, lng:77.027, country:"India", killed:1, injured:0, type:"School", perp:{name:"Student",age:13,gender:"Male",race:"Asian"} },
  { id:"eg-001", date:"1996-10-17", name:"Cairo University", location:"Cairo, Egypt", lat:30.044, lng:31.235, country:"Egypt", killed:1, injured:3, type:"University", perp:{name:"Unknown",age:null,gender:"Male",race:null} },
];

// US population demographics (2020 Census + Pew Research) for per-capita comparison
const US_POPULATION = {
  total: 331449281,
  byRace: {
    "White": { pop: 204277273, pct: 61.6 },
    "Black": { pop: 41104200, pct: 12.4 },
    "Latino": { pop: 62080044, pct: 18.7 },
    "Asian": { pop: 19886049, pct: 6.0 },
    "Native American": { pop: 3727135, pct: 1.1 },
    "Mixed": { pop: 5374252, pct: 1.6 },
    "Other": { pop: 1000328, pct: 0.3 }
  },
  byGender: {
    "Male": { pop: 162826299, pct: 49.1 },
    "Female": { pop: 168622982, pct: 50.9 },
    "Transgender Male": { pop: 1657247, pct: 0.5 }
  },
  // Trans population: ~1.6% of US adults (Pew Research 2022)
  // https://www.pewresearch.org/fact-tank/2022/06/07/about-5-of-young-adults-in-the-u-s-say-their-gender-is-different-from-their-sex-assigned-at-birth/
  byTransStatus: {
    "Cisgender": { pop: 326147788, pct: 98.4 },
    "Transgender": { pop: 5301493, pct: 1.6 }
  }
};

// Country shooting counts (sourced from World Population Review & Wikipedia)
const COUNTRY_COUNTS = {
  "US": { shootings: 395, population: 331449281, label:"United States" },
  "Mexico": { shootings: 8, population: 128933000, label:"Mexico" },
  "South Africa": { shootings: 6, population: 59308690, label:"South Africa" },
  "India": { shootings: 5, population: 1380004385, label:"India" },
  "Nigeria": { shootings: 4, population: 206139589, label:"Nigeria" },
  "Pakistan": { shootings: 4, population: 220892340, label:"Pakistan" },
  "Brazil": { shootings: 4, population: 212559417, label:"Brazil" },
  "Canada": { shootings: 3, population: 37742154, label:"Canada" },
  "France": { shootings: 2, population: 65273511, label:"France" },
  "Germany": { shootings: 3, population: 83783942, label:"Germany" },
  "Russia": { shootings: 5, population: 145934462, label:"Russia" },
  "Finland": { shootings: 2, population: 5540720, label:"Finland" },
  "UK": { shootings: 1, population: 67886011, label:"United Kingdom" },
  "Norway": { shootings: 1, population: 5421241, label:"Norway" },
  "Kenya": { shootings: 1, population: 53771296, label:"Kenya" },
  "Thailand": { shootings: 1, population: 69799978, label:"Thailand" },
  "Serbia": { shootings: 1, population: 6871547, label:"Serbia" },
  "Czech Republic": { shootings: 1, population: 10708981, label:"Czech Republic" },
  "Argentina": { shootings: 1, population: 45376763, label:"Argentina" },
  "Azerbaijan": { shootings: 1, population: 10139177, label:"Azerbaijan" },
  "China": { shootings: 1, population: 1439323776, label:"China" },
  "Egypt": { shootings: 1, population: 102334404, label:"Egypt" }
};
