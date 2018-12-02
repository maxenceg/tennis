import React, { Component } from "react";
import styles from "./TennisCourt.style";

class TennisCourt extends Component {
  render() {
    return (
      <div
        style={{
          ...styles.wholeCourt,
          transform: `rotate(${this.props.rotation}deg)`
        }}
      >
        <div style={styles.northAlley} />
        <div style={styles.northBackPart} />
        <div style={styles.northAlley} />
        <div style={styles.serviceBox} />
        <div style={styles.serviceBox} />
        <div style={styles.southWestAlley} />
        <div style={styles.serviceBox} />
        <div style={styles.serviceBox} />
        <div style={styles.southEastAlley} />
        <div style={styles.southBackPart} />
      </div>
    );
  }
}

export default TennisCourt;
