import { GeoJSON, Popup } from 'react-leaflet';
import { GenericMarkerConfig } from '../map.d';
import PopupContent from '../../info/PopupContent';

function regionStyle(region: number): GenericMarkerConfig {
  switch(region){
    case 0: // City
      return ({
        "color": "#ffffff",
        "weight": 5,
        "opacity": 0.80
      });
    case 1: // Exploration
      return({
        "color": "#63D668",
        "weight": 5,
        "opacity": 0.80
      });
    case 2: // Combat
      return({
        "color": "#FE5D5D",
        "weight": 5,
        "opacity": 0.80
      });
    default: // Others??
      return ({"color": "#000000",
      "weight": 5,
      "opacity": 0.80});
  }
}

export default function Regions(boundaries: any): JSX.Element{
  const regions: JSX.Element = boundaries.data.map((boundary, idx: number) => {
  const regionNames: Array<string> = ['City', 'Gathering Area', 'Combat Area', '??? Area'];

    let contentDiv: JSX.Element = <div><b>{regionNames[boundary.properties.region]}</b><br/><b>Max Players:</b> {boundary.properties.maxPlayers}<br/><b>Recommended CP:</b> {boundary.properties.recommendedCP}<br/><b>Average Enemy Level:</b> {boundary.properties.avgEnemyLvl}</div>;
    if (boundary.properties.region == 0){
      contentDiv = <div><b>{regionNames[boundary.properties.region]}</b><br/><b>Max Players:</b> {boundary.properties.maxPlayers}</div>;
    }
    return(
      <GeoJSON key={'r'+idx} data={boundary} style={regionStyle(boundary.properties.region)} eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
        <Popup className={"NGSPopup"}>
          <PopupContent title={boundary.properties.name} content={contentDiv} />
        </Popup>
      </GeoJSON>
    )
  });

  return (regions);
}
