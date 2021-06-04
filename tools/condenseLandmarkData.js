/* condenseLandmarkData.js
  Uses data structure revision: L3
  This file attempts to gather the data from the /data/map/markers folder
  based on the language passed in (e.g. 'en', 'jp', etc.) and compresses them
  into a single JSON folder.\
*/
const fs = require('fs');
const path = require('path');

function getMarkers(lang, continent){
  const inputDir = path.join(__dirname, '../data/', `${continent}`, 'landmarks', `${lang}`);
  const markerStrings = path.join(__dirname, '../data', `${continent}`, 'landmarks', `landmarks_${lang}.json`);
  const outputDir = path.join(__dirname, '../data/ngs/');
  const jsonRegex = /.\.json/mi;
  const markers = [];
  
  // Read the contents of the common marker file
  let coreMarkerData = fs.readFileSync(markerStrings, 'utf8');
  if (coreMarkerData && typeof(coreMarkerData) == 'string'){
    coreMarkerData = JSON.parse(coreMarkerData);
  }

  let fileList;
  try {
    fileList = fs.readdirSync(inputDir);
  } catch (err) {
    console.error("No file found");
    fileList = [];
  }

  // Go through the list of files found in the inputDir
  fileList.map((fileName) => {
    // Test if the current file is a JSON file
    if (jsonRegex.test(fileName)){
      // Reads the JSON file
      let content = JSON.parse(fs.readFileSync(path.join(inputDir, fileName), 'utf8'));

      let keys = Object.keys(content);

      keys.map((key) => {
        if (content[key].length > 0){
          content[key].map((data) => {
            markers.push(Object.assign(coreMarkerData[key], data));
          })
        }
      });
    }
  });

  // Attempt to write a new JSON file with the compiled data
  try{
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, 'landmarks_' + lang + '.json'), JSON.stringify(markers));
    console.log(`JSON created at: ${path.join(outputDir, 'landmarks_' + lang + '.json')}`);
  }
  catch (err){
    console.log ("The program was unable to create the JSON" + err);
  }
}

exports.getMarkers = getMarkers;