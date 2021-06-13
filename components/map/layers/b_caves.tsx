import { GeoJSON, Marker } from 'react-leaflet';
import { DivIcon } from 'leaflet';

function genericIcon(): DivIcon{
  const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="white" stroke-width="8" fill="#0c0c0c"/></svg>`;

  return(
    new DivIcon({
      html: svg,
      className: "caveEntranceMarker" 
    })
  )
}

export default function BaseLayer_Caves(caveData: any):JSX.Element {
  const dataHeaders = Object.keys(caveData.data);
  //@ts-expect-error
  const Caves: JSX.Element = dataHeaders.map((entry) => {
    return caveData.data[entry].map((data, idx: number) => {
      if(data.geometry){
        return <GeoJSON key={'bm'+idx} data={data.geometry} />;
      }
      return <Marker key={'bm'+idx} position={[data.lat, data.lng]} title={"Cave Entrance"} icon={genericIcon()} />;
    })
  });

  return (Caves);
}