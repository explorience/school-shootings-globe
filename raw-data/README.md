# School Shooting Database - Raw Data Sources

## Downloaded Data Sources

### 1. Washington Post School Shootings Database
- **File:** `washingtonpost-school-shootings.csv`
- **Source:** https://raw.githubusercontent.com/washingtonpost/data-school-shootings/master/school-shootings-data.csv
- **Records:** 428 incidents (US only)
- **Date Range:** 1999-2022
- **License:** Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
- **Description:** Comprehensive database of US school shootings since Columbine, with detailed incident information

### 2. International Incidents (Manual Curation)
- **Source:** Various reports, Wikipedia, news sources
- **Records:** 17 major international incidents
- **Countries:** Russia, Germany, Finland, Kenya, Pakistan, Norway, Thailand, Czech Republic, UK, Canada, Brazil, Serbia

## Data Processing
- **Total Combined Records:** 445 incidents
- **Script:** `import-data.js` - Node.js script to merge, geocode, and format data
- **Output:** `data-full.js` - Final formatted dataset for the globe visualization

## Data Sources Attempted but Unavailable

### K-12 School Shooting Database (K-12 SSDB)
- **Website:** https://k12ssdb.org/
- **Status:** Requires email request for raw data (k12ssdb@gmail.com)
- **Estimated Records:** 1,300+ incidents from 1970-present
- **Note:** Most comprehensive source but access restricted

### Gun Violence Archive (GVA)
- **GitHub Mirror:** https://github.com/dxzys/Gun-Violence-Data
- **Status:** Mass shooting data available but not school-specific
- **Records:** 5,871+ mass shooting incidents (2013-present)

### Eric Laurine's School Shooting Database
- **Website:** https://schoolshootingdatabase.com/
- **Status:** 1,840+ incidents (1840-2022) but no direct download available
- **Note:** Most comprehensive historical database

## Recommendations for Complete Dataset

To achieve the target of 2400+ incidents mentioned in the task:

1. **Contact K-12 SSDB directly** - Email k12ssdb@gmail.com with institutional affiliation and intended use
2. **Purchase access** to Eric Laurine's complete database
3. **Scrape additional sources** like Gun Violence Archive with school-specific filters
4. **Combine multiple sources** from Education Week, CDC, state databases

## Current Status

The current dataset (445 incidents) provides a solid foundation with:
- All major historical incidents (Columbine, Sandy Hook, Virginia Tech, etc.)
- International coverage of significant incidents
- Proper geocoding and data formatting
- Ready for globe visualization

While not reaching the full 2400+ target, this represents the most reliable, publicly available data that could be obtained within the scope of this task.