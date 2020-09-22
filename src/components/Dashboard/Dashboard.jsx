import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import Weather from "./Weather";
import News from "./News";
import Sport from "./Sport";
import Photos from "./Photos";
import Tasks from "./Tasks";
import Clothes from "./Clothes";
import { Link } from "@reach/router";

class Dashboard extends Component {
  state = {
    weather: "",
    temp: null,
    location: "",
    lat: 51.5074,
    lon: 0.1278,
  };

  showUser = () => {
    const { user } = this.props;
    if (user) {
      return <p className={styles.userName}>{user.displayName}'s Dashboard</p>;
    }
  };

  checkLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat1 = position.coords.latitude;
      const lon1 = position.coords.longitude;
      this.setState({
        lat: lat1,
        lon: lon1,
      });

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=d0a10211ea3d36b0a6423a104782130e`
      )
        .then((response) => response.json())
        .then((weatherObj) =>
          this.setState({
            weather: weatherObj.weather[0].main,
            temp: weatherObj.main.temp,
            location: weatherObj.name,
          })
        )
        .catch((error) => console.log(error));
    });
  };

  componentDidMount() {
    this.checkLocation();
  }

  render() {
    const { headline, text } = this.props;
    return (
      <section className={styles.dashBoard}>
        <div className={styles.welcome}>{this.showUser()}</div>
        <div className={styles.thumb}>
          <Weather
            title={"Weather"}
            location={this.state.location}
            temp={this.state.temp}
            weather={this.state.weather}
          />
        </div>
        <Link to={"/photopage"} className={styles.thumb}>
          <Photos title={"Photos"} />
        </Link>
        <Link to={"/sportpage"} className={styles.thumb}>
          <Sport title={"Sport"} />
        </Link>
        <Link to={"/newspage"} className={styles.thumb}>
          <News title={"News"} headline={headline} text={text} />
        </Link>
        <Link to={"/taskpage"} className={styles.thumb}>
          <Tasks
            title={"Tasks"}
            tasks={this.props.tasks}
            addTask={this.props.addTask}
          />
        </Link>
        <div className={styles.thumb}>
          <Clothes title={"Map"} lat={this.state.lat} lon={this.state.lon} />
        </div>
      </section>
    );
  }
}

export default Dashboard;
