import React, { Component } from "react";
import styles from "./EditionMenu.style";
import CourtCard from "../CourtCard/CourtCard";

class EditionMenu extends Component {
  render() {
    return (
      <div style={styles.menuContainer}>
        <div style={styles.menuHeader}>
          <div style={styles.menuTitle}>Menu</div>
          <div>Taille des terrains : {this.props.tennisCourtSize} / 10</div>
          <input
            style={styles.slider}
            id="typeinp"
            type="range"
            min="1"
            max="10"
            step="1"
            value={this.props.tennisCourtSize}
            onChange={this.props.setTennisCourtSize}
          />
        </div>
        <div style={styles.cardsContainer}>
          <CourtCard courtType="Terre battue" courtNumber="1" />
          <CourtCard courtType="Gazon" courtNumber="2" />
        </div>
      </div>
    );
  }
}

export default EditionMenu;
