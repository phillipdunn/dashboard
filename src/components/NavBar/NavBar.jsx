import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    navOpen: false,
  };

  get navItems() {
    return [
      // {
      //   title: "NewsPage",
      //   link: "/newspage",
      // },
      // {
      //   title: "PhotoPage",
      //   link: "/photopage",
      // },
      // {
      //   title: "TaskPage",
      //   link: "/taskpage",
      // },
      // {
      //   title: "SportPage",
      //   link: "/sportpage",
      // },
      {
        title: "Dashboard",
        link: "/dashboard",
      },
    ];
  }

  renderNav = () => {
    return this.navItems.map((item, index) => {
      const { signOut } = this.props;
      return (
        <Link key={index} to={item.link}>
          <h3 onClick={item.title === "Logout" ? signOut : null}>
            {item.title}
          </h3>
        </Link>
      );
    });
  };

  render() {
    return (
      <>
        <nav className={styles.navBar}>
          <div className={styles.menu}>{this.renderNav()}</div>
          <button className={styles.signOut} onClick={this.props.signOut}>
            Sign Out
          </button>
        </nav>
      </>
    );
  }
}
export default NavBar;
