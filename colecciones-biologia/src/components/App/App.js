import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "../../store";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import Search from "../Search/search";
import Login from "../Login/login";
import "./App.css";
import styles from './App.css';
import Buscar from '../Buscar';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={Search} />
        <Route path="/sign-in" exact component={Login} />
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
};

export default App;
