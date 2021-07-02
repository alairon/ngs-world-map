import { Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import PopupContent from '../dialog/DatapodDialog';
import { useRouter } from 'next/router';


export default function Containers(datapods: any): JSX.Element{
  const { locale } = useRouter();
  const localeStrings: Object = {
    en: {
      title: "Collectibles",
      datapod: "Datapod"
    },
    jp: {
      title: "コレクタブル",
      datapod: "メッセージパック"
    }
  }

  const datapodIcon: Icon = new Icon({iconUrl: '../ngs/markers/icons/datapod.svg', iconSize: [15, 15]});

  console.log(datapods.data[0]);
  const Markers: JSX.Element = datapods.data[0].datapod.coordinates.map((coord: any, idx: number) => {
    return(
      <Marker key={'data'+(idx)} position={[coord.lat, coord.lng]} icon={datapodIcon}>
        <Popup className={"NGSPopup"}>
          <PopupContent title={localeStrings[locale].title} name={localeStrings[locale].datapod} content={coord.msg || `Lat: ${coord.lat} Lng: ${coord.lng}`} reward={coord.reward} />
        </Popup>
        <Tooltip direction="top" sticky>{localeStrings[locale].datapod}</Tooltip>
      </Marker>
    );
  });

  return (Markers);
}
