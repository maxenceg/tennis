import React, { Component } from "react";
import "./App.css";
import Club from "./components/Club";
import styles from "./App.style";
import EditionMenu from "./components/EditionMenu";
import { Provider } from "react-redux";
import configureStore from "./store/tennisStore";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={styles.appContainer}>
          <Club />
          <EditionMenu />
        </div>
      </Provider>
    );
  }
}

export default App;
