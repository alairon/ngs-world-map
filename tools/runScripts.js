const landmarks = require('./condenseLandmarkData').getMarkers; // Landmarks
// const readGathering = require('./readGatheringLocations'); //G2
const gathering = require('./condenseGatheringData').mapDataMerge; //G3

/** Supported Languages
 * en: English
 * jp: 日本語 (Japanese)
 */
const supportedLanguages = ['en', 'jp'];
const continents = ['halpha'];

continents.map((continent) => {
  supportedLanguages.map((lang) => {
    console.log(`Compiling data for: ${continent} (${lang})`);
    landmarks(lang, continent);
    gathering(lang, continent);
  });
})
