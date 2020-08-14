import React, { Component } from 'react';
import styles from "./Dashboard.module.scss";
import Weather from './ThumbNail/Weather/Weather';
import News from './ThumbNail/News/News';
import Sport from './ThumbNail/Sport/Sport';
import Photos from './ThumbNail/Photos/Photos';
import Tasks from './ThumbNail/Tasks/Tasks';
import Clothes from './ThumbNail/Clothes/Clothes';

class Dashboard extends Component {


  render() { 
    return ( 
      <section className={styles.dashBoard}>
          <div className={styles.thumb}><Weather title={'Weather'}/></div>
          <div className={styles.thumb}><News title={'News'}/></div>
          <div className={styles.thumb}><Sport title={'Sport'}/></div>
          <div className={styles.thumb}><Photos title={'Photos'}/></div>
          <div className={styles.thumb}><Tasks title={'Tasks'}/></div>
          <div className={styles.thumb}><Clothes title={'Clothes'}/></div>
        </section>
    );
  }
}
 
export default Dashboard;
