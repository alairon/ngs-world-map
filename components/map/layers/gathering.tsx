import { Marker, Popup } from 'react-leaflet';
import { Box, Heading, NumberInputStepper } from '@chakra-ui/react';
import { DivIcon } from 'leaflet';
import PopupContent from '../../info/PopupContent';

export default function Gathering(gathering): JSX.Element{
  function genericIcon(fill: string): DivIcon{
    const svg = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="10" height="10" stroke="black" fill="${fill}"><circle cx="100" cy="100" r="800"/></svg>`;
  
    return(
      new DivIcon({
        html: svg,
        className: "gatheringMarker" 
      })
    )
  }

  const Markers: JSX.Element = gathering.data.map((nodes, idx: number) => {

    return nodes.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'g'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={nodes.info.materialName} icon={genericIcon(nodes.info.color)}>
          <Popup className={"NGSPopup"}>
            <PopupContent title={nodes.info.materialName} contentHeader={<b>Used for:&nbsp;</b>} content={nodes.info.usage} />
        </Popup>
        </Marker>
      );
    });
  });

  return (Markers);
}
