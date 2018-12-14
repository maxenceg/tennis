import React, { Component } from "react";
import "./App.css";
import Club from "./components/Club";
import styles from "./App.style";
import EditionMenu from "./components/EditionMenu";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import configureStore from "./store/tennisStore";
import fr from "react-intl/locale-data/fr";
import { IntlProvider, addLocaleData } from "react-intl";
import frTranslations from "./translations/fr.json";

const flattenMessages = (nestedMessages, prefix) =>
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value; // eslint-disable-line
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});

const locales = {
  fr: flattenMessages(frTranslations)
};

addLocaleData([...fr]);

const store = configureStore();
class App extends Component {
  render() {
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
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
      </IntlProvider>
    );
  }
}

export default App;
