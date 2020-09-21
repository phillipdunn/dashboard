import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import pin from "../../../../assets/house-icon.png";
import styles from "./Map.module.scss";

export default function Maps(props) {
  const [viewport, setViewport] = useState({
    latitude: props.lat,
    longitude: props.lon,
    width: "19.5vw",
    height: "24vh",
    zoom: 3,
  });

  return (
    <section>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGhpbGR1bm44MSIsImEiOiJja2VrNm8xaGIxMXBzMnFucGJpZ3l3MG1sIn0.lP80sizHYFQzs77a1Rh_8A"
        mapStyle="mapbox://styles/phildunn81/ckex07idw18c719oo1f2ly5v6" //map style/type
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }} // dragging functionality
      >
        {
          <Marker key={props.home} latitude={props.lat} longitude={props.lon}>
            <button className={styles.marker}>
              <img src={pin} alt="pin" />
            </button>
          </Marker>
        }
      </ReactMapGL>
    </section>
  );
}
