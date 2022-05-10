import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./components/players";

const App = () => {
  <Provider store={store}>
    <main>
      <h1>FIFA</h1>
      <Players />
    </main>
  </Provider>;
};

export default App;
