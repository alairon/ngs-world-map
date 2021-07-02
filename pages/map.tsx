import Head from 'next/head';
import dynamic from 'next/dynamic';
import { getGatheringMarkers, getCaveData, getDatapodMarkers } from './api/gathering';
import { getLandmarkMarkers, getBossMarkers, getEmergencyQuestMarkers } from './api/landmarks';
import { getContainerMarkers } from './api/containers'
import { getRegions } from './api/regions';
import NavBar from '../components/navigation/NavBar';
import { useRouter } from 'next/router';

interface StaticProps{
  props: {
    landmarks: JSON,
    gathering: JSON,
    regions: JSON,
    containers: JSON,
    datapods: JSON,
    caves: JSON,
    bosses: JSON,
    emergencyQuests: JSON
  }
}

export async function getStaticProps({locale}): Promise<StaticProps>{
  const landmarks: JSON = await getLandmarkMarkers(locale);
  const gathering: JSON = await getGatheringMarkers(locale);
  const regions: JSON = await getRegions(locale);
  const containers: JSON = await getContainerMarkers(locale);
  const datapods: JSON = await getDatapodMarkers(locale);
  const bosses: JSON = await getBossMarkers(locale);
  const emergencyQuests: JSON = await getEmergencyQuestMarkers(locale);
  const caves: JSON = await getCaveData();

  return ({
    props: {
      landmarks,
      gathering,
      regions,
      containers,
      datapods,
      caves,
      bosses,
      emergencyQuests
    }
  });
}

export default function Map(props: Promise<StaticProps>): JSX.Element {
  const {locale} = useRouter();
  // Imports the map with SSR disabled since it needs to be run on the client
  const MapView = dynamic(() => import ("../components/map/MapView"), {
    ssr: false
  });

  const localeStrings = {
    "jp": {
      "title": "PSO2:NGS ワールドマップ",
      "description": "PSO2 ニュージェネシス (PSO2:NGS) ワールドマップ",
    },
    "en": {
      "title": "PSO2:NGS World Map",
      "description": "Phantasy Star Online 2 New Genesis (PSO2:NGS) World Map",
    }
  }

  return (
    <main>
      <Head>
        <title>{localeStrings[locale].title}</title>
        <meta name="description" content={localeStrings[locale].description}></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <NavBar content={{title: localeStrings[locale].title, footer: `Map Data &copy; SEGA <Link href="https://pso2.com">PHANTASY STAR ONLINE 2 NEW GENESIS</Link>`}}/>

      <section id="Map">
        <MapView {...props}/>
      </section>
    </main>
  );
}
