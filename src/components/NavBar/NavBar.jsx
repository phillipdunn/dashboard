import React, { Component } from 'react';
import styles from "./NavBar.module.scss";

class NavBar extends Component {
  
   render() {
     return (
       <section className={styles.navBar}>
         <button className={styles.signOut} onClick={this.props.signOut}>Sign Out</button>
       </section>
    )
  }
}
export default NavBar;