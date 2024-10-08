// import MapboxLanguage from '@mapbox/mapbox-gl-language';
import React from 'react';
import Map, { Layer, Source, FullscreenControl } from 'react-map-gl';
import useActivities from 'src/hooks/useActivities';
import {
  IS_CHINESE,
  MAIN_COLOR,
  MAPBOX_TOKEN,
  PROVINCE_FILL_COLOR,
  USE_DASH_LINE,
  LINE_OPACITY,
} from 'src/utils/const';
import { geoJsonForMap } from 'src/utils/utils';
import RunMarker from './RunMaker';
import RunMapButtons from './RunMapButtons';
import * as styles from './style.module.scss';

const RunMap = ({
  title,
  viewport,
  setViewport,
  changeYear,
  geoData,
  thisYear,
  mapButtonYear,
}) => {
  const { provinces } = useActivities();
  const addControlHandler = (event) => {
    const map = event && event.target;
    // set lauguage to Chinese if you use English please comment it
    // if (map && IS_CHINESE) {
    //   map.addControl(
    //     new MapboxLanguage({
    //       defaultLanguage: 'zh',
    //     })
    //   );
    //   map.setLayoutProperty('country-label-lg', 'text-field', [
    //     'get',
    //     'name_zh',
    //   ]);
    // }
  };
  const filterProvinces = provinces.slice();
  // for geojson format
  filterProvinces.unshift('in', 'name');

  const isBigMap = viewport.zoom <= 5;
  if (isBigMap) {
    geoData = geoJsonForMap();
  }

  const isSingleRun =
    geoData.features.length === 1 &&
    geoData.features[0].geometry.coordinates.length;
  let startLon;
  let startLat;
  let endLon;
  let endLat;
  if (isSingleRun) {
    const points = geoData.features[0].geometry.coordinates;
    [startLon, startLat] = points[0];
    [endLon, endLat] = points[points.length - 1];
  }
  let dash = USE_DASH_LINE && !isSingleRun ? [1, 2] : [2, 0];
  // </Map>
  return (
    <Map
      {...viewport}
      // className='vh-50 vh-100-l'
      height={'68vh'}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      onViewportChange={(e) => {
        const newViewport = {...viewport};
        newViewport.latitude = e.latitude;
        newViewport.longitude = e.longitude;
        newViewport.zoom = e.zoom;
        setViewport(newViewport);
      }}
      onLoad={addControlHandler}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <RunMapButtons
        changeYear={changeYear}
        thisYear={thisYear}
        mapButtonYear={mapButtonYear}
      />
      <FullscreenControl className={styles.fullscreenButton} />
      <Source id="data" type="geojson" data={geoData}>
        <Layer
          id="prvince"
          type="fill"
          paint={{
            'fill-color': PROVINCE_FILL_COLOR,
          }}
          filter={filterProvinces}
        />
        <Layer
          id="runs2"
          type="line"
          paint={{
            'line-color': MAIN_COLOR,
            'line-width': isBigMap ? 1 : 2,
            'line-dasharray': dash,
            'line-opacity': isSingleRun ? 1 : LINE_OPACITY,
          }}
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
        />
      </Source>
      {isSingleRun && (
        <RunMarker
          startLat={startLat}
          startLon={startLon}
          endLat={endLat}
          endLon={endLon}
        />
      )}
      <span className={styles.runTitle}>{title}</span>
    </Map>
  );
};

export default RunMap;
