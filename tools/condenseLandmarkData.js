/* readMarkers.js
  This file attempts to gather the data from the /data/map/markers folder
  based on the language passed in (e.g. 'en', 'jp', etc.) and compresses them
  into a single JSON folder.\
*/
const fs = require('fs');
const path = require('path');

function getMarkers(lang, continent){
  const inputDir = path.join(__dirname, '../data/' + continent, 'landmarks');
  const outputDir = path.join(__dirname, '../data/min/');
  const markerDir = path.join(inputDir, '/');
  const jsonRegex = /.\.json/mi;
  const markers = [];
  
  const files = fs.readdirSync(markerDir);

  for (const file in files){
    // Test if the current file is a JSON file
    if (jsonRegex.test(files[file])){
      // Reads the JSON file
      let content = JSON.parse(fs.readFileSync(markerDir+files[file], 'utf8'));

      // Reads each section of the JSON. See the skeleton.txt file in the data/map/_lang_ folder for details
      for (const x in Object.keys(content)) {
        let length = content[Object.keys(content)[x]].length;

        if (length > 0){
          for (let y = 0; y < length; y++){
            markers.push(content[Object.keys(content)[x]][y]);
          }
        }
      }
    }
  }

  // Attempt to write a new JSON file with the compiled data
  try{
    fs.writeFileSync(path.join(outputDir, 'landmarks_' + lang + '.json'), JSON.stringify(markers));
    console.log(`JSON created at: ${path.join(outputDir, 'landmarks_' + lang + '.json')}`);
  }
  catch (err){
    console.log ("The program was unable to create the JSON" + err);
  }
}

exports.getMarkers = getMarkers;