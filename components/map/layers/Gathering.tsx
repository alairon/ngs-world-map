import { Marker, Popup, Tooltip } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import GatheringDialog from '../dialog/GatheringDialog';

function genericIcon(fill: string, inCave: boolean | undefined): DivIcon{
  const svg = (inCave) => { 
    if (inCave) {
      return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="red" stroke-width="10" fill="${fill}"/></svg>`)
    }
    return (`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="10" fill="${fill}"/></svg>`);
  }

  return(
    new DivIcon({
      html: svg(inCave),
      className: "gatheringMarker" 
    })
  )
}

export default function Gathering(gathering): JSX.Element{
  const Markers: JSX.Element = gathering.data.map((nodes, idx: number) => {
    return nodes.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'g'+(idx*idy+idy)} position={[coord.lat, coord.lng]} icon={genericIcon(nodes.info.color, coord.inCave)}>
          <Popup className={"NGSPopup"}>{GatheringDialog(nodes.info)}</Popup>
          <Tooltip sticky className={"NGSPopup"}>{nodes.info.materialName}</Tooltip>
        </Marker>
      );
    });
  });

  return (Markers);
}
