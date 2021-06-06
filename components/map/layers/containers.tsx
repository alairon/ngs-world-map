import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import PopupContent from '../info/PopupContent';

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
  const Markers: JSX.Element = containers.data.map((nodes: any, idx: number) => {
    return(nodes.coordinates.map((coord: any, idy: number) => {
      return(
        <Marker key={'c'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={nodes.info.name} icon={containerIcon(nodes.info.color)}>
          <Popup className={"NGSPopup"}>
            <PopupContent title={nodes.info.name} content={nodes.info.desc} />
          </Popup>
        </Marker>
      );
    }));
  });

  return (Markers);
}
