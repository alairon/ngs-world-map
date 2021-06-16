import {Marker, Tooltip} from 'react-leaflet';

function CreateTooltip(text: string, regionFlag: number){
  if (regionFlag){
    return (<Tooltip className="NGSAreaLabel __main" offset={[0,0]} permanent>{text}</Tooltip>)
  }
  return (<Tooltip className="NSGAreaLabel __sub" offset={[0,0]}  permanent>{text}</Tooltip>)
}

export default function Label(labels: any){
  const sections = Object.keys(labels.data);
  const Markers = sections.map((label) => {
    const labelObject = labels.data[label];
    return(labelObject.map((markerLocation, idx) => {
      console.log(labelObject);
      return(
        <div>
          <Marker key={idx} position={[labels.data[label][idx].coordinates.lat, labels.data[label][idx].coordinates.lng]} title={labels.data[label][idx].name} opacity={0.01} >{labels.data[label][idx].name}</Marker>
        </div>
      )
    }));
  });
  return(Markers);
}