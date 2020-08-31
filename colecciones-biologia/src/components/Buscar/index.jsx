import React, { Component } from 'react';
/*import { Link } from 'react-scroll';
import {
  Link as RouterLink,
} from 'react-router-dom';*/
import styles from './buscar.module.css';

class Buscar extends Component {
  render() {
    return (
      <div className={styles.buscar}>
        <div className="col-lg-4 col-md-12">
          <div className={styles.navbar}>
            ola
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className={styles.navbar}>
            ola
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="../../assets/busqueda/bugs.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../assets/busqueda/bugs.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../assets/busqueda/bugs.jpg" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Buscar;
