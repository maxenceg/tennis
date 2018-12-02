import React, { Component } from "react";
import TennisCourt from "../TennisCourt/TennisCourt";
import styles from "./Club.style";

class Club extends Component {
  render() {
    return (
      <div style={styles.courtExt}>
        <TennisCourt rotation="-45" />
        <TennisCourt rotation="45" />
      </div>
    );
  }
}

export default Club;
