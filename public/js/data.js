var CITY_DATA = {
  'louisville': {
    stateName: 'Ky.',
    googleMapsQuery: 'Louisville, KY',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow'
  },
  'lexington': { 
    stateName: 'Ky.',
    googleMapsQuery: 'Lexington, KY',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow'
  },
  'oakland': { 
    stateName: 'Calif.',
    googleMapsQuery: 'Oakland, CA',
    dataUrl: 'http://data.openoakland.org/dataset/zillow-neighborhoods',
    dataTitle: 'OpenOakland'
  },
  'san-francisco': { 
    dataFile: 'data/san-francisco.geojson',
    dataUrl: 'https://data.sfgov.org/Geography/Planning-Neighborhoods/qc6m-r4ih',
    dataTitle: 'San Francisco Data',
    stateName: 'Calif.',
    googleMapsQuery: 'San Francisco, CA',
  },  
  'chicago': {
    dataFile: 'data/chicago.geojson',
    dataUrl: 'https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods/9wp7-iasj',
    dataTitle: 'City of Chicago Data Portal',
    stateName: 'Ill.',
    googleMapsQuery: 'Chicago, IL',
  },
  'seattle': { 
    dataFile: 'data/seattle.geojson',
    dataUrl: 'https://data.seattle.gov/dataset/Neighborhoods/2mbt-aqqx',
    dataTitle: 'Data.Seattle.Gov',
    stateName: 'Wa.',
    googleMapsQuery: 'Seattle, WA',
  },
  'macon': {
    dataFile: 'data/macon.geojson',
    dataUrl: 'http://datahub.io/dataset/macon-neighborhoods',
    dataTitle: 'Macon Police Dept',
    stateName: 'Ga.',
    author: 'mapmeld',
    googleMapsQuery: 'Macon, GA',
  },
  'denver': { 
    dataFile: 'data/denver.geojson',
    dataUrl: 'http://data.denvergov.org/dataset/city-and-county-of-denver-statistical-neighborhoods',
    dataTitle: 'Denver Open Data Catalog',
    stateName: 'Colo.',
    googleMapsQuery: 'Denver, CO',
  },
  'washington': { 
    dataFile: 'data/washington.geojson',
    dataUrl: 'http://data.dc.gov/Metadata.aspx?id=163',
    dataTitle: 'Neighborhood clusters',
    stateName: 'D.C.',
    author: 'monfresh',
    googleMapsQuery: 'Washington, DC',
  },
  'milwaukee': {
    dataFile: 'data/milwaukee.geojson',
    dataUrl: 'http://city.milwaukee.gov/DownloadMapData3497.htm',
    dataTitle: 'City of Milwaukee Map Data',
    stateName: 'Wis.',
    author: 'plural',
    googleMapsQuery: 'Milwaukee, WI',
  },
  'las-vegas': {
    dataFile: 'data/las-vegas.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Nev.',
    author: 'saikofish',
    googleMapsQuery: 'Las Vegas, NV',
  },
  'brooklyn': {
    dataFile: 'data/brooklyn.geojson',
    dataUrl: 'http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml',
    dataTitle: 'New York City Department of City Planning',
    stateName: 'N.Y.',
    author: 'ahhrrr',
    googleMapsQuery: 'Brooklyn, NY',
  },
  'portland': {
    dataFile: 'data/portland.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Ore.',
    author: 'rclosner',
    googleMapsQuery: 'Portland, OR',
  },  
  'san-antonio': {
    dataFile: 'data/san-antonio.geojson',
    dataUrl: 'https://gis.sanantonio.gov/gis/downloaddata.aspx',
    dataTitle: 'City of San Antonio GIS',
    stateName: 'Texas',
    author: 'spara', 
    googleMapsQuery: 'San Antonio, TX',
  },
  'st-louis': {
    dataFile: 'data/st-louis.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Mo.',
    googleMapsQuery: 'St. Louis, MO',
  },  
  'akron': { 
    dataFile: 'data/akron.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Ohio',
    author: 'pzula',
    googleMapsQuery: 'Akron, OH',
  },
  'philadelphia': { 
    dataFile: 'data/philadelphia.geojson',
    dataUrl: 'http://www.azavea.com/about-us/giving-back/azavea-commons/',
    dataTitle: 'Azavea',
    stateName: 'Pa.',
    author: 'mishmosh',
    googleMapsQuery: 'Philadelphia, PA',
  },
  'sacramento': {
    dataFile: 'data/sacramento.geojson',
    dataUrl: 'http://www.cityofsacramento.org/gis/',
    dataTitle: 'City of Sacramento GIS',
    stateName: 'Calif.',
    author: 'rjulian57',
    googleMapsQuery: 'Sacramento, CA', 
  },
  'cleveland': { 
    dataFile: 'data/cleveland.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Ohio',
    author: 'pzula',
    googleMapsQuery: 'Cleveland, OH',
  },
  'columbus': { 
    dataFile: 'data/columbus.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Ohio',
    author: 'pzula',
    googleMapsQuery: 'Columbus, OH',
  },
  'cincinnati': { 
    dataFile: 'data/cincinnati.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Ohio',
    author: 'pzula',
    googleMapsQuery: 'Cincinnati, OH',
  },
  'baltimore': { 
    dataFile: 'data/baltimore.geojson',
    dataUrl: 'http://www.bniajfi.org/downloads/gis_shapefiles',
    dataTitle: 'Baltimore Neighborhood Indicators Alliance',
    stateName: 'Md.',
    googleMapsQuery: 'Baltimore, MD',
  },
  'atlanta': { 
    dataFile: 'data/atlanta.geojson',
    dataUrl: 'http://gis.atlantaga.gov/gishome/index.php?option=com_content&task=blogcategory&id=47&Itemid=114',
    dataTitle: 'City of Atlanta GIS',
    stateName: 'Ga.',
    googleMapsQuery: 'Atlanta, GA',
  },
  'los-angeles': { 
    dataFile: 'data/los-angeles.geojson',
    dataUrl: 'http://projects.latimes.com/mapping-la/about/#the-data',
    dataTitle: 'Los Angeles Times',
    stateName: 'Calif.',
    googleMapsQuery: 'Los Angeles, CA',
  },
  'detroit': { 
    dataFile: 'data/detroit.geojson',
    dataUrl: 'http://www.zillow.com/howto/api/neighborhood-boundaries.htm',
    dataTitle: 'Zillow',
    stateName: 'Mich.',
    googleMapsQuery: 'Detroit, MI',
  },
  'san-diego': { 
    dataFile: 'data/san-diego.geojson',
    dataUrl: 'http://www.sandag.org/index.asp?subclassid=100&fuseaction=home.subclasshome',
    dataTitle: 'SANDAG',
    stateName: 'Calif.',
    googleMapsQuery: 'San Diego, CA',
  },
  'bronx': {
    dataFile: 'data/bronx.geojson',
    dataUrl: 'http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml',
    dataTitle: 'New York City Department of City Planning',
    stateName: 'N.Y.',
    author: 'ahhrrr',
    googleMapsQuery: 'The Bronx, NY',
  },
  'staten-island': {
    dataFile: 'data/staten-island.geojson',
    dataUrl: 'http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml',
    dataTitle: 'New York City Department of City Planning',
    stateName: 'N.Y.',
    author: 'ahhrrr',
    googleMapsQuery: 'Staten Island, NY',
  },
  'queens': {
    dataFile: 'data/queens.geojson',
    dataUrl: 'http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml',
    dataTitle: 'New York City Department of City Planning',
    stateName: 'N.Y.',
    author: 'ahhrrr',
    googleMapsQuery: 'Queens, NY',
  },
  'manhattan': {
    dataFile: 'data/manhattan.geojson',
    dataUrl: 'http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml',
    dataTitle: 'New York City Department of City Planning',
    stateName: 'N.Y.',
    author: 'ahhrrr',
    googleMapsQuery: 'Manhattan, NY',
  },

  /*

  To add a new city, make a copy of the structure below, and fill it out.

  '': { 
    dataFile: 'data/???.geojson',
    dataUrl: '???',
    dataTitle: '???',
    stateName: '???', // State abbreviation according to A.P. guidelines
                   // http://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations
    author: '???', // Twitter id, without @
    googleMapsQuery: '???',
  },
  */
};
