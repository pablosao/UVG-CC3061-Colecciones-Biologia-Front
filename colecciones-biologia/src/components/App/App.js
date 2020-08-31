import React from "react";
import "./App.css";
import styles from './App.css';
import Buscar from '../Buscar';

function App() {
  return (
  <div className="App">
    <div className={`container-fluid px-0 ${styles.app}`}>
        <Buscar />
      </div>
  </div>)
}

export default App;
