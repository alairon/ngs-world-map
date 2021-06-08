import { GeoJSON, Popup } from 'react-leaflet';
import { GenericMarkerConfig } from '../MapView.d';
import RegionDialog from '../info/RegionDialog';
import PopupContent from '../info/ContentDialog';
import { useRouter } from 'next/router';

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

function areaHeader(region: number): string{
  const { locale } = useRouter();

  const localeString = {
    "en": ["City Area", "Gathering Area", "Combat Area", "??? Area"], 
    "jp": ["都市", "探索セクション", "戦闘セクション", "??? セクション"]
  }

  return(localeString[locale][region]);
}

export default function Regions(boundaries: any): JSX.Element{
  const regions: JSX.Element = boundaries.data.map((boundary, idx: number) => {
    return(
      <GeoJSON key={'r'+idx} data={boundary} style={regionStyle(boundary.properties.region)}>
        <Popup className={"NGSPopup"}>
          <PopupContent title={boundary.properties.name} contentHeader={areaHeader(boundary.properties.region)} content={RegionDialog(boundary.properties)} />
        </Popup>
      </GeoJSON>
    )
  });

  return (regions);
}
