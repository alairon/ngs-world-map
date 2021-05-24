import Head from 'next/head';
import dynamic from "next/dynamic";

export default function Map() {

  // Imports the map with SSR disabled since it needs to be run on the client
  const MapView = dynamic(() => import ("../../components/map/map"), {
    ssr: false
  });

  return (
    <main>
      <Head>
        <title>PHANTASY STAR ONLINE 2 NEW GENESIS &beta; closed beta Map</title>
        <meta name="description" content="New Genesis Map"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <MapView lang="en"/>
    </main>
  );
}
