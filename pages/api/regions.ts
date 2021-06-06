/* regions.ts
  Server code that serves the regions you would find in PSO2:NGS
  The endpoint will serve GeoJSON files representing the shapes for each boundary
*/
import type { NextApiRequest, NextApiResponse } from 'next';
// Typical location of files: data/map/region/_lang_/_regionName_.geojson

interface GeoJSON {
  type: string,
  features: JSON
}

export async function getRegions(lang: string): Promise<JSON>{
  //const data: JSON = require('../../data/ngs/regions_' + lang + '.json');
  const data: GeoJSON = require(`../../data/ngs/regions_${lang}.json`);
  return (data.features);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method === 'GET'){
    const regionsEN = await getRegions('en');
    
    switch(req.body){
      case 'en':
        res.status(200).json(regionsEN);
        break;
      case 'jp':
        res.status(200).json({lang: 'jp'});
        break;
      default:
        res.status(200).json(regionsEN);
        //res.status(200).send(`"${req.body}" currently isn't a supported language. Maybe you'd like to help?`);
    }
  }
  else {
    res.status(200).send(`The API endpoint received a ${req.method} request. This endpoint only supports GET requests.`);
  }
}
