/** gatheringDataMerge.ts
 * Built for gathering data structure version: G3
 * 
 * This program merges the localized strings file with the coordinates found in the associated coordinates file
 * The program will also condense the information section to reduce processing on the client's device
 */

const fs = require('fs');
const path = require('path');
const structVer = "G3";

function mapDataMerge(lang, continent){
  const jsonRegex = /.\.json$/mi;
  const inputStringsDir = path.join(__dirname, '../data/locale/', lang, 'gathering');
  const inputMapDataDir = path.join(__dirname, '../data/', continent, 'gathering');
  const outputDir = path.join(__dirname, '../data/ngs');
  
  // Gather the list of files
  const inputStringFiles = fs.readdirSync(inputStringsDir, 'utf8');
  const inputMapDataFiles = fs.readdirSync(inputMapDataDir, 'utf8');
  
  // Data
  const localeData= {};
  const mergedJSON = [];

  inputStringFiles.map((value) => {
    if (jsonRegex.test(value)){
      const data = JSON.parse(fs.readFileSync(path.join(inputStringsDir, value), 'utf8'));
      if (data){
        for (const value in data){
          localeData[value] = data[value];
        }
      }
    }
  });

  inputMapDataFiles.map((value) => {
    if (jsonRegex.test(value)){
      const data = JSON.parse(fs.readFileSync(path.join(inputMapDataDir, value), 'utf8'));
      if (data){
        for (const value in data){
          if (localeData[value] != 'undefined'){
            mergedJSON.push(Object.assign(localeData[value], data[value]));
          }
        }
      }
    }
  });

  try{
    fs.writeFileSync(path.join(outputDir, 'gathering_' + lang + '.json'), JSON.stringify(mergedJSON));
  }
  catch(err){
    console.log("whoopsie.");
  }
  finally{
    console.log("Operation Complete");
  }
}

exports.mapDataMerge = mapDataMerge;