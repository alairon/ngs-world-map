/* landmarks.ts
  Server code that serves the major landmarks you would find in PSO2:NGS
  For the gathering points, please see 'gathering.ts'
*/
import type { NextApiRequest, NextApiResponse } from 'next';
// Typical location of files: data/map/markers/_lang_/landmarks/_materialName_.json

export async function getLandmarkMarkers(lang: string): Promise<JSON>{
  const data: JSON = require('../../data/ngs/landmarks_' + lang + '.json');
  return (data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method === 'GET'){
    const markersEN = await getLandmarkMarkers('en');
    switch(req.body){
      case 'en':
        res.status(200).json(markersEN);
        break;
      case 'jp':
        res.status(200).json({lang: 'jp'});
        break;
      default:
        res.status(200).json(markersEN);
        //res.status(200).send(`"${req.body}" currently isn't a supported language. Maybe you'd like to help?`);
    }
  }
  else {
    res.status(200).send(`The API endpoint received a ${req.method} request. This endpoint only supports GET requests.`);
  }
}
