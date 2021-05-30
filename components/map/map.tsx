import { MapContainer, ImageOverlay, GeoJSON, Marker, Popup, LayersControl, LayerGroup, AttributionControl, ZoomControl } from 'react-leaflet'
import { CRS, DivIcon, Icon, imageOverlay, LatLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';

// Move to scripts so that we can shrink the JSON sent to users
function generateHTML(header: string, text: string){
  return (<div><h1>{header}</h1><p>{text}</p></div>);
}

// Icons for landmarks
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

interface IconObject {
  ryuker: Icon,
  cocoon: Icon,
  tower: Icon,
  regionMag: Icon,
  hut?: Icon
}

const icons: IconObject = {
  ryuker: new Icon({iconUrl: './markers/icons/ryuker.svg', iconSize: [35, 35]}),
  cocoon: new Icon({iconUrl: './markers/icons/cocoon.svg', iconSize: [30, 30]}),
  tower: new Icon({iconUrl: './markers/icons/tower.svg', iconSize: [40, 40]}),
  regionMag: new Icon({iconUrl: './markers/icons/regionMag.svg', iconSize: [30, 30]})
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

function getIcon(iconID){
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

export default function Map(props){
  const Markers = props.landmarks.map((data, idx) => {
    const text = generateHTML(data.popupHeader, data.popupText);
    return (
      <Marker key={idx} position={[data.lat, data.lng]} title={data.tooltip} icon={getIcon(data.markerType)}>
        <Popup>
          {text}
        </Popup>
      </Marker>
    );
  });

  const Gathering = props.gathering.map((data, idx: number) => {
    const material: string = data.info.materialName;
    const uses: string = "Used for: " + data.info.usage;
    const popupText = generateHTML(material, uses);

    return data.coordinates.map((coord, idy: number) => {
      return(
        <Marker key={'g'+(idx*idy+idy)} position={[coord.lat, coord.lng]} title={material} icon={genericIcon(data.info.color)}>
          <Popup>
            {popupText}
          </Popup>
        </Marker>
      );
    });
  });

  function regionStyle(region){
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

  const Regions = props.regions.map((boundary, idx) => {
    return(
      <GeoJSON key={'r'+idx} data={boundary} style={regionStyle(boundary.properties.region)}>
        <Popup>
          {boundary.properties.name}
        </Popup>
      </GeoJSON>
    )
  });
  
  const imageBounds = new LatLngBounds([[0, 0], [1000, 1000]]);
  const mapBounds = new LatLngBounds([[-100, -500], [800, 1000]]);

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
      maxBounds={mapBounds}
      maxBoundsViscosity={0.5}
      attributionControl={false}
      style={{position: "absolute", height: "100%", width: "100%", backgroundColor: "#011B3C"}}
    >
      
      <AttributionControl 
        position={"bottomright"}
        prefix={"&copy; SEGA"}
      />

      <ZoomControl 
        position={"topright"}
      />

      <ImageOverlay 
        url='./halpha_release.jpg'
        bounds={imageBounds}
        attribution={`<a href="https://pso2.com" target="_blank" rel="noreferrer" style="color: inherit">PHANTASY STAR ONLINE 2 NEW GENESIS</a>`}
      />

      <LayersControl position="topright" collapsed>
        <LayersControl.BaseLayer checked name="Default">
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Landmarks">
          <LayerGroup>
            {Markers}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Gathering">
          <LayerGroup attribution="<a href='https://twitter.com/ANI_PSO2GL' target='_blank' rel='noreferrer' style='color:inherit'>@ANI_PSO2GL</a>">
            {Gathering}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Regions">
          <LayerGroup>
            {Regions}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      
    </MapContainer>
  )
}
