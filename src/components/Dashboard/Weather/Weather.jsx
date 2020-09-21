import React, { Component } from "react";
import styles from "./Weather.module.scss";

class Weather extends Component {
  state = {};

  weatherIcon = () => {
    if (this.props.weather === "Clouds") {
      return (
        <img
          className={styles.icon}
          src={require("../../../assets/Clouds_icon.png")}
          alt={"cloud"}
        />
      );
    } else if (this.props.weather === "Rain") {
      return (
        <img
          className={styles.icon}
          src={require("../../../assets/Rain_icon.png")}
          alt={"rain"}
        />
      );
    } else {
      return (
        <img
          className={styles.icon}
          src={require("../../../assets/Sun_icon.png")}
          alt={"sun"}
        />
      );
    }
  };

  tempConvert = () => {
    return parseInt(this.props.temp);
  };

  render() {
    const { title, location } = this.props;
    return (
      <>
        <div className={styles.titleBar}>
          <p className={styles.title}>{title}</p>
        </div>
        <section className={styles.thumbNail}>
          {this.weatherIcon()}
          <span className={styles.temp}>{this.tempConvert()}°C</span>
          <span className={styles.location}>{location}</span>
        </section>
      </>
    );
  }
}

export default Weather;
