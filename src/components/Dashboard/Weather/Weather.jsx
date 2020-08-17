import React, { Component } from 'react';
import styles from "./Weather.module.scss";

class Weather extends Component {
  state = { 
    weather: '',
    temp: null,
    location: ''
   }

  getWeather = () => {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=d0a10211ea3d36b0a6423a104782130e')
    .then (response => response.json())
    .then (weatherObj => 
    this.setState({
      weather: weatherObj.weather[0].main,
      temp: weatherObj.main.temp,
      location: weatherObj.name
    })) 
    .catch(error => console.log(error))  
  }

  componentDidMount() {
    this.getWeather();
  }

  weatherIcon = () => {
    if (this.weather === 'Clouds') {
      return <img className={styles.icon} src={require('../../../assets/Clouds_icon.png')} alt={'cloud'}/>
    } else if (this.weather === 'Rain') {
      return <img className={styles.icon} src={require('../../../assets/Rain_icon.png')} alt={'rain'}/>
    } else {
        return <img className={styles.icon} src={require('../../../assets/Sun_icon.png')} alt={'sun'}/> 
    }
  }

  tempConvert = () => {
     return parseInt(this.state.temp)
  }

  render() { 
    const {title} =this.props
    return ( 
    <>
      <div className={styles.titleBar}>
        <p className={styles.title}>{title}</p>
      </div>
      <section className={styles.thumbNail}>
        {this.weatherIcon()}   
        <span className={styles.temp}>{this.tempConvert()}°C</span>
        <span className={styles.location}>{this.state.location}</span>
      </section>    
    </>
    );
  }
}
 
export default Weather;




