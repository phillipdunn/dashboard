import React, { Component } from 'react';
import styles from "./Dashboard.module.scss";
import NavBar from '../NavBar/NavBar';
import Weather from './ThumbNail/Weather/Weather';
import News from './ThumbNail/News/News';
import Sport from './ThumbNail/Sport/Sport';
import Photos from './ThumbNail/Photos/Photos';
import Tasks from './ThumbNail/Tasks/Tasks';
import Clothes from './ThumbNail/Clothes/Clothes';

class Dashboard extends Component {


  render() { 
    const {signOut} = this.props;
    return ( 
      <section className={styles.dashBoard}>
        <NavBar signOut={signOut} />
        <section className={styles.thumbWrap}>
          <p><Weather title={'Weather'}/></p>
          <p><News title={'News'}/></p>
          <p><Sport title={'Sport'}/></p>
          <p><Photos title={'Photos'}/></p>
          <p><Tasks title={'Tasks'}/></p>
          <p><Clothes title={'Clothes'}/></p>
        </section>
      </section>  
    );
  }
}
 
export default Dashboard;
