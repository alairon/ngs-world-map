import { Marker, Popup } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import { IconObject, LandmarkObject_L1 } from '../map.d';

// Move to scripts so that we can shrink the JSON sent to users
function generateHTML(header: string, text: string){
  return (<div><h1>{header}</h1><p>{text}</p></div>);
}

function genericIcon(fill: string): DivIcon{
  const img = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="10" height="10" stroke="black" fill="${fill}"><circle cx="100" cy="100" r="800"/></svg>`;

  return(
    new DivIcon({
      html: img,
      className: "gatheringMarker" 
    })
  )
}

// Paths are relative to the public/ngs folder
const icons: IconObject = {
  ryuker: new Icon({iconUrl: './markers/icons/ryuker.svg', iconSize: [35, 35]}),
  cocoon: new Icon({iconUrl: './markers/icons/cocoon.svg', iconSize: [30, 30]}),
  tower: new Icon({iconUrl: './markers/icons/tower.svg', iconSize: [40, 40]}),
  regionMag: new Icon({iconUrl: './markers/icons/regionMag.svg', iconSize: [30, 30]})
}

function getIcon(iconID): Icon | DivIcon{
  if (typeof(iconID) == 'number'){
    switch(iconID){
      case 0:
        return (icons.ryuker); //ryuker
      case 1:
        return (icons.cocoon); //cocoon
      case 2:
        return (icons.tower); //tower
      case 3:
        return (genericIcon("black")); //hut
      case 4:
        return (icons.regionMag); //region mag
      default:
        return (genericIcon("black")); //others
    }
  }
}

export default function Landmarks(landmarks: LandmarkObject_L1 | any){
  const Markers: JSX.Element = landmarks.data.map((landmark: LandmarkObject_L1, idx: number) => {
    const text: JSX.Element = generateHTML(landmark.popupHeader, landmark.popupText);
    return (
      <Marker key={idx} position={[landmark.lat, landmark.lng]} title={landmark.tooltip} icon={getIcon(landmark.markerType)}>
        <Popup>
          {text}
        </Popup>
      </Marker>
    );
  });

  return (Markers);
}