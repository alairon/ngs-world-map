import { MapContainer, ImageOverlay, Marker, Popup, LayersControl, LayerGroup, AttributionControl, ZoomControl } from 'react-leaflet'
import { CRS, Icon, LatLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';

function generateHTML(header: string, text: string){
  return (<div><h1>{header}</h1><p>{text}</p></div>);
}

let ryukerIcon: Icon = new Icon({
  iconUrl: './markers/icons/ryuker.svg',
  iconSize: [35, 35]
});

let cocoonIcon: Icon = new Icon({
  iconUrl: './markers/icons/cocoon.svg',
  iconSize: [30, 30]
});

let towerIcon: Icon = new Icon({
  iconUrl: './markers/icons/tower.svg',
  iconSize: [40, 40]
})

let regionMag: Icon = new Icon({
  iconUrl: './markers/icons/regionMag.svg',
  iconSize: [30, 30]
});

const gatheringIcon: Icon = new Icon({
  iconUrl: './markers/icons/gatheringIcon.svg',
  iconSize: [8, 8]
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
        return (gatheringIcon); //others
    }
  }
}

export default function Map(props){
  const Markers = props.landmarks.map((data, idx) => {
      const text = generateHTML(data.popupHeader, data.popupText);
      return (
        <Marker key={idx} position={[data.lat, data.lng]} title={data.tooltip} icon={getIcon(data.markerType)}>
          <Popup>
            {text}
          </Popup>
        </Marker>
      )
  });

  const Gathering = props.gathering.map((data, idx) => {
    const material = Object.keys(data);
    return(
      <Marker key={'g'+idx} position={[data.lat, data.lng]} title={"Gathering Point"} icon={gatheringIcon}>
        <Popup>
          GATHERING
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
            {Gathering}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      
    </MapContainer>
  )
}
