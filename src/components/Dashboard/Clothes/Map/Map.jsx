import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import pin from "../../../../assets/house-icon.png";
import styles from "./Map.module.scss";

export default function Maps(props) {
  const [viewport, setViewport] = useState({
    latitude: props.lat,
    longitude: props.lon,
    width: "21vw",
    height: "26vh",
    zoom: 6,
  });

  return (
    <section>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGhpbGR1bm44MSIsImEiOiJja2VrNm8xaGIxMXBzMnFucGJpZ3l3MG1sIn0.lP80sizHYFQzs77a1Rh_8A"
        mapStyle="mapbox://styles/phildunn81/ckfcf84nf97x219qlu3l7m7rm"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {
          <Marker latitude={props.lat} longitude={props.lon}>
            <button
              className={styles.marker}
              // onClick={(e) => setViewport(e.lngLat.lat, e.lngLat.lng, 13)}
            >
              <img src={pin} alt="pin" />
            </button>
          </Marker>
        }
      </ReactMapGL>
    </section>
  );
}
