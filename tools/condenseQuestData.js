/* condenseQuestData.js
  Uses data structure revision: UQ1
  This file attempts to gather the data from the UQ folder
  based on the language passed in and compresses the data into a single JSON.
*/
const fs = require('fs');
const path = require('path');

function getMarkers(lang, continent){
  const inputDir = path.join(__dirname, '../data/', `${continent}`, 'emergencyQuests', `${lang}`);
  const outputDir = path.join(__dirname, '../data/ngs/');
  const jsonRegex = /.\.json/mi;
  const markers = [];

  // Get the list of files inside inputDir
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
        if (key){
          markers.push(content[key]);
        }
      });
    }
  });

  // Attempt to write a new JSON file with the compiled data
  try{
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, 'emergencyQuest_' + lang + '.json'), JSON.stringify(markers));
    console.log(`JSON created at: ${path.join(outputDir, 'emergencyQuest_' + lang + '.json')}`);
  }
  catch (err){
    console.log ("The program was unable to create the JSON" + err);
  }
}

exports.getMarkers = getMarkers;
