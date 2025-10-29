import * as React from 'react';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

import { DEFAULT_SRID, MapViewerProps, MapViewerInterface } from '@Common/map-viewer-type';

const MapViewer = React.forwardRef<MapViewerProps, MapViewerInterface>(() => {
  const ref_canvas = React.useRef<HTMLDivElement>(null);
  const ref_mainMap = React.useRef<OlMap | null>(null);
  

  React.useEffect(() => {
    InitMapObject();
  }, []);

  const InitMapObject = () => {
    ref_mainMap.current = new OlMap({
      target: 'map_viewer',
      layers: [
        new TileLayer({ source: new OSM(), }),
      ],
      view: new View({
        projection: DEFAULT_SRID,
        center: [0, 0],
        zoom: 2
      }),
    });
  }

  return <div ref={ref_canvas} id="map_viewer" style={{ width: '100%', height: '100vh' }} />
});

export default MapViewer;