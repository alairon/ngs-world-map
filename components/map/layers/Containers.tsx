import { Marker, Popup, Tooltip } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import PopupContent from '../dialog/CollectibleDialog';
import { useRouter } from 'next/router';

function containerIcon(fill: string): DivIcon{
  const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="75" height="75" stroke="white" stroke-width="8" fill="${fill}"/></svg>`;

  return(
    new DivIcon({
      html: svg,
      className: "gatheringMarker" 
    })
  )
}

export default function Containers(containers: any): JSX.Element{
  const { locale } = useRouter();
  const localeStrings: Object = {
    en: {
      title: "Collectibles"
    },
    jp: {
      title: "コレクタブル"
    }
  }


  const Markers: JSX.Element = containers.data.map((nodes: any, idx: number) => {
    const markerKeys = Object.keys(nodes);
    return (markerKeys.map((key) => {
      return(nodes[key].coordinates.map((coord: any, idy: number) => {
        return(
          <Marker key={'c'+(idx*idy+idy)} position={[coord.lat, coord.lng]} icon={containerIcon(nodes[key].info.color)}>
            <Popup className={"NGSPopup"}>
              <PopupContent title={localeStrings[locale].title} name={nodes[key].info.name} barrier={coord.barrier} content={nodes[key].info.desc[coord.item] || `Lat: ${coord.lat} Lng: ${coord.lng}`} />
            </Popup>
            <Tooltip direction="top" sticky>{nodes[key].info.name}</Tooltip>
            {/*<Tooltip direction="bottom" sticky>Lat: {coord.lat}, Lng: {coord.lng}</Tooltip>*/}
          </Marker>
        );
      }));
    }));
  });

  return (Markers);
}
