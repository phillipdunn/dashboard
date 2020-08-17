import React, { Component } from 'react';
import styles from "./Clothes.module.scss";
import { transcode } from 'buffer';


class Clothes extends Component {
  state = {  }

  calculateStrokeDash = (percentage) => (301 / 100) * percentage; // 377 is the perimeter of the charts
  
  // strokeDash={this.calculateStrokeDash(percentJumper)}

  render() { 
    const {title, clothesCount, percentJumper, percentHoodie, percentJacket, percentSweater, percentBlazer , percentRaincoat } =this.props
    return (
      <section className={styles.thumbNail}>
      <div className={styles.titleBar}>
        <div className={styles.title}>{title}</div>    
      </div>
      <svg className={styles.chart} viewBox="0 0 160 160" >
          <circle
            className={styles.percentJumper}
            style={{ strokeDasharray: `${50} 301`}}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
          <circle
            className={styles.percentHoodie}
            style={{ strokeDasharray: `${30} 301` , strokeDashoffset:`${50}` }}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
          <circle
            className={styles.percentJacket}
            style={{ strokeDasharray: `${30} 301` , strokeDashoffset:`${50}` }}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
          <circle
            className={styles.percentSweater}
            style={{ strokeDasharray: `${30} 301` , strokeDashoffset:`${20}` }}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
          <circle
            className={styles.percentBlazer}
            style={{ strokeDasharray: `${30} 301` , strokeDashoffset:`${20}` }}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
          <circle
            className={styles.percentRaincoat}
            style={{ strokeDasharray: `${30} 301` , strokeDashoffset:`${20}` }}
            r="30%"
            cx="50%"
            cy="50%"
          /> 
        </svg>
    </section> 
      );
  }
}
 
export default Clothes;
