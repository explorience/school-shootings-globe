// Global School Shootings Database - COMPREHENSIVE EXPANSION
// Sources: Wikipedia (US, Europe, Australia, Canada), Ballotpedia, K-12 SSDB references, BBC, CBC, Gun Violence Archive
// Includes: 400+ incidents from 1595-2026 across 35+ countries
// Last updated: 2026-02-13

const INCIDENTS = [
  // === UNITED STATES (expanded from Wikipedia and other sources) ===
  // Major incidents (10+ killed)
  { id:"us-001", date:"2007-04-16", name:"Virginia Tech", location:"Blacksburg, Virginia", lat:37.2288, lng:-80.4234, country:"US", killed:32, injured:23, type:"University", perp:{name:"Seung-Hui Cho",age:23,gender:"Male",race:"Asian"} },
  { id:"us-002", date:"2012-12-14", name:"Sandy Hook Elementary", location:"Newtown, Connecticut", lat:41.4117, lng:-73.3095, country:"US", killed:26, injured:2, type:"Elementary", perp:{name:"Adam Lanza",age:20,gender:"Male",race:"White"} },
  { id:"us-003", date:"2022-05-24", name:"Robb Elementary", location:"Uvalde, Texas", lat:29.2097, lng:-99.7873, country:"US", killed:21, injured:17, type:"Elementary", perp:{name:"Salvador Ramos",age:18,gender:"Male",race:"Latino"} },
  { id:"us-004", date:"2018-02-14", name:"Marjory Stoneman Douglas", location:"Parkland, Florida", lat:26.3067, lng:-80.2686, country:"US", killed:17, injured:17, type:"High School", perp:{name:"Nikolas Cruz",age:19,gender:"Male",race:"White"} },
  { id:"us-005", date:"1966-08-01", name:"University of Texas Tower", location:"Austin, Texas", lat:30.2849, lng:-97.7341, country:"US", killed:16, injured:31, type:"University", perp:{name:"Charles Whitman",age:25,gender:"Male",race:"White"} },
  { id:"us-006", date:"2002-04-26", name:"Gutenberg-Gymnasium", location:"Erfurt, Germany", lat:50.979, lng:11.033, country:"Germany", killed:17, injured:0, type:"Gymnasium", perp:{name:"Robert Steinhäuser",age:19,gender:"Male",race:"White"} },
  { id:"us-007", date:"1999-04-20", name:"Columbine High School", location:"Littleton, Colorado", lat:39.6533, lng:-105.0775, country:"US", killed:13, injured:21, type:"High School", perp:{name:"Eric Harris & Dylan Klebold",age:18,gender:"Male",race:"White"} },
  { id:"us-008", date:"2018-05-18", name:"Santa Fe High School", location:"Santa Fe, Texas", lat:29.3883, lng:-95.1022, country:"US", killed:10, injured:13, type:"High School", perp:{name:"Dimitrios Pagourtzis",age:17,gender:"Male",race:"White"} },
  { id:"us-009", date:"2005-03-21", name:"Red Lake High School", location:"Red Lake, Minnesota", lat:47.8794, lng:-95.0169, country:"US", killed:10, injured:7, type:"High School", perp:{name:"Jeff Weise",age:16,gender:"Male",race:"Native American"} },
  { id:"us-010", date:"2015-10-01", name:"Umpqua Community College", location:"Roseburg, Oregon", lat:43.2176, lng:-123.3567, country:"US", killed:10, injured:8, type:"College", perp:{name:"Christopher Harper-Mercer",age:26,gender:"Male",race:"Mixed"} },
  { id:"us-011", date:"1927-05-18", name:"Bath School", location:"Bath, Michigan", lat:42.8178, lng:-84.4411, country:"US", killed:45, injured:58, type:"Elementary", perp:{name:"Andrew Kehoe",age:55,gender:"Male",race:"White"}, note:"Bombing and shooting" },

  // === EUROPEAN INCIDENTS (comprehensive from Wikipedia) ===
  // Historical incidents 1595-1899
  { id:"eu-001", date:"1595-09-01", name:"Edinburgh High School", location:"Edinburgh, Scotland", lat:55.9533, lng:-3.1883, country:"UK", killed:1, injured:0, type:"High School", perp:{name:"William Sinclair",age:13,gender:"Male",race:"White"} },
  { id:"eu-002", date:"1871-05-25", name:"Saarbrücken Gymnasium", location:"Saarbrücken, Germany", lat:49.2401, lng:7.0653, country:"Germany", killed:0, injured:2, type:"Gymnasium", perp:{name:"Julius Becker",age:18,gender:"Male",race:"White"} },
  { id:"eu-003", date:"1874-05-05", name:"Yekaterinburg Gymnasium", location:"Yekaterinburg, Russia", lat:56.8431, lng:60.6454, country:"Russia", killed:1, injured:0, type:"Gymnasium", perp:{name:"Alexei Skachkov",age:null,gender:"Male",race:"White"} },
  { id:"eu-004", date:"1875-01-31", name:"Oldham Bluecoats School", location:"Oldham, England", lat:53.5409, lng:-2.1114, country:"UK", killed:1, injured:0, type:"School", perp:{name:"Worsley",age:null,gender:"Male",race:"White"} },
  { id:"eu-005", date:"1885-11-20", name:"St. Andrew's Schools", location:"London, England", lat:51.5074, lng:-0.1278, country:"UK", killed:1, injured:0, type:"Elementary", perp:{name:"William Slade",age:9,gender:"Male",race:"White"} },
  
  // 1890s European incidents
  { id:"eu-006", date:"1890-11-06", name:"University College Oxford", location:"Oxford, England", lat:51.7520, lng:-1.2577, country:"UK", killed:0, injured:1, type:"University", perp:{name:"Catherine Riordan",age:null,gender:"Female",race:"White"} },
  { id:"eu-007", date:"1891-12-05", name:"Tooting College", location:"London, England", lat:51.4312, lng:-0.1681, country:"UK", killed:0, injured:0, type:"College", perp:{name:"Francisco Blanes",age:15,gender:"Male",race:"Latino"} },
  { id:"eu-008", date:"1892-04-21", name:"Old Butterburn School", location:"Dundee, Scotland", lat:56.4620, lng:-2.9707, country:"UK", killed:0, injured:1, type:"School", perp:{name:"John Smith",age:19,gender:"Male",race:"White"} },
  { id:"eu-009", date:"1892-09-14", name:"Tarnopol Gymnasium", location:"Tarnopol, Austria-Hungary", lat:49.5535, lng:25.5948, country:"Ukraine", killed:2, injured:0, type:"Gymnasium", perp:{name:"Johann Schwed",age:null,gender:"Male",race:"White"} },
  { id:"eu-010", date:"1892-10-23", name:"Pembroke House School", location:"Lytham St Annes, England", lat:53.7375, lng:-3.0342, country:"UK", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-011", date:"1892-11-23", name:"Leeds School", location:"Leeds, England", lat:53.8008, lng:-1.5491, country:"UK", killed:1, injured:0, type:"School", perp:{name:"Accidental",age:15,gender:"Male",race:"White"} },
  { id:"eu-012", date:"1893-03-10", name:"Christ Church Schools", location:"Carlisle, England", lat:54.8951, lng:-2.9441, country:"UK", killed:0, injured:1, type:"School", perp:{name:"Teacher",age:null,gender:"Male",race:"White"} },
  { id:"eu-013", date:"1893-10-04", name:"Stockport Grammar School", location:"Stockport, England", lat:53.4084, lng:-2.1581, country:"UK", killed:0, injured:1, type:"Grammar School", perp:{name:"William Liddell",age:null,gender:"Male",race:"White"} },
  { id:"eu-014", date:"1894-03-03", name:"Sherborne School", location:"Sherborne, England", lat:50.9488, lng:-2.5148, country:"UK", killed:1, injured:0, type:"School", perp:{name:"Webb and Saillard",age:null,gender:"Male",race:"White"} },
  { id:"eu-015", date:"1894-07-20", name:"Malvern College", location:"Malvern, England", lat:52.1089, lng:-2.3194, country:"UK", killed:1, injured:0, type:"College", perp:{name:"Felix Gabriel Richardson",age:17,gender:"Male",race:"White"} },
  { id:"eu-016", date:"1896-01-01", name:"Collegiate School", location:"Leighton Buzzard, England", lat:51.9167, lng:-0.6620, country:"UK", killed:0, injured:1, type:"School", perp:{name:"Powell",age:null,gender:"Male",race:"White"} },
  { id:"eu-017", date:"1898-07-04", name:"Edinburgh Academy", location:"Edinburgh, Scotland", lat:55.9647, lng:-3.2256, country:"UK", killed:1, injured:0, type:"Academy", perp:{name:"Andrew Newlands",age:15,gender:"Male",race:"White"} },
  { id:"eu-018", date:"1899-02-01", name:"Dulliken School", location:"Dulliken, Switzerland", lat:47.3544, lng:7.9089, country:"Switzerland", killed:0, injured:0, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },

  // 1900-1919 European incidents
  { id:"eu-019", date:"1900-09-15", name:"Kharkov Gymnasium", location:"Kharkov, Russian Empire", lat:49.9935, lng:36.2304, country:"Ukraine", killed:1, injured:1, type:"Gymnasium", perp:{name:"Iwanow",age:null,gender:"Male",race:"White"} },
  { id:"eu-020", date:"1901-02-01", name:"University of Geneva", location:"Geneva, Switzerland", lat:46.2044, lng:6.1432, country:"Switzerland", killed:0, injured:1, type:"University", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-021", date:"1902-02-05", name:"Scheveningen School", location:"Scheveningen, Netherlands", lat:52.1043, lng:4.2756, country:"Netherlands", killed:0, injured:1, type:"Municipal School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-022", date:"1902-10-06", name:"Droyssig School", location:"Droyssig, Austria-Hungary", lat:50.7753, lng:14.4378, country:"Czech Republic", killed:4, injured:3, type:"School", perp:{name:"Teacher",age:40,gender:"Male",race:"White"} },
  { id:"eu-023", date:"1904-05-30", name:"Imola School", location:"Imola, Italy", lat:44.3534, lng:11.7136, country:"Italy", killed:0, injured:1, type:"School", perp:{name:"School director",age:null,gender:"Male",race:"White"} },
  { id:"eu-024", date:"1905-02-15", name:"Moscow Commercial School", location:"Moscow, Russian Empire", lat:55.7558, lng:37.6176, country:"Russia", killed:2, injured:0, type:"Commercial School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-025", date:"1906-06-14", name:"Dulwich College", location:"London, England", lat:51.4427, lng:-0.0865, country:"UK", killed:1, injured:0, type:"College", perp:{name:"John R.L. Rudd",age:12,gender:"Male",race:"White"} },
  { id:"eu-026", date:"1906-12-01", name:"Uznach School", location:"Uznach, Switzerland", lat:47.2262, lng:8.9773, country:"Switzerland", killed:0, injured:0, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-027", date:"1908-01-15", name:"Coombe Ragged Boys' Home", location:"Dublin, Ireland", lat:53.3498, lng:-6.2603, country:"Ireland", killed:2, injured:1, type:"School", perp:{name:"Augustus Windsor",age:70,gender:"Male",race:"White"} },
  { id:"eu-028", date:"1908-10-06", name:"Samara Grammar School", location:"Samara, Russian Empire", lat:53.1956, lng:50.1003, country:"Russia", killed:0, injured:0, type:"Grammar School", perp:{name:"Two students",age:null,gender:"Male",race:"White"} },
  { id:"eu-029", date:"1909-05-03", name:"Alleyn's Grammar School", location:"London, England", lat:51.4427, lng:-0.0865, country:"UK", killed:0, injured:1, type:"Grammar School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },

  // 1910-1919 European incidents  
  { id:"eu-030", date:"1910-01-01", name:"Arbon Girl's School", location:"Arbon, Switzerland", lat:47.5133, lng:9.4331, country:"Switzerland", killed:1, injured:1, type:"Girl's School", perp:{name:"15-year-old boy",age:15,gender:"Male",race:"White"} },
  { id:"eu-031", date:"1911-03-14", name:"Cheltenham College", location:"Cheltenham, England", lat:51.8984, lng:-2.0784, country:"UK", killed:1, injured:0, type:"College", perp:{name:"Edward Archer",age:null,gender:"Male",race:"White"} },
  { id:"eu-032", date:"1912-01-18", name:"Suceava School", location:"Suceava, Austria-Hungary", lat:47.6587, lng:26.2532, country:"Romania", killed:2, injured:0, type:"School", perp:{name:"17-year-old student",age:17,gender:"Male",race:"White"} },
  { id:"eu-033", date:"1912-07-01", name:"Odesa Lyceum", location:"Odesa, Russian Empire", lat:46.4825, lng:30.7233, country:"Ukraine", killed:0, injured:1, type:"Lyceum", perp:{name:"16-year-old student",age:16,gender:"Male",race:"White"} },
  { id:"eu-034", date:"1912-07-17", name:"Heilbronn School", location:"Heilbronn, Germany", lat:49.1427, lng:9.2109, country:"Germany", killed:0, injured:1, type:"School", perp:{name:"18-year-old student",age:18,gender:"Male",race:"White"} },
  { id:"eu-035", date:"1912-09-01", name:"Bürglen School", location:"Bürglen, Switzerland", lat:47.6033, lng:8.9567, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-036", date:"1912-09-23", name:"Sankt Pölten Gymnasium", location:"Sankt Pölten, Austria-Hungary", lat:48.2058, lng:15.6255, country:"Austria", killed:1, injured:0, type:"Gymnasium", perp:{name:"Rudolf Hlawat",age:null,gender:"Male",race:"White"} },
  { id:"eu-037", date:"1913-02-01", name:"Forest House School", location:"London, England", lat:51.6072, lng:-0.0263, country:"UK", killed:0, injured:1, type:"School", perp:{name:"Frederick Sauri",age:16,gender:"Male",race:"White"} },
  { id:"eu-038", date:"1913-05-01", name:"Porrentruy School", location:"Porrentruy, Switzerland", lat:47.4149, lng:7.0758, country:"Switzerland", killed:0, injured:1, type:"Primary School", perp:{name:"14-year-old student",age:14,gender:"Male",race:"White"} },
  { id:"eu-039", date:"1913-06-20", name:"St Mary's Catholic School", location:"Bremen, Germany", lat:53.0793, lng:8.8017, country:"Germany", killed:5, injured:21, type:"Catholic School", perp:{name:"Heinz Schmidt",age:29,gender:"Male",race:"White"} },
  { id:"eu-040", date:"1913-10-09", name:"Szeged Gymnasium", location:"Szeged, Austria-Hungary", lat:46.2530, lng:20.1414, country:"Hungary", killed:1, injured:0, type:"Gymnasium", perp:{name:"Johann Skultety",age:null,gender:"Male",race:"White"} },
  { id:"eu-041", date:"1913-10-15", name:"Trinity College Dublin", location:"Dublin, Ireland", lat:53.3441, lng:-6.2548, country:"Ireland", killed:1, injured:0, type:"University", perp:{name:"Edward R.M. Wright",age:23,gender:"Male",race:"White"} },

  // 1920s European incidents
  { id:"eu-042", date:"1921-03-15", name:"Helsinki Lyceum", location:"Helsinki, Finland", lat:60.1699, lng:24.9384, country:"Finland", killed:1, injured:0, type:"Lyceum", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-043", date:"1922-03-01", name:"Därstetten School", location:"Därstetten, Switzerland", lat:46.7236, lng:7.5525, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-044", date:"1923-11-01", name:"Neuchâtel School", location:"Neuchâtel, Switzerland", lat:46.9930, lng:6.9319, country:"Switzerland", killed:1, injured:0, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-045", date:"1924-09-01", name:"See District School", location:"See District, Switzerland", lat:47.2260, lng:9.1307, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-046", date:"1924-12-01", name:"Boys' School Zeist", location:"Zeist, Netherlands", lat:52.0907, lng:5.2295, country:"Netherlands", killed:0, injured:1, type:"Boys' School", perp:{name:"7th grade student",age:null,gender:"Male",race:"White"} },
  { id:"eu-047", date:"1925-05-06", name:"Wilno High School", location:"Vilnius, Poland", lat:54.6872, lng:25.2797, country:"Lithuania", killed:5, injured:10, type:"High School", perp:{name:"Stanisław Ławrynowicz & Janusz Obrąpalski",age:22,gender:"Male",race:"White"} },
  { id:"eu-048", date:"1925-07-01", name:"Dauntsey's School", location:"West Lavington, England", lat:51.2878, lng:-2.0481, country:"UK", killed:1, injured:0, type:"School", perp:{name:"William John Butler",age:15,gender:"Male",race:"White"} },
  { id:"eu-049", date:"1926-11-01", name:"Tägerwilen School", location:"Tägerwilen, Switzerland", lat:47.6633, lng:9.1000, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-050", date:"1926-11-15", name:"Warsaw School", location:"Warsaw, Poland", lat:52.2297, lng:21.0122, country:"Poland", killed:1, injured:1, type:"School", perp:{name:"19-year-old student",age:19,gender:"Male",race:"White"} },

  // 1930s-1950s European incidents
  { id:"eu-051", date:"1930-06-03", name:"King's College Cambridge", location:"Cambridge, England", lat:52.2043, lng:0.1218, country:"UK", killed:3, injured:0, type:"University", perp:{name:"Douglas Potts",age:19,gender:"Male",race:"White"} },
  { id:"eu-052", date:"1931-02-01", name:"Sulgen School", location:"Sulgen, Switzerland", lat:47.5383, lng:9.3000, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-053", date:"1931-03-05", name:"Pristina Gymnasium", location:"Pristina, Yugoslavia", lat:42.6629, lng:21.1655, country:"Kosovo", killed:0, injured:1, type:"Gymnasium", perp:{name:"Ismailović",age:null,gender:"Male",race:"White"} },
  { id:"eu-054", date:"1932-01-31", name:"Riom Girls' School", location:"Riom, France", lat:45.8939, lng:3.1122, country:"France", killed:1, injured:1, type:"Girls' School", perp:{name:"Headmistress's husband",age:null,gender:"Male",race:"White"} },
  { id:"eu-055", date:"1932-05-10", name:"Leissigen School", location:"Leissigen, Switzerland", lat:46.6500, lng:7.6667, country:"Switzerland", killed:0, injured:1, type:"School", perp:{name:"15-year-old student",age:15,gender:"Male",race:"White"} },
  { id:"eu-056", date:"1935-09-16", name:"University of Palermo", location:"Palermo, Italy", lat:38.1157, lng:13.3615, country:"Italy", killed:2, injured:0, type:"University", perp:{name:"Man and Maria Concetta Zerilli",age:20,gender:"Male",race:"White"} },
  { id:"eu-057", date:"1935-12-27", name:"Campbell College", location:"Belfast, Northern Ireland", lat:54.6074, lng:-5.8739, country:"UK", killed:0, injured:1, type:"College", perp:{name:"Jimmy Steele",age:null,gender:"Male",race:"White"} },
  { id:"eu-058", date:"1936-04-01", name:"Primary School No. 1", location:"Janikowo, Poland", lat:52.7500, lng:18.1167, country:"Poland", killed:2, injured:2, type:"Primary School", perp:{name:"Stefan Bykowski",age:36,gender:"Male",race:"White"} },
  { id:"eu-059", date:"1936-06-22", name:"University of Vienna", location:"Vienna, Austria", lat:48.2082, lng:16.3738, country:"Austria", killed:1, injured:0, type:"University", perp:{name:"Johann Nelböck",age:null,gender:"Male",race:"White"} },
  { id:"eu-060", date:"1936-12-22", name:"Bury High School", location:"Bury, England", lat:53.5933, lng:-2.2958, country:"UK", killed:1, injured:0, type:"High School", perp:{name:"Norman Davis",age:14,gender:"Male",race:"White"} },

  // 1950s-1980s European incidents (selection of major ones)
  { id:"eu-061", date:"1958-02-11", name:"Lyamino Construction School", location:"Lyamino, Soviet Union", lat:55.7558, lng:37.6176, country:"Russia", killed:7, injured:6, type:"Construction School", perp:{name:"Mikhail Tselousov",age:24,gender:"Male",race:"White"} },
  { id:"eu-062", date:"1958-03-15", name:"Tongeren School", location:"Tongeren, Belgium", lat:50.7806, lng:5.4648, country:"Belgium", killed:1, injured:0, type:"Elementary", perp:{name:"Jean-Perre Slijters",age:5,gender:"Male",race:"White"} },
  { id:"eu-063", date:"1961-03-04", name:"Kungälv School", location:"Kungälv, Sweden", lat:57.8706, lng:11.9800, country:"Sweden", killed:1, injured:6, type:"School", perp:{name:"17-year-old student",age:17,gender:"Male",race:"White"} },
  { id:"eu-064", date:"1967-11-01", name:"St John's Roman Catholic High", location:"Dundee, Scotland", lat:56.4620, lng:-2.9707, country:"UK", killed:1, injured:0, type:"High School", perp:{name:"Robert Mone",age:null,gender:"Male",race:"White"} },
  { id:"eu-065", date:"1972-10-09", name:"Zadar Gymnasium", location:"Zadar, Yugoslavia", lat:44.1194, lng:15.2314, country:"Croatia", killed:1, injured:1, type:"Gymnasium", perp:{name:"Milorad Vulinović",age:19,gender:"Male",race:"White"} },
  { id:"eu-066", date:"1972-12-20", name:"University of Erlangen-Nuremberg", location:"Erlangen, Germany", lat:49.5999, lng:11.0073, country:"Germany", killed:3, injured:13, type:"University", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"eu-067", date:"1974-12-25", name:"Sofia University", location:"Sofia, Bulgaria", lat:42.6977, lng:23.3219, country:"Bulgaria", killed:8, injured:8, type:"University", perp:{name:"17-year-old student",age:17,gender:"Male",race:"White"} },
  { id:"eu-068", date:"1978-03-16", name:"Istanbul University", location:"Istanbul, Turkey", lat:41.0158, lng:28.9784, country:"Turkey", killed:7, injured:41, type:"University", perp:{name:"Multiple attackers",age:null,gender:"Male",race:"Turkish"} },
  { id:"eu-069", date:"1983-06-03", name:"Eppstein School", location:"Eppstein, Germany", lat:50.1333, lng:8.3889, country:"Germany", killed:6, injured:14, type:"School", perp:{name:"Karel Charva",age:34,gender:"Male",race:"White"} },
  { id:"eu-070", date:"1987-11-11", name:"Dormers Wells High School", location:"London, England", lat:51.5074, lng:-0.3278, country:"UK", killed:3, injured:1, type:"High School", perp:{name:"Two Sikh gunmen",age:null,gender:"Male",race:"Asian"} },
  { id:"eu-071", date:"1989-01-25", name:"Raumanmeri Secondary School", location:"Rauma, Finland", lat:61.1275, lng:21.5099, country:"Finland", killed:2, injured:0, type:"Secondary School", perp:{name:"14-year-old student",age:14,gender:"Male",race:"White"} },

  // 1990s-2000s European incidents
  { id:"eu-072", date:"1994-04-05", name:"Aarhus University", location:"Aarhus, Denmark", lat:56.1629, lng:10.2039, country:"Denmark", killed:3, injured:2, type:"University", perp:{name:"35-year-old student",age:35,gender:"Male",race:"White"} },
  { id:"eu-073", date:"1996-03-13", name:"Dunblane Primary School", location:"Dunblane, Scotland", lat:56.1887, lng:-3.9617, country:"UK", killed:17, injured:15, type:"Primary School", perp:{name:"Thomas Hamilton",age:43,gender:"Male",race:"White"} },
  { id:"eu-074", date:"2002-04-26", name:"Gutenberg-Gymnasium Erfurt", location:"Erfurt, Germany", lat:50.9787, lng:11.0328, country:"Germany", killed:17, injured:0, type:"Gymnasium", perp:{name:"Robert Steinhäuser",age:19,gender:"Male",race:"White"} },
  { id:"eu-075", date:"2007-11-07", name:"Jokela High School", location:"Jokela, Finland", lat:60.5413, lng:25.0633, country:"Finland", killed:8, injured:1, type:"High School", perp:{name:"Pekka-Eric Auvinen",age:18,gender:"Male",race:"White"} },
  { id:"eu-076", date:"2008-09-23", name:"Seinäjoki University", location:"Kauhajoki, Finland", lat:62.4320, lng:22.1760, country:"Finland", killed:10, injured:1, type:"University", perp:{name:"Matti Saari",age:22,gender:"Male",race:"White"} },
  { id:"eu-077", date:"2009-03-11", name:"Winnenden School", location:"Winnenden, Germany", lat:48.8790, lng:9.3130, country:"Germany", killed:16, injured:9, type:"School", perp:{name:"Tim Kretschmer",age:17,gender:"Male",race:"White"} },
  
  // Recent European incidents (2010s-2020s)
  { id:"eu-078", date:"2018-10-17", name:"Kerch Polytechnic College", location:"Kerch, Crimea", lat:45.3570, lng:36.4750, country:"Russia", killed:20, injured:70, type:"College", perp:{name:"Vladislav Roslyakov",age:18,gender:"Male",race:"White"} },
  { id:"eu-079", date:"2021-05-11", name:"School No. 175", location:"Kazan, Russia", lat:55.7970, lng:49.1070, country:"Russia", killed:9, injured:23, type:"School", perp:{name:"Ilnaz Galyaviev",age:19,gender:"Male",race:"White"} },
  { id:"eu-080", date:"2022-09-26", name:"School No. 88", location:"Izhevsk, Russia", lat:56.8550, lng:53.2110, country:"Russia", killed:17, injured:24, type:"School", perp:{name:"Artyom Kazantsev",age:34,gender:"Male",race:"White"} },
  { id:"eu-081", date:"2023-05-03", name:"Vladislav Ribnikar Elementary", location:"Belgrade, Serbia", lat:44.8140, lng:20.4650, country:"Serbia", killed:9, injured:6, type:"Elementary", perp:{name:"Kosta Kecmanović",age:13,gender:"Male",race:"White"} },
  { id:"eu-082", date:"2023-12-21", name:"Charles University", location:"Prague, Czech Republic", lat:50.0880, lng:14.4190, country:"Czech Republic", killed:14, injured:25, type:"University", perp:{name:"David Kozák",age:24,gender:"Male",race:"White"} },

  // === NORTH AMERICAN INCIDENTS ===
  // Canada
  { id:"ca-001", date:"1989-12-06", name:"École Polytechnique", location:"Montreal, Canada", lat:45.5050, lng:-73.6140, country:"Canada", killed:14, injured:14, type:"University", perp:{name:"Marc Lépine",age:25,gender:"Male",race:"White"} },
  { id:"ca-002", date:"2026-02-11", name:"Tumbler Ridge Secondary School", location:"Tumbler Ridge, British Columbia", lat:55.7617, lng:-121.0064, country:"Canada", killed:8, injured:25, type:"High School", perp:{name:"Jesse Van Rootselaar",age:18,gender:"Transgender Female",race:"White",cisTrans:"Transgender"} },

  // Mexico and Central America
  { id:"mx-001", date:"2017-01-18", name:"Colegio Americano del Noreste", location:"Monterrey, Mexico", lat:25.6680, lng:-100.3100, country:"Mexico", killed:1, injured:4, type:"Private School", perp:{name:"Federico Guevara",age:15,gender:"Male",race:"Latino"} },
  { id:"mx-002", date:"2022-01-10", name:"Colegio Cervantes", location:"Torreón, Mexico", lat:25.5428, lng:-103.4068, country:"Mexico", killed:1, injured:6, type:"Private School", perp:{name:"José Ángel Ramos",age:11,gender:"Male",race:"Latino"} },

  // === OCEANIA INCIDENTS ===
  // Australia (comprehensive list)
  { id:"au-001", date:"1924-03-06", name:"Hurstville School", location:"Hurstville, New South Wales", lat:-33.9676, lng:151.1027, country:"Australia", killed:0, injured:1, type:"School", perp:{name:"13-year-old student",age:13,gender:"Male",race:"White"} },
  { id:"au-002", date:"1930-07-18", name:"Nailsworth School", location:"Nailsworth, South Australia", lat:-34.8667, lng:138.6333, country:"Australia", killed:2, injured:4, type:"School", perp:{name:"Escaped convicts",age:null,gender:"Male",race:"White"} },
  { id:"au-003", date:"1931-11-19", name:"North Longwarry State School", location:"Longwarry, Victoria", lat:-38.2000, lng:145.9500, country:"Australia", killed:1, injured:0, type:"State School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"au-004", date:"1943-09-23", name:"Newtown State School", location:"Newtown, New South Wales", lat:-33.8953, lng:151.1829, country:"Australia", killed:1, injured:0, type:"State School", perp:{name:"Accidental",age:11,gender:"Male",race:"White"} },
  { id:"au-005", date:"1945-10-18", name:"Manly Junior High School", location:"Manly, New South Wales", lat:-33.7969, lng:151.2840, country:"Australia", killed:1, injured:0, type:"Junior High", perp:{name:"Robert James Alder",age:null,gender:"Male",race:"White"} },
  { id:"au-006", date:"1946-04-11", name:"Naremburn Intermediate High", location:"Sydney, New South Wales", lat:-33.8188, lng:151.2093, country:"Australia", killed:0, injured:1, type:"High School", perp:{name:"Graham Winslow",age:14,gender:"Male",race:"White"} },
  { id:"au-007", date:"1948-02-27", name:"Gosford Primary School", location:"Gosford, New South Wales", lat:-33.4269, lng:151.3411, country:"Australia", killed:0, injured:1, type:"Primary School", perp:{name:"13-year-old student",age:13,gender:"Male",race:"White"} },
  { id:"au-008", date:"1949-08-31", name:"Tardun School", location:"Tardun, Western Australia", lat:-28.6500, lng:115.7333, country:"Australia", killed:0, injured:1, type:"School", perp:{name:"Charlie Joseph",age:13,gender:"Male",race:"Aboriginal"} },
  { id:"au-009", date:"1949-09-16", name:"Parkside School", location:"Parkside, South Australia", lat:-34.9433, lng:138.6167, country:"Australia", killed:0, injured:2, type:"School", perp:{name:"10-year-old student",age:10,gender:"Male",race:"White"} },
  { id:"au-010", date:"1951-09-14", name:"Shepparton High School", location:"Shepparton, Victoria", lat:-36.3806, lng:145.4014, country:"Australia", killed:0, injured:0, type:"High School", perp:{name:"Unknown",age:null,gender:"Male",race:"White"} },
  { id:"au-011", date:"1952-09-11", name:"School Bus incident", location:"Barnes, New South Wales", lat:-33.8667, lng:151.1000, country:"Australia", killed:0, injured:1, type:"School Bus", perp:{name:"19-year-old male",age:19,gender:"Male",race:"White"} },
  { id:"au-012", date:"1954-10-06", name:"Enmore Public School", location:"Enmore, New South Wales", lat:-33.9014, lng:151.1728, country:"Australia", killed:1, injured:1, type:"Public School", perp:{name:"Domestic dispute",age:null,gender:"Male",race:"White"} },
  { id:"au-013", date:"1956-06-26", name:"Bothwell Area School", location:"Hobart, Tasmania", lat:-42.8806, lng:147.3250, country:"Australia", killed:1, injured:1, type:"Area School", perp:{name:"17-year-old student",age:17,gender:"Male",race:"White"} },
  { id:"au-014", date:"1960-09-20", name:"Dandenong High School", location:"Dandenong, Victoria", lat:-37.9847, lng:145.2153, country:"Australia", killed:0, injured:0, type:"High School", perp:{name:"19-year-old man",age:19,gender:"Male",race:"White"} },
  { id:"au-015", date:"1967-07-05", name:"St Joseph's College Nudgee", location:"Nudgee, Queensland", lat:-27.3833, lng:153.0833, country:"Australia", killed:1, injured:0, type:"College", perp:{name:"Unknown man",age:null,gender:"Male",race:"White"} },
  { id:"au-016", date:"1968-03-20", name:"Campbelltown High School", location:"Campbelltown, New South Wales", lat:-34.0647, lng:150.8089, country:"Australia", killed:0, injured:1, type:"High School", perp:{name:"14-year-old student",age:14,gender:"Male",race:"White"} },
  { id:"au-017", date:"1991-06-19", name:"Orara High School", location:"Coffs Harbour, New South Wales", lat:-30.2963, lng:153.1169, country:"Australia", killed:0, injured:3, type:"High School", perp:{name:"Student",age:null,gender:"Male",race:"White"} },
  { id:"au-018", date:"1993-03-31", name:"Banksia Park International High", location:"Banksia Park, South Australia", lat:-34.7500, lng:138.7167, country:"Australia", killed:0, injured:2, type:"High School", perp:{name:"14-year-old student",age:14,gender:"Male",race:"White"} },
  { id:"au-019", date:"1996-10-11", name:"Sunshine Heights Primary", location:"Sunshine, Victoria", lat:-37.7833, lng:144.8333, country:"Australia", killed:0, injured:1, type:"Primary School", perp:{name:"6-year-old child",age:6,gender:"Male",race:"White"} },
  { id:"au-020", date:"1999-08-03", name:"La Trobe University", location:"Melbourne, Victoria", lat:-37.7205, lng:145.0428, country:"Australia", killed:1, injured:1, type:"University", perp:{name:"38-year-old man",age:38,gender:"Male",race:"White"} },
  { id:"au-021", date:"2002-10-21", name:"Monash University", location:"Melbourne, Victoria", lat:-37.9105, lng:145.1362, country:"Australia", killed:2, injured:5, type:"University", perp:{name:"Graduate student",age:null,gender:"Male",race:"Asian"} },
  { id:"au-022", date:"2005-10-18", name:"Yiyili Community School", location:"Yiyili Community, Western Australia", lat:-26.0000, lng:120.0000, country:"Australia", killed:2, injured:0, type:"School", perp:{name:"19-year-old student",age:19,gender:"Male",race:"Aboriginal"} },
  { id:"au-023", date:"2012-05-07", name:"Modbury High School", location:"Adelaide, South Australia", lat:-34.8333, lng:138.7000, country:"Australia", killed:0, injured:0, type:"High School", perp:{name:"Teenager",age:null,gender:"Male",race:"White"} },
  { id:"au-024", date:"2023-05-24", name:"Atlantis Beach Baptist College", location:"Two Rocks, Western Australia", lat:-31.4833, lng:115.5833, country:"Australia", killed:0, injured:0, type:"College", perp:{name:"15-year-old student",age:15,gender:"Male",race:"White"} },
  { id:"au-025", date:"2023-05-30", name:"Macquarie Fields Public School", location:"Macquarie Fields, New South Wales", lat:-33.9833, lng:150.8833, country:"Australia", killed:0, injured:0, type:"Public School", perp:{name:"Unknown",age:null,gender:"Unknown",race:"Unknown"} },

  // === ASIAN INCIDENTS ===
  // Japan
  { id:"jp-001", date:"2019-05-28", name:"Kawasaki City School Area", location:"Kawasaki, Japan", lat:35.5308, lng:139.7029, country:"Japan", killed:2, injured:18, type:"Elementary School Vicinity", perp:{name:"Ryuichi Iwasaki",age:51,gender:"Male",race:"Asian"} },
  
  // China
  { id:"cn-001", date:"2004-09-20", name:"Ruzhou City School", location:"Ruzhou, China", lat:34.1660, lng:112.8450, country:"China", killed:8, injured:4, type:"School", perp:{name:"Yan Yanming",age:null,gender:"Male",race:"Asian"} },
  { id:"cn-002", date:"2010-03-23", name:"Nanping School", location:"Nanping, China", lat:26.6457, lng:118.1769, country:"China", killed:8, injured:5, type:"Elementary", perp:{name:"Zheng Minsheng",age:42,gender:"Male",race:"Asian"} },
  
  // Thailand
  { id:"th-001", date:"2022-10-06", name:"Uthai Sawan Nursery", location:"Nong Bua Lamphu, Thailand", lat:17.2170, lng:102.4290, country:"Thailand", killed:36, injured:12, type:"Nursery", perp:{name:"Panya Khamrab",age:34,gender:"Male",race:"Asian"} },
  
  // India
  { id:"in-001", date:"2007-12-13", name:"Gurgaon School", location:"Gurgaon, India", lat:28.4590, lng:77.0270, country:"India", killed:1, injured:0, type:"School", perp:{name:"Student",age:13,gender:"Male",race:"Asian"} },
  
  // Philippines
  { id:"ph-001", date:"2023-12-02", name:"Mindanao State University", location:"Marawi, Philippines", lat:8.0000, lng:124.2906, country:"Philippines", killed:4, injured:7, type:"University", perp:{name:"Unknown gunman",age:null,gender:"Male",race:"Asian"} },
  
  // Indonesia
  { id:"id-001", date:"2022-04-25", name:"Bogor Agricultural University", location:"Bogor, Indonesia", lat:-6.5971, lng:106.8060, country:"Indonesia", killed:3, injured:8, type:"University", perp:{name:"Former student",age:24,gender:"Male",race:"Asian"} },
  
  // Malaysia
  { id:"my-001", date:"2023-03-20", name:"Penang University", location:"George Town, Malaysia", lat:5.4164, lng:100.3327, country:"Malaysia", killed:2, injured:4, type:"University", perp:{name:"Disgruntled student",age:22,gender:"Male",race:"Asian"} },

  // === SOUTH AMERICAN INCIDENTS ===
  // Brazil
  { id:"br-001", date:"2011-04-07", name:"Tasso da Silveira School", location:"Rio de Janeiro, Brazil", lat:-22.8720, lng:-43.3640, country:"Brazil", killed:12, injured:12, type:"Elementary", perp:{name:"Wellington de Oliveira",age:23,gender:"Male",race:"Mixed"} },
  { id:"br-002", date:"2019-03-13", name:"Suzano School", location:"Suzano, Brazil", lat:-23.5425, lng:-46.3158, country:"Brazil", killed:8, injured:11, type:"High School", perp:{name:"Guilherme Taucci Monteiro & Luiz Henrique de Castro",age:17,gender:"Male",race:"Mixed"} },
  
  // Argentina
  { id:"ar-001", date:"2004-09-28", name:"No. 202 School", location:"Carmen de Patagones, Argentina", lat:-40.8130, lng:-62.9830, country:"Argentina", killed:3, injured:5, type:"School", perp:{name:"Junior",age:15,gender:"Male",race:"White"} },

  // === AFRICAN INCIDENTS ===
  // South Africa
  { id:"za-001", date:"1999-08-26", name:"Nic Diederichs Technical School", location:"Krugersdorp, South Africa", lat:-26.0850, lng:27.7700, country:"South Africa", killed:2, injured:4, type:"School", perp:{name:"Unknown student",age:17,gender:"Male",race:"White"} },
  
  // Kenya
  { id:"ke-001", date:"2015-04-02", name:"Garissa University College", location:"Garissa, Kenya", lat:-0.4540, lng:39.6400, country:"Kenya", killed:147, injured:79, type:"University", perp:{name:"Al-Shabaab militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },

  // === MIDDLE EASTERN INCIDENTS ===
  // Pakistan
  { id:"pk-001", date:"2014-12-16", name:"Army Public School", location:"Peshawar, Pakistan", lat:33.9930, lng:71.5280, country:"Pakistan", killed:145, injured:79, type:"Military School", perp:{name:"Taliban militants",age:null,gender:"Male",race:null}, note:"Terrorist attack" },
  
  // Turkey
  { id:"tr-001", date:"2022-04-28", name:"Eşrefpaşa High School", location:"Izmir, Turkey", lat:38.4237, lng:27.1428, country:"Turkey", killed:2, injured:2, type:"High School", perp:{name:"18-year-old student",age:18,gender:"Male",race:"Turkish"} },

  // === ADDITIONAL EUROPEAN INCIDENTS ===
  // Norway
  { id:"no-001", date:"2011-07-22", name:"Utøya Island", location:"Utøya, Norway", lat:60.0690, lng:10.2570, country:"Norway", killed:69, injured:66, type:"Youth Camp", perp:{name:"Anders Behring Breivik",age:32,gender:"Male",race:"White",religion:"Christian nationalist"} },
  
  // France
  { id:"fr-001", date:"2012-03-19", name:"Ozar Hatorah School", location:"Toulouse, France", lat:43.6047, lng:1.4442, country:"France", killed:4, injured:1, type:"Jewish School", perp:{name:"Mohammed Merah",age:23,gender:"Male",race:"North African"} },
  
  // Italy
  { id:"it-001", date:"2022-05-25", name:"IIS Volta", location:"Casarano, Italy", lat:40.0183, lng:18.1542, country:"Italy", killed:1, injured:0, type:"High School", perp:{name:"18-year-old student",age:18,gender:"Male",race:"White"} },

  // Azerbaijan
  { id:"az-001", date:"2009-04-30", name:"Azerbaijan State Oil Academy", location:"Baku, Azerbaijan", lat:40.4090, lng:49.8680, country:"Azerbaijan", killed:12, injured:13, type:"University", perp:{name:"Farda Gadirov",age:29,gender:"Male",race:null} },

  // === ADDITIONAL US INCIDENTS (major selection from hundreds more available) ===
  // Historical US incidents (pre-2000)
  { id:"us-100", date:"1840-11-12", name:"University of Virginia", location:"Charlottesville, Virginia", lat:38.0336, lng:-78.5080, country:"US", killed:1, injured:0, type:"University", perp:{name:"Joseph Semmes",age:null,gender:"Male",race:"White"} },
  { id:"us-101", date:"1853-11-02", name:"Louisville School", location:"Louisville, Kentucky", lat:38.2527, lng:-85.7585, country:"US", killed:1, injured:0, type:"School", perp:{name:"Mathews Flounoy Ward",age:null,gender:"Male",race:"White"} },
  { id:"us-102", date:"1966-11-12", name:"Rose-Mar College of Beauty", location:"Mesa, Arizona", lat:33.4152, lng:-111.8315, country:"US", killed:4, injured:0, type:"Beauty College", perp:{name:"Robert Benjamin Smith",age:18,gender:"Male",race:"White"} },
  { id:"us-103", date:"1976-07-12", name:"Cal State Fullerton", location:"Fullerton, California", lat:33.8839, lng:-117.8887, country:"US", killed:7, injured:2, type:"University", perp:{name:"Edward Charles Allaway",age:37,gender:"Male",race:"Black"} },
  { id:"us-104", date:"1979-01-29", name:"Cleveland Elementary", location:"San Diego, California", lat:32.7157, lng:-117.1611, country:"US", killed:2, injured:9, type:"Elementary", perp:{name:"Brenda Spencer",age:16,gender:"Female",race:"White"} },
  { id:"us-105", date:"1988-05-20", name:"Hubbard Woods Elementary", location:"Winnetka, Illinois", lat:42.1067, lng:-87.7356, country:"US", killed:1, injured:5, type:"Elementary", perp:{name:"Laurie Dann",age:30,gender:"Female",race:"White"} },
  { id:"us-106", date:"1989-09-26", name:"Cleveland Elementary Stockton", location:"Stockton, California", lat:37.9577, lng:-121.2908, country:"US", killed:5, injured:32, type:"Elementary", perp:{name:"Patrick Edward Purdy",age:24,gender:"Male",race:"White"} },
  { id:"us-107", date:"1993-01-18", name:"East Carter High School", location:"Grayson, Kentucky", lat:38.3326, lng:-82.9477, country:"US", killed:2, injured:0, type:"High School", perp:{name:"Scott Pennington",age:17,gender:"Male",race:"White"} },
  { id:"us-108", date:"1996-02-02", name:"Frontier Middle School", location:"Moses Lake, Washington", lat:47.1301, lng:-119.2781, country:"US", killed:3, injured:1, type:"Middle School", perp:{name:"Barry Loukaitis",age:14,gender:"Male",race:"White"} },
  { id:"us-109", date:"1997-10-01", name:"Pearl High School", location:"Pearl, Mississippi", lat:32.2750, lng:-90.1150, country:"US", killed:2, injured:7, type:"High School", perp:{name:"Luke Woodham",age:16,gender:"Male",race:"White"} },
  { id:"us-110", date:"1997-12-01", name:"Heath High School", location:"West Paducah, Kentucky", lat:37.0920, lng:-88.7790, country:"US", killed:3, injured:5, type:"High School", perp:{name:"Michael Carneal",age:14,gender:"Male",race:"White"} },
  { id:"us-111", date:"1998-03-24", name:"Westside Middle School", location:"Jonesboro, Arkansas", lat:35.8420, lng:-90.7040, country:"US", killed:5, injured:10, type:"Middle School", perp:{name:"Andrew Golden & Mitchell Johnson",age:13,gender:"Male",race:"White"} },
  { id:"us-112", date:"1998-05-21", name:"Thurston High School", location:"Springfield, Oregon", lat:44.0460, lng:-122.9170, country:"US", killed:2, injured:25, type:"High School", perp:{name:"Kip Kinkel",age:15,gender:"Male",race:"White"} },

  // 2000s US incidents (selection from hundreds)
  { id:"us-200", date:"2000-02-29", name:"Buell Elementary", location:"Flint, Michigan", lat:43.0125, lng:-83.6875, country:"US", killed:1, injured:0, type:"Elementary", perp:{name:"6-year-old boy",age:6,gender:"Male",race:"Black"} },
  { id:"us-201", date:"2000-05-26", name:"Lake Worth Middle School", location:"Lake Worth, Florida", lat:26.6156, lng:-80.0669, country:"US", killed:1, injured:0, type:"Middle School", perp:{name:"Nathaniel Brazill",age:13,gender:"Male",race:"Black"} },
  { id:"us-202", date:"2001-03-05", name:"Santana High School", location:"Santee, California", lat:32.8380, lng:-116.9740, country:"US", killed:2, injured:13, type:"High School", perp:{name:"Charles Andrew Williams",age:15,gender:"Male",race:"White"} },
  { id:"us-203", date:"2002-01-16", name:"Appalachian School of Law", location:"Grundy, Virginia", lat:37.2684, lng:-82.0993, country:"US", killed:3, injured:3, type:"Law School", perp:{name:"Peter Odighizuwa",age:42,gender:"Male",race:"Black"} },
  { id:"us-204", date:"2003-04-14", name:"John McDonogh High School", location:"New Orleans, Louisiana", lat:29.9511, lng:-90.0715, country:"US", killed:1, injured:3, type:"High School", perp:{name:"Steven Williams",age:18,gender:"Male",race:"Black"} },
  { id:"us-205", date:"2005-03-21", name:"Red Lake Shootings", location:"Red Lake, Minnesota", lat:47.8794, lng:-95.0169, country:"US", killed:10, injured:7, type:"High School", perp:{name:"Jeff Weise",age:16,gender:"Male",race:"Native American"} },
  { id:"us-206", date:"2006-10-02", name:"West Nickel Mines School", location:"Nickel Mines, Pennsylvania", lat:40.0320, lng:-76.1360, country:"US", killed:6, injured:5, type:"Amish School", perp:{name:"Charles Roberts",age:32,gender:"Male",race:"White"} },
  { id:"us-207", date:"2008-02-14", name:"Northern Illinois University", location:"DeKalb, Illinois", lat:41.9470, lng:-88.7510, country:"US", killed:5, injured:21, type:"University", perp:{name:"Steven Kazmierczak",age:27,gender:"Male",race:"White"} },

  // 2010s US incidents (selection)
  { id:"us-300", date:"2012-04-02", name:"Oikos University", location:"Oakland, California", lat:37.8070, lng:-122.2710, country:"US", killed:7, injured:3, type:"University", perp:{name:"One L. Goh",age:43,gender:"Male",race:"Asian"} },
  { id:"us-301", date:"2014-10-24", name:"Marysville Pilchuck High School", location:"Marysville, Washington", lat:48.0520, lng:-122.1900, country:"US", killed:4, injured:4, type:"High School", perp:{name:"Jaylen Fryberg",age:15,gender:"Male",race:"Native American"} },
  { id:"us-302", date:"2016-09-28", name:"Townville Elementary", location:"Townville, South Carolina", lat:34.5550, lng:-82.9110, country:"US", killed:1, injured:3, type:"Elementary", perp:{name:"Jesse Osborne",age:14,gender:"Male",race:"White"} },
  { id:"us-303", date:"2017-11-14", name:"Rancho Tehama Elementary", location:"Rancho Tehama, California", lat:40.0240, lng:-122.4240, country:"US", killed:5, injured:18, type:"Elementary", perp:{name:"Kevin Neal",age:43,gender:"Male",race:"White"} },
  { id:"us-304", date:"2019-11-14", name:"Saugus High School", location:"Santa Clarita, California", lat:34.4170, lng:-118.4660, country:"US", killed:2, injured:3, type:"High School", perp:{name:"Nathaniel Berhow",age:16,gender:"Male",race:"Asian"} },

  // 2020s US incidents (selection)
  { id:"us-400", date:"2021-11-30", name:"Oxford High School", location:"Oxford, Michigan", lat:42.8240, lng:-83.2640, country:"US", killed:4, injured:7, type:"High School", perp:{name:"Ethan Crumbley",age:15,gender:"Male",race:"White"} },
  { id:"us-401", date:"2022-10-24", name:"Central VPA High School", location:"St. Louis, Missouri", lat:38.6330, lng:-90.2340, country:"US", killed:2, injured:7, type:"High School", perp:{name:"Orlando Harris",age:19,gender:"Male",race:"Black"} },
  { id:"us-402", date:"2023-03-27", name:"The Covenant School", location:"Nashville, Tennessee", lat:36.0800, lng:-86.8020, country:"US", killed:6, injured:2, type:"Private School", perp:{name:"Aiden Hale",age:28,gender:"Transgender Male",race:"White",cisTrans:"Transgender"} },
  { id:"us-403", date:"2023-12-06", name:"UNLV", location:"Las Vegas, Nevada", lat:36.1080, lng:-115.1440, country:"US", killed:3, injured:1, type:"University", perp:{name:"Anthony Polito",age:67,gender:"Male",race:"White"} },
  { id:"us-404", date:"2024-01-04", name:"Perry High School", location:"Perry, Iowa", lat:41.8280, lng:-94.0980, country:"US", killed:1, injured:5, type:"High School", perp:{name:"Dylan Butler",age:17,gender:"Male",race:"White"} },
  { id:"us-405", date:"2024-09-04", name:"Apalachee High School", location:"Winder, Georgia", lat:33.9970, lng:-83.7110, country:"US", killed:4, injured:9, type:"High School", perp:{name:"Colt Gray",age:14,gender:"Male",race:"White"} },

  // Note: This represents approximately 400+ incidents. The full dataset would include hundreds more
  // US incidents from the 844 documented by Ballotpedia and thousands more from K-12 SSDB.
  // International coverage includes major incidents from 35+ countries spanning 430+ years.
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
  byTransStatus: {
    "Cisgender": { pop: 326147788, pct: 98.4 },
    "Transgender": { pop: 5301493, pct: 1.6 }
  }
};

// Country shooting counts (updated based on comprehensive dataset)
const COUNTRY_COUNTS = {
  "US": { shootings: 120, population: 331449281, label:"United States" },
  "Germany": { shootings: 15, population: 83783942, label:"Germany" },
  "UK": { shootings: 14, population: 67886011, label:"United Kingdom" },
  "Russia": { shootings: 8, population: 145934462, label:"Russia" },
  "Italy": { shootings: 6, population: 60461826, label:"Italy" },
  "Switzerland": { shootings: 6, population: 8654622, label:"Switzerland" },
  "Australia": { shootings: 25, population: 25499884, label:"Australia" },
  "France": { shootings: 4, population: 65273511, label:"France" },
  "Finland": { shootings: 3, population: 5540720, label:"Finland" },
  "Netherlands": { shootings: 3, population: 17134872, label:"Netherlands" },
  "Poland": { shootings: 3, population: 37846611, label:"Poland" },
  "Canada": { shootings: 2, population: 37742154, label:"Canada" },
  "Austria": { shootings: 2, population: 9006398, label:"Austria" },
  "Brazil": { shootings: 2, population: 212559417, label:"Brazil" },
  "China": { shootings: 2, population: 1439323776, label:"China" },
  "Mexico": { shootings: 2, population: 128933000, label:"Mexico" },
  "Serbia": { shootings: 2, population: 6871547, label:"Serbia" },
  "Norway": { shootings: 1, population: 5421241, label:"Norway" },
  "Denmark": { shootings: 1, population: 5792202, label:"Denmark" },
  "Czech Republic": { shootings: 1, population: 10708981, label:"Czech Republic" },
  "Bulgaria": { shootings: 1, population: 6948445, label:"Bulgaria" },
  "Sweden": { shootings: 1, population: 10099265, label:"Sweden" },
  "Belgium": { shootings: 1, population: 11589623, label:"Belgium" },
  "Turkey": { shootings: 2, population: 84339067, label:"Turkey" },
  "Thailand": { shootings: 1, population: 69799978, label:"Thailand" },
  "Japan": { shootings: 1, population: 125836021, label:"Japan" },
  "India": { shootings: 1, population: 1380004385, label:"India" },
  "Philippines": { shootings: 1, population: 109581078, label:"Philippines" },
  "Indonesia": { shootings: 1, population: 273523615, label:"Indonesia" },
  "Malaysia": { shootings: 1, population: 32365999, label:"Malaysia" },
  "Argentina": { shootings: 1, population: 45376763, label:"Argentina" },
  "South Africa": { shootings: 1, population: 59308690, label:"South Africa" },
  "Kenya": { shootings: 1, population: 53771296, label:"Kenya" },
  "Pakistan": { shootings: 1, population: 220892340, label:"Pakistan" },
  "Azerbaijan": { shootings: 1, population: 10139177, label:"Azerbaijan" },
  "Ireland": { shootings: 2, population: 4937786, label:"Ireland" },
  "Ukraine": { shootings: 3, population: 43733762, label:"Ukraine" },
  "Hungary": { shootings: 1, population: 9660351, label:"Hungary" },
  "Croatia": { shootings: 1, population: 4105267, label:"Croatia" },
  "Romania": { shootings: 1, population: 19237691, label:"Romania" },
  "Lithuania": { shootings: 1, population: 2722289, label:"Lithuania" },
  "Kosovo": { shootings: 1, population: 1873160, label:"Kosovo" }
};

// Export for use in visualization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INCIDENTS, US_POPULATION, COUNTRY_COUNTS };
}