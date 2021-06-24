import { Marker, Popup, Tooltip } from 'react-leaflet';
import PopupContent from '../dialog/ContentDialog';
import BossDialog from '../dialog/BossDialog';
import {useRouter} from 'next/router';
import { Icon } from 'leaflet';


export default function VeteranEnemy(bosses: any){
  const {locale} = useRouter();
  
  const localeStrings = {
    "en": {
      title: "Rare Enemy"
    },
    "jp": {
      "title": "レアエネミー"
    }
  }

  const icon: Icon = new Icon({iconUrl: '../ngs/markers/icons/enemy.svg', iconSize: [30, 30]});

  const keys = Object.keys(bosses.data);
  //@ts-expect-error
  const Markers: JSX.Element = keys.map((bossType: any, idx: number) => {
    return bosses.data[bossType].map((boss, idy) => {
      return(
        <Marker key={'vet'+idx*idy+idy} position={[boss.lat, boss.lng]} title={boss.name} icon={icon}>
          <Popup className={"NGSPopup"}>
            <PopupContent title={localeStrings[locale].title} contentHeader={boss.name} description={boss.description} content={BossDialog(boss)}></PopupContent>
          </Popup>
          <Tooltip direction="top" sticky>{boss.name}</Tooltip>
        </Marker>
      )
    });
  });

  return(Markers);
}