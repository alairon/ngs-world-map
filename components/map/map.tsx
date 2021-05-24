import { MapContainer, ImageOverlay, Marker, Popup, LayersControl, LayerGroup, AttributionControl, ZoomControl } from 'react-leaflet'
import { Control, CRS, Icon, LatLngBounds, popup } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
//import data from './marker.json';

function generateHTML(header: string, text: string){
  return (<div><h1>{header}</h1><p>{text}</p></div>);
}

let ryukerIcon: Icon = new Icon({
  iconUrl: './markers/icons/ryuker.svg',
  iconSize: [40, 40]
});

let cocoonIcon: Icon = new Icon({
  iconUrl: './markers/icons/cocoon.svg',
  iconSize: [38, 38]
});

let towerIcon: Icon = new Icon({
  iconUrl: './markers/icons/tower.svg',
  iconSize: [40, 40]
})

let regionMag: Icon = new Icon({
  iconUrl: './markers/icons/regionMag.svg',
  iconSize: [40, 40]
});

function getIcon(iconID){
  if (typeof(iconID) == 'number'){
    switch(iconID){
      case 0:
        return (ryukerIcon); //ryuker
      case 1:
        return (cocoonIcon); //cocoon
      case 2:
        return (towerIcon); //tower
      case 3:
        return (cocoonIcon); //hut
      case 4:
        return (regionMag); //region mag
      default:
        return (ryukerIcon); //others
    }
  }
}

export default function Map({lang: string}){
  const data = require('../../public/ngs/marker_en.json')
  const Markers = data.map((data, idx) => {
      const text = generateHTML(data.popupHeader, data.popupText);
      return (
        <Marker key={idx} position={[data.lat, data.lng]} title={data.tooltip} icon={getIcon(data.markerType)}>
          <Popup>
            {text}
          </Popup>
        </Marker>
      )
  });
  
  const imageBounds = new LatLngBounds([[0, 0], [1000, 1000]]);

  return (
    <MapContainer 
      id={"ngs-halpha"}
      crs={CRS.Simple}
      center={[326,294]}
      minZoom={0.5}
      maxZoom={2.5}
      
      zoom={1.0}
      zoomControl={false}
      zoomSnap={0.5}
      zoomDelta={0.5}
      attributionControl={false}
      style={{position: "absolute", height: "100%", width: "100%", backgroundColor: "#011B3C"}}
    >

      <ImageOverlay 
        url='./halpha.jpg'
        bounds={imageBounds}
        attribution={"<a href='https://ngs.pso2.com' target='_blank' style='color:black'>PHANTASY STAR ONLINE 2 NEW GENESIS closed &beta; test</a>"}
      />
      
      <AttributionControl 
        position={"bottomright"}
        prefix={"&copy; SEGA"}
      />

      <ZoomControl 
        position={"topright"}
      />

      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Landmarks">
          <LayerGroup>
            {Markers}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Gathering">
          <LayerGroup>
            {Markers}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      
    </MapContainer>
  )
}

export async function getStaticProps(lang: string){
  const res: Response = await fetch('./ngs/marker_'+lang+'.json');
  const data: JSON = await res.json();

  return ({
    props: data
  });
}