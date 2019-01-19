import React from "react";
import { Provider } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import createStore from "~/services/createStore";

import Content from "../../Content";
import styles from "./styles";

const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};

export default withStyles(styles)(App);
