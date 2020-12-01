import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo005.png";
import * as selectors from "../../reducers";
import { connect } from "react-redux";
import "./style.css";
import { speciesSecelcted } from "../../actions/selectedSpecies";

const VistaEspecie = ({ selectedSpecies }) => {
  const style1 = {
    width: "100%",
    height: "25vh",
    backgroundImage:
      "url(https://www.picsporadic.com/wp-content/uploads/2019/03/guatemala-atitlan-150315-016-hdr-gx1_web.jpg )",
  };

  const style2 = {
    width: "100%",
    height: "25vh",
    backgroundImage:
      "url(https://blog.laminasyaceros.com/hubfs/arton15225.jpg)",
  };

  const style3 = {
    width: "100%",
    height: "25vh",
    backgroundImage:
      "url(https://www.elagoradiario.com/wp-content/uploads/2019/11/Ping%C3%BCino-emperador-1140x600.jpg )",
  };

  return (
    <div className="especimen-container">
      <section class="section">
        <h1>{selectedSpecies.common_name}</h1>
        <hr></hr>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" style={style1}>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style={style2}>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item" style={style3}>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="row">
          <div class="col col-md-8 col-sm-6">
            <div class="desc-especie">
              <br></br>
              <h1>Descripción</h1>
              <hr></hr>
              <p>{selectedSpecies.information}</p>
            </div>
          </div>
          <div class="col col-md-4 col-sm-6">
            <div class="desc-especie">
              <br></br>
              <h1>Taxonomia:</h1>
              <hr></hr>
              <p>Reino:</p>
              <p>Filo:</p>
              <p>Clase:</p>
              <p>Familia:</p>
              <p>Nombre Comun:</p>
            </div>
          </div>
          <div class="col col-md-12 col-sm-12">
            <div class="desc-especie">
              <br></br>
              <h1>Generalidades</h1>
              <hr></hr>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="desc-especie">
              <br></br>
              <p>Ubicación:</p>
              <p>Longitud:</p>
              <p>Latitud:</p>
              <p>Altitud:</p>
              <p>Fecha y Hora de recolección:</p>
              <p>Nombre de colector:</p>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="desc-especie">
              <br></br>
              <p>
                {selectedSpecies.country.description +
                  ", " +
                  selectedSpecies.departamento.description +
                  ", " +
                  selectedSpecies.municipio.description}
              </p>
              <p>{selectedSpecies.longitud}</p>
              <p>{selectedSpecies.latitud}</p>
              <p>{selectedSpecies.altitud}</p>
              <p>{selectedSpecies.date_of_collection}</p>
              <p>{selectedSpecies.colector}</p>
            </div>
          </div>
          <div class="col col-md-12 col-sm-12">
            <div class="desc-especie">
              <br></br>
              <h1>Comentarios del colector</h1>
              <hr></hr>
              <p>{selectedSpecies.collector_comments}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect((state) => ({
  selectedSpecies: selectors.getSelectedSpecies(state),
}))(VistaEspecie);
