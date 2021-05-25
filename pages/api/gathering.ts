/* gathering.tsx
  Server code that serves the gathering points you would find in PSO2:NGS
  For the gathering points, please see 'gathering.tsx'
*/
import type { NextApiRequest, NextApiResponse } from 'next';
// Typical location of files: data/map/markers/_lang_/gathering/_materialName_.json

export async function getGatheringMarkers(lang: string){
  const data = require('../../data/ngs/gathering_' + lang + '.json');
  return (data);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET'){
    const markers = getGatheringMarkers('en');
    switch(req.body){
      case 'en':
        res.status(200).json(markers);
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
    res.status(405).end(`The API endpoint received a ${req.method} request. This endpoint only supports GET requests.`);
  }
}