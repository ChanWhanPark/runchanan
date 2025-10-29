import { Map as OlMap } from 'ol';

export const DEFAULT_SRID = 'EPSG:3857';
export const DEFAULT_SOURCE_SRID = 'EPSG:4326';

export type coordinate = [number, number];

export interface MapViewerProps {
  getMap: () => OlMap | null;
}

export interface MapViewerInterface {
  sourceSRID?: string; // default EPSG:4326
  initPosition?: coordinate;
}
