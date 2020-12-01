import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "../../store";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import Search from "../Search/search";
import Login from "../Login/login";
import About from "../AcercaDe/about";
import NewEspecie from "../Especie/especimen";
import Admin from "../Admin/admin";
import VistaEspecie from "../VistaEspecie/vistaEspecie";
import Departamento from "../Departamento/departamento";
import "./App.css";
import styles from "./App.css";

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/" component={NavBar} />
          <Route path="/about-us" component={About} />
          <Route path="/formulario" component={NewEspecie} />
          <Route path="/" exact component={Search} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/view-specie" component={VistaEspecie} />
          <Route path="/deparamento" component={Departamento} />
          <Route path="/" component={Footer} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
