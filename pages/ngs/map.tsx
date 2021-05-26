import Head from 'next/head';
import dynamic from "next/dynamic";
import {getGatheringMarkers} from '../api/gathering';
import { getLandmarkMarkers } from '../api/landmarks';
import { getRegions } from '../api/regions';

interface StaticProps{
  props: {
    landmarks: JSON,
    gathering: JSON,
    regions: JSON
  }
}

export async function getStaticProps(): Promise<StaticProps>{
  const landmarks: JSON = await getLandmarkMarkers('en');
  const gathering: JSON = await getGatheringMarkers('en');
  const regions: JSON = await getRegions('en');

  return ({
    props: {
      landmarks,
      gathering,
      regions
    }
  });
}

export default function Map(props: Promise<StaticProps>): JSX.Element {

  // Imports the map with SSR disabled since it needs to be run on the client
  const MapView = dynamic(() => import ("../../components/map/map"), {
    ssr: false
  });

  return (
    <main>
      <Head>
        <title>PSO2:NGS World Map</title>
        <meta name="description" content="New Genesis Map"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <MapView {...props}/>
    </main>
  );
}
