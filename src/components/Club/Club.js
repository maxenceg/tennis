import React, { Component } from "react";
import TennisCourt from "../TennisCourt";
import styles from "./Club.style";

class Club extends Component {
  render() {
    return (
      <div style={styles.courtExt}>
        <TennisCourt
          draggable="true"
          tennisCourtSize={this.props.tennisCourtSize}
          rotation="10"
        />
        <TennisCourt
          draggable="true"
          tennisCourtSize={this.props.tennisCourtSize}
          rotation="10"
        />
        <TennisCourt
          draggable="true"
          tennisCourtSize={this.props.tennisCourtSize}
          rotation="10"
        />
        <TennisCourt
          draggable="true"
          tennisCourtSize={this.props.tennisCourtSize}
          rotation="10"
        />
      </div>
    );
  }
}

export default Club;
