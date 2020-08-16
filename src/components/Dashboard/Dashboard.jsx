import React, { Component } from 'react';
import styles from "./Dashboard.module.scss";
import Weather from './ThumbNail/Weather/Weather';
import News from './ThumbNail/News/News';
import Sport from './ThumbNail/Sport/Sport';
import Photos from './ThumbNail/Photos/Photos';
import Tasks from './ThumbNail/Tasks/Tasks';
import Clothes from './ThumbNail/Clothes/Clothes';

class Dashboard extends Component {
  state = {
    clothes: [],
    clothesCount: [],
    percentJumper: null, 
    percentHoodie: null, 
    percentJacket: null, 
    percentSweater: null, 
    percentBlazer: null, 
    percentRaincoat: null
  }

  componentDidMount() {
    this.getClothes()
    this.UpdatePercents()
  };

  showUser = () =>{
    const {user} = this.props; 
    if (user) {
        return (
        <p className={styles.userName}>{user.name}</p>
        );
      }
  }
  
  getClothes = () =>  {
    return fetch('https://cors-anywhere.herokuapp.com/https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil')
    .then (response => response.json())
    .then (clothesObj => 
      this.setState({clothes: clothesObj.payload}))
    .catch(error => console.log(error))  
  };

  clothesCount = () => this.state.clothes.length;
  jumperCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'jumper').length;
  hoodieCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'hoodie').length;
  jacketCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'jacket').length;
  sweaterCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'sweater').length;
  blazerCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'blazer').length;
  raincoatCount = () => this.state.clothes.filter(clothe => clothe.clothe === 'raincoat').length;

  calculatePercent = (total, number) => (number / total) * 100;

  UpdatePercents =  () => {
    this.setState({
      clothesCount: this.clothesCount(),
      percentJumper: this.calculatePercent(this.clothesCount(), this.jumperCount()),
      percentHoodie: this.calculatePercent(this.clothesCount(), this.hoodieCount()),
      percentJacket: this.calculatePercent(this.clothesCount(), this.jacketCount()),
      percentSweater: this.calculatePercent(this.clothesCount(), this.sweaterCount()),
      percentBlazer: this.calculatePercent(this.clothesCount(), this.blazerCount()),
      percentRaincoat: this.calculatePercent(this.clothesCount(), this.raincoatCount())
    }) 
  }

  render() { 
    const { clothesCount, percentJumper, percentHoodie, percentJacket, percentSweater, percentBlazer , percentRaincoat} = this.state
    const {headline, text} = this.props
    return ( 
      <section className={styles.dashBoard}>
          {this.showUser()}
          <div className={styles.thumb}><Weather title={'Weather'}/></div>
          <div className={styles.thumb}><News title={'News'} headline={headline} text={text}/></div>
          <div className={styles.thumb}><Sport title={'Sport'}/></div>
          <div className={styles.thumb}><Photos title={'Photos'}/></div>
          <div className={styles.thumb}><Tasks title={'Tasks'}/></div>
          <div className={styles.thumb} ><Clothes title={'Clothes'}
                                            clothesCount={clothesCount} 
                                            percentJumper={percentJumper} 
                                            percenthoodie={percentHoodie} 
                                            percentjacket={percentJacket}
                                            percentSweater={percentSweater} 
                                            percentBlazer={percentBlazer} 
                                            percentRaincoat={percentRaincoat}/>
                                          </div>
        </section>
    );
  }
}
 
export default Dashboard;
