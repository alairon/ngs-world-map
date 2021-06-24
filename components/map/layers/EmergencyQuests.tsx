import { Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import PopupContent from '../dialog/ContentDialog';
import PopupBody from '../dialog/EmergencyQuestDialog';
import { useRouter } from 'next/router';

const emergencyQuestIcon: Icon = new Icon({iconUrl: '../ngs/markers/icons/emergencyQuest.svg', iconSize: [37, 37]});

export default function EmergencyQuests(quests: any){
  const { locale } = useRouter();

  const localeStrings = {
    "en": "Urgent Quest",
    "jp": "緊急クエスト"
  }

  const Markers: JSX.Element = quests.data.map((quest, idx: number) => {
    const content = PopupBody(quest);
    return(
      <Marker key={'eq'+idx} position={[quest.lat, quest.lng]} title={quest.name} icon={emergencyQuestIcon}>
        <Popup className={"NGSPopup"}>
          <PopupContent title={localeStrings[locale]} content={content}></PopupContent>
        </Popup>
        <Tooltip direction="top" sticky>{quest.name}</Tooltip>
      </Marker>
    )
  });

  return Markers;
}
