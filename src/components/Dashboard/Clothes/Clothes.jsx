import React, { Component } from "react";
import styles from "./Clothes.module.scss";
import Map from "./Map/Map";

class Clothes extends Component {
  state = {};

  render() {
    const { title, lat, lon } = this.props;
    return (
      <section className={styles.thumbNail}>
        <div className={styles.titleBar}>
          <div className={styles.title}>{title}</div>
        </div>
        <Map lat={lat} lon={lon} />
      </section>
    );
  }
}

export default Clothes;
