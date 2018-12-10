import React, { Component } from "react";
import styles from "./CourtCard.style";
import TennisCourt from "../TennisCourt/TennisCourt";

class CourtCard extends Component {
  render() {
    return (
      <div style={styles.cardContainer}>
        <div style={styles.courtThumbnail}>
          <TennisCourt tennisCourtSize="3" />
        </div>
        <div style={styles.courtDescription}>
          Court n° : {this.props.courtNumber}
          <br />
          Surface : {this.props.courtType}
        </div>
      </div>
    );
  }
}

export default CourtCard;
