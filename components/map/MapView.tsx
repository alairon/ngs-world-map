import { MapContainer, ImageOverlay, LayersControl, LayerGroup, AttributionControl, ZoomControl, TileLayer, FeatureGroup } from 'react-leaflet'
import { CRS, LatLngBounds } from 'leaflet';
import Landmarks from './layers/Landmarks';
import Gathering from './layers/Gathering';
import Regions from './layers/Regions';
import Caves from './layers/Caves';
import Containers from './layers/Containers';
import Bosses from './layers/VetEnemy';
import EmergencyQuests from './layers/EmergencyQuests';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
import { useRouter } from 'next/router';

export default function Map(props): JSX.Element{  
  const {locale} = useRouter();
  const imageBounds: LatLngBounds = new LatLngBounds([[0, 0], [1000, 1000]]);
  const mapBounds: LatLngBounds = new LatLngBounds([[-100, -500], [800, 1000]]);

  const localeStrings = {
    "en": {
      "continent": "Halpha",
      "caves": "Caves",
      "landmarks": "Landmarks",
      "gathering": "Gathering",
      "containers": "Containers",
      "regions": "Regions",
      "bosses": "Rare Enemies",
      "emergencyQuests": "Urgent Quests",
      "attribution": `<a href="https://ngs.pso2.com" target="_blank" rel="noreferrer" style="color: inherit">PHANTASY STAR ONLINE 2 NEW GENESIS</a>`
    },
    "jp": {
      "continent": "ハルファ",
      "caves": "洞窟",
      "landmarks": "Landmarks",
      "gathering": "ギャザリング",
      "containers": "アイテムコンテナ",
      "regions": "リージョン",
      "bosses": "レアエネミー",
      "emergencyQuests": "緊急クエスト",
      "attribution": `<a href="https://pso2.jp" target="_blank" rel="noreferrer" style="color: inherit">PHANTASY STAR ONLINE 2 NEW GENESIS</a>`
    }
  }

  return (
    <MapContainer 
      id={"ngs-halpha"}
      crs={CRS.Simple}
      center={[326,294] /*Central City*/}
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
      closePopupOnClick={true}
    >
      
      <AttributionControl 
        position={"bottomright"}
        prefix={"&copy; SEGA"}
      />

      <ZoomControl 
        position={"bottomright"}
      />

      {/* Layers */}
      <LayersControl position="topright" collapsed>
        <LayersControl.BaseLayer checked name={localeStrings[locale].continent}>
          <ImageOverlay 
            url='../../ngs/halpha_release.webp'
            bounds={imageBounds}
            attribution={localeStrings[locale].attribution}
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name={localeStrings[locale].landmarks}>
          <LayerGroup>
            <Landmarks data={props.landmarks} />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].caves}>
          <LayerGroup attribution={"Rappy Burst"}>
            <Caves data={props.caves} />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].gathering}>
          <LayerGroup attribution={"Rappy Burst"}>
            <Gathering data={props.gathering} />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].containers}>
          <LayerGroup attribution={"Rappy Burst"}>
            <Containers data={props.containers} />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].bosses}>
          <LayerGroup>
            <Bosses data={props.bosses} />
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].emergencyQuests}>
          <LayerGroup>
            <EmergencyQuests data={props.emergencyQuests}/>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={localeStrings[locale].regions}>
          <LayerGroup>
            <Regions data={props.regions} />
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  )
}
