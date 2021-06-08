import { GeoJSON, Popup } from 'react-leaflet';
import { GenericMarkerConfig } from '../MapView.d';
import PopupContent from '../info/RegionDialog';
import ContentDialog from '../info/ContentDialog';

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
    return(
      <GeoJSON key={'r'+idx} data={boundary} style={regionStyle(boundary.properties.region)}>
        <Popup className={"NGSPopup"}>
          <PopupContent title={boundary.properties.name} content={boundary.properties} />
        </Popup>
      </GeoJSON>
    )
  });

  return (regions);
}
