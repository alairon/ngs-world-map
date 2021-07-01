import { Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import { IconObject, LandmarkObject_L3 } from '../MapView.d';
import RyukerPopupDialog from '../dialog/RyukerDialog';
import TrialPopopDialog from '../dialog/TrialDialog';
import PopupContent from '../dialog/ContentDialog';

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
  ryuker: new Icon({iconUrl: '../ngs/markers/icons/ryuker.svg', iconSize: [35, 35]}),
  cocoon: new Icon({iconUrl: '../../ngs/markers/icons/cocoon.svg', iconSize: [30, 30]}),
  tower: new Icon({iconUrl: '../../ngs/markers/icons/tower.svg', iconSize: [40, 40]}),
  regionMag: new Icon({iconUrl: '../../ngs/markers/icons/regionMag.svg', iconSize: [35, 35]})
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
        return (icons.regionMag); //region mag
        case 4:
        return (genericIcon("black")); //hut
      default:
        return (genericIcon("black")); //others
    }
  }
}

function getContent(landmarkID, landmarkContent): JSX.Element{
  switch(landmarkID){
    case 0:
      return (RyukerPopupDialog(landmarkContent));
    case 1:
    case 2:
      return (TrialPopopDialog(landmarkContent));
    default:
      return (RyukerPopupDialog(landmarkContent));
  }
}

export default function Landmarks(landmarks: LandmarkObject_L3 | any){
  const Markers: JSX.Element = landmarks.data.map((landmark: LandmarkObject_L3, idx: number) => {
    const popupContent = getContent(landmark.markerType, landmark.details ? landmark.details : landmark.description);
    return (
      <Marker key={idx} position={[landmark.lat, landmark.lng]} title={landmark.landmarkName} icon={getIcon(landmark.markerType)}>
        <Popup className={"NGSPopup"} >
          <PopupContent title={landmark.landmarkName} contentHeader={landmark.locationName} description={landmark.description} content={popupContent}/>
        </Popup>
        <Tooltip direction="top" sticky>{landmark.locationName}</Tooltip>
      </Marker>
    );
  });

  return (Markers);
}
