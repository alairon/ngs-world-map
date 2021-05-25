/* readMarkers.js
  This file attempts to gather the data from the /data/map/markers folder
  based on the language passed in (e.g. 'en', 'jp', etc.) and compresses them
  into a single JSON folder.\
*/
const fs = require('fs');
const path = require('path');
const inputDir = path.join(__dirname, '../data/map/markers/');
const outputDir = path.join(__dirname, '../data/ngs/');

function getMarkers(lang){
  const markerDir = path.join(inputDir, lang, '/');
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
  }
  catch (err){
    console.log ("The program was unable to create the JSON" + err);
  }
  finally{
    console.log(`JSON created at: ${path.join(outputDir, 'marker_' + lang + '.json')}`);
  }
}

// frontend stuff
/*
function generateMarker(data){
  let latLng = L.latLng([data.lat, data.lng]);
  let html = generateHTML(data.popupHeader, data.popupText);
  let marker = L.marker(latLng, { "title": data.tooltip }).bindPopup(html);

  return (marker);
}

function generateHTML(header, text){
  return(`<h1>${header}</h1><p>${text}</p`);
}
*/
exports.getMarkers = getMarkers;