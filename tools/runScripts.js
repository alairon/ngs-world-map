const landmarks = require('./condenseLandmarkData').getMarkers; // L3
const gathering = require('./condenseGatheringData').mapDataMerge; //G4
const containers = require('./condenseContainerData').mapDataMerge; //C1

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
    containers(lang, continent);
  });
})
