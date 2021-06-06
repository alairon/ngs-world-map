import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import PopupContent from '../info/PopupContent';

export default function Containers(containers): JSX.Element{
  function genericIcon(fill: string): DivIcon{
    const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="8" fill="${fill}"/></svg>`;
  
    return(
      new DivIcon({
        html: svg,
        className: "gatheringMarker" 
      })
    )
  }

  const Markers: JSX.Element = containers.data.map((nodes, idx: number) => {
    console.log(nodes);
    return nodes.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'c'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={nodes.info.name} icon={genericIcon("#ff00ff")}>
          <Popup className={"NGSPopup"}>
            <PopupContent title={nodes.info.name} content={nodes.info.desc} />
        </Popup>
        </Marker>
      );
    });
  });

  return (Markers);
}
