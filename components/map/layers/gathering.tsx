import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import GatheringDialog from '../info/GatheringDialog';

function genericIcon(fill: string): DivIcon{
  const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="8" fill="${fill}"/></svg>`;

  return(
    new DivIcon({
      html: svg,
      className: "gatheringMarker" 
    })
  )
}

export default function Gathering(gathering): JSX.Element{
  const Markers: JSX.Element = gathering.data.map((nodes, idx: number) => {
    return nodes.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'g'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={nodes.info.materialName} icon={genericIcon(nodes.info.color)}>
          <Popup className={"NGSPopup"}>
            {GatheringDialog(nodes.info)}
        </Popup>
        </Marker>
      );
    });
  });

  return (Markers);
}
