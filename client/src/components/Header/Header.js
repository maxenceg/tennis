import React, { Component } from "react";
import styles from "./Header.style";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  render() {
    return (
      <div style={styles.headerTab}>
        <FormattedMessage id="header.create-club" />
      </div>
    );
  }
}

export default Header;
