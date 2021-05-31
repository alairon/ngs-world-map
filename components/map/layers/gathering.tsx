import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';

export default function Gathering(gathering): JSX.Element{
  // Move to scripts so that we can shrink the JSON sent to users
  function generateHTML(header: string, text: string): JSX.Element{
    return (<div><h1>{header}</h1><p>{text}</p></div>);
  }

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
    const material: string = nodes.info.materialName;
    const uses: string = "Used for: " + nodes.info.usage;
    const popupText: JSX.Element = generateHTML(material, uses);

    return nodes.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'g'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={material} icon={genericIcon(nodes.info.color)}>
          <Popup>
            {popupText}
          </Popup>
        </Marker>
      );
    });
  });

  return (Markers);
}
