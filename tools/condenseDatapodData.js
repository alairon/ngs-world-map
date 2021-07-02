/** condenseDatapodData.js
 * Built for datapod data structure version: D1 (2021-07-01)
 * 
 * This program merges the localized strings files with the coordinates found in the files
 */

 const fs = require('fs');
 const path = require('path');
 
 function mapDataMerge(lang, continent){
   const jsonRegex = /.\.json$/mi;
   const dataDir = '../data';
   const inputDataDir = path.join(__dirname, `${dataDir}`, `${continent}`, 'datapods', `${lang}`);
   const outputDir = path.join(__dirname, '../data/ngs');
   
   // Gather the list of files
   const inputDataFiles = fs.readdirSync(inputDataDir, 'utf8');
 
   // Data
   const localeData= { datapod: { coordinates: []}};
 
   // Reads the localized text .json files from a directory
   inputDataFiles.map((fileName) => {
     if (jsonRegex.test(fileName)){
       // Reads
       const data = JSON.parse(fs.readFileSync(path.join(inputDataDir, fileName), 'utf8'));
       if (data){
         data.datapod.coordinates.map((coords)=> {
           localeData.datapod.coordinates.push(coords)
         });
       }
     }
    });
    console.log (`>  Processed ${localeData.datapod.coordinates.length} datapods`);
   
   try{
     if (!fs.existsSync(outputDir)){
       fs.mkdirSync(outputDir);
     }
     fs.writeFileSync(path.join(outputDir, 'datapods_' + lang + '.json'), JSON.stringify([localeData]));
     console.log(`JSON created at: ${path.join(outputDir, 'datapods_' + lang + '.json')}`);
   }
   catch(err){
     console.log ("The program was unable to create the JSON" + err);
   }
 }
 
 exports.mapDataMerge = mapDataMerge;
 