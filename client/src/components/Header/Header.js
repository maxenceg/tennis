import React, { Component } from "react";
import styles from "./Header.style";

class Header extends Component {
  render() {
    return <div style={styles.headerTab}>{"Créer mon club".toUpperCase()}</div>;
  }
}

export default Header;
