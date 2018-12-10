import React, { Component } from "react";
import styles from "./TennisCourt.style";
import Draggable from "react-draggable";

class TennisCourt extends Component {
  render() {
    const courtHeight = 36 * this.props.tennisCourtSize;
    const courtWidth = (18 / 36) * courtHeight;
    const padding = this.props.tennisCourtSize < 7 ? 1 : 2;
    const gridGap = this.props.tennisCourtSize < 7 ? 1 : 2;
    return (
      <Draggable
        bounds="parent"
        onStart={this.props.draggable ? () => true : () => false}
      >
        <div>
          <div
            style={{
              ...styles.wholeCourt,
              padding: padding,
              gridGap: gridGap,
              height: courtHeight,
              width: courtWidth,
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
        </div>
      </Draggable>
    );
  }
}

export default TennisCourt;
