/** condenseContainerData.js
 * Built for gathering data structure version: C1 (2021-06-05)
 * 
 * This program merges the localized strings files with the coordinates found in the associated coordinates file
 * The program will also condense the information section to reduce processing on the client's device
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
  const mergedJSON = [];

  inputStringFiles.map((value) => {
    if (jsonRegex.test(value)){
      const data = JSON.parse(fs.readFileSync(path.join(inputStringsDir, value), 'utf8'));
      if (data){
        for (const value in data){
          if (data[value].info.dataStructRev == structVer){
            localeData[value] = data[value];
            delete localeData[value].info.dataStructRev;
          }
          else{
           console.log(`Error while processing '${value}'\n  Expected structure version ${structVer}, but got ${data[value].info.dataStructRev}`);
           localeData[value] = {};
         }
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
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, 'containers_' + lang + '.json'), JSON.stringify(mergedJSON));
    console.log(`JSON created at: ${path.join(outputDir, 'containers_' + lang + '.json')}`);
  }
  catch(err){
    console.log ("The program was unable to create the JSON" + err);
  }
}

exports.mapDataMerge = mapDataMerge;
