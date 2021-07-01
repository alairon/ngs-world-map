/** condenseContainerData.js
 * Built for gathering data structure version: C1.1 (C1 base 2021-06-05, update 2021-06-30)
 * 
 * This program merges the localized strings files with the coordinates found in the associated coordinates file
 * The program will also condense the information section to reduce processing on the client's device
 * 
 * C1.1 improves the flexibility of coordinate files, allowing the data to be placed in multiple files
 */

const fs = require('fs');
const path = require('path');
const structVer = "C1";

function mapDataMerge(lang, continent){
  const jsonRegex = /.\.json$/mi;
  const dataDir = '../data';
  const inputStringsDir = path.join(__dirname, `${dataDir}`, `${continent}`, 'containers', `${lang}`);
  const inputMapDataDir = path.join(__dirname, `${dataDir}`, `${continent}`, 'containers', 'coordinates');
  const outputDir = path.join(__dirname, '../data/ngs');
  
  // Gather the list of files
  const inputStringFiles = fs.readdirSync(inputStringsDir, 'utf8');
  const inputMapDataFiles = fs.readdirSync(inputMapDataDir, 'utf8');

  // Data
  const localeData= {};

  // Reads the localized text .json files from a directory
  inputStringFiles.map((fileName) => {
    if (jsonRegex.test(fileName)){
      // Reads
      const data = JSON.parse(fs.readFileSync(path.join(inputStringsDir, fileName), 'utf8'));
      if (data){
        for (const langContainerType in data){
          // Checks for the dataStructRev version
          if (data[langContainerType].info.dataStructRev == structVer){
            localeData[langContainerType] = data[langContainerType];
            delete localeData[langContainerType].info.dataStructRev;

            // Goes through the coordinate files
            inputMapDataFiles.map((value) => {
              if (jsonRegex.test(value)){
                const data = JSON.parse(fs.readFileSync(path.join(inputMapDataDir, value), 'utf8'));
                if (data){
                  for (const coordinateContainerType in data){
                    if (localeData[coordinateContainerType] != 'undefined' && langContainerType === coordinateContainerType){
                      data[coordinateContainerType].coordinates.map((coords) => {
                        localeData[langContainerType].coordinates.push(coords);
                      });
                    }
                  }
                }
              }
            });

            console.log(`>  Processed ${localeData[langContainerType].coordinates.length} ${langContainerType} containers`);
          }
          else{
            console.log(`Error while processing '${langContainerType}'\n  Expected structure version ${structVer}, but got ${data[langContainerType].info.dataStructRev}`);
            localeData[value] = {};
          }
        }
      }
    }
  });
  
  try{
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, 'containers_' + lang + '.json'), JSON.stringify([localeData]));
    console.log(`JSON created at: ${path.join(outputDir, 'containers_' + lang + '.json')}`);
  }
  catch(err){
    console.log ("The program was unable to create the JSON" + err);
  }
}

exports.mapDataMerge = mapDataMerge;
