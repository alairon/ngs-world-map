/* gathering.ts
  Server code that serves the gathering points you would find in PSO2:NGS
  For the landmarks, please see 'landmarks.ts'
*/
import type { NextApiRequest, NextApiResponse } from 'next';

export async function getContainerMarkers(lang: string): Promise<JSON>{
  const data: JSON = require('../../data/ngs/containers_' + lang + '.json');
  return (data);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET'){
    const markers = await getContainerMarkers('en');
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
