import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "../../store";
import NavBar from "../NavBar/navBar";
import "./App.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
      </div>
    </Provider>
  );
};

export default App;
