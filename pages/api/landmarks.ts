/* landmarks.tsx
  Server code that serves the major landmarks you would find in PSO2:NGS
  For the gathering points, please see 'gathering.tsx'
*/
import type { NextApiRequest, NextApiResponse } from 'next';

export async function getLandmarkMarkers(lang: string){
  const data = require('../../data/ngs/landmarks_' + lang + '.json');
  return (data);
}

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method === 'GET'){
    const markers = getLandmarkMarkers('en');
    switch(req.body){
      case 'en':
        res.status(200).json({lang: 'en'});
        break;
      case 'jp':
        res.status(200).json({lang: 'jp'});
        break;
      default:
        res.status(200).json(markers);
        //res.status(200).send(`"${req.body}" currently isn't a supported language. Maybe you'd like to help?`);
    }
  }
  else {
    res.status(200).send(`The API endpoint received a ${req.method} request. This endpoint only supports GET requests.`);
  }
}
