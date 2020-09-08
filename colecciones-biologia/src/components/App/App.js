import React from "react";
import { Provider } from "react-redux";
//import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "../../store";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import Search from "../Search/search";
import "./App.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Search />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
