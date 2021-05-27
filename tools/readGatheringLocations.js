/* readMarkers.js
  Built for gathering data structure: G2

  This file attempts to gather the data from the /data/map/markers folder
  based on the language passed in (e.g. 'en', 'jp', etc.) and compresses them
  into a single JSON file.
*/
const fs = require('fs');
const path = require('path');
const inputDir = path.join(__dirname, '../data/map/markers/en/gathering/');
const outputDir = path.join(__dirname, '../data/ngs/');

function getMarkers(lang){
  const markerDir = path.join(inputDir, '/');
  const jsonRegex = /.\.json$/mi;
  const markers = [];
  
  const files = fs.readdirSync(markerDir);

  for (const file in files){
    // Test if the current file is a JSON file
    if (jsonRegex.test(files[file])){
      // Reads the JSON file
      let content = JSON.parse(fs.readFileSync(markerDir+files[file], 'utf8'));

      // Reads each section of the JSON. See the skeleton.txt file in the data/map/_lang_ folder for details
      for (const x in Object.keys(content)) {
        const element = content[Object.keys(content)[x]];
        markers.push(element);
      }
    }
  }

  // Attempt to write a new JSON file with the compiled data
  try{
    fs.writeFileSync(path.join(outputDir, 'gathering_' + lang + '.json'), JSON.stringify(markers));
  }
  catch (err){
    console.log ("The program was unable to create the JSON" + err);
  }
  finally{
    console.log(`JSON (${lang}) created at: ${path.join(outputDir, 'gathering_' + lang + '.json')}`);
  }
}
exports.getMarkers = getMarkers;
