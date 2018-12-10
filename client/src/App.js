import React, { Component } from "react";
import "./App.css";
import Club from "./components/Club";
import styles from "./App.style";
import EditionMenu from "./components/EditionMenu";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import configureStore from "./store/tennisStore";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={styles.appContainer}>
          <div style={styles.headerContainer}>
            <Header />
          </div>
          <div style={styles.pageContainer}>
            <div style={styles.clubContainer}>
              <Club />
            </div>
            <div style={styles.editionMenuContainer}>
              <EditionMenu />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
