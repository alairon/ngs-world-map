import type { Icon } from 'leaflet';

// TS Interface for Icons
export interface IconObject {
  ryuker: Icon,
  cocoon: Icon,
  tower: Icon,
  regionMag: Icon,
  hut?: Icon
}

export interface GenericMarkerConfig {
  color: string,
  weight: number,
  opacity: number
}

export interface LandmarkObject_L1{
  lat: number,
  lng: number,
  markerType: number,
  area: string,
  region?: string,
  tooltip: string,
  popupHeader: string,
  popupText: string
}
