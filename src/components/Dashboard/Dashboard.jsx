import React, { Component } from 'react';
import styles from "./Dashboard.module.scss";

class Dashboard extends Component {
  state = {  }
  render() { 
    
    return ( 
      <section className={styles.dashboard}>
        <p>Dashboard works</p>
        <button onClick={this.props.signOut}>signout</button>
      </section>  );
  }
}
 
export default Dashboard;
