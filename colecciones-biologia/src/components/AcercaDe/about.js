import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.css";




const About = () => {
  const style1 = {
      width: "100%",
      height: "85vh",
      backgroundImage: "url(https://www.picsporadic.com/wp-content/uploads/2019/03/guatemala-atitlan-150315-016-hdr-gx1_web.jpg )"
  }

  const style2 = {
    width: "100%",
    height: "85vh",
    backgroundImage: "url(https://blog.laminasyaceros.com/hubfs/arton15225.jpg)"
}

const style3 = {
  width: "100%",
  height: "85vh",
  backgroundImage: "url(https://www.elagoradiario.com/wp-content/uploads/2019/11/Ping%C3%BCino-emperador-1140x600.jpg )"
}



  return (
    <div class='about-page'>
       
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      
      <div class="carousel-item active" style={style1}  >
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item"   style={style2}>
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      
      <div class="carousel-item"  style={style3}>
        <div class="carousel-caption d-none d-md-block">
        </div>
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
<div class='row'>
  <div class='col col-md-1 col-sm-1'>
  </div>
  <div class='col col-md-4 col-sm-11'>
    <div class='texto-left'>
      <h2>Colecciones Biologia</h2>
      <hr></hr>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
      <br></br>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
    </div>
  </div>
  <div class=' d-none col-xs-3 col-sm-3'>
  </div>
  <div class='col col-md-6 col-sm-11'>
  <div class='texto-right'>
      <iframe width="600" height="315" src="https://www.youtube.com/embed/Sp3YlWqjyqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      <hr></hr>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
      <br></br>
  <br></br>
    </div>
  </div>
 
  
</div>


<div class='row'>
  <br></br>
  <div class='col col-md-1'/>
  <div class='col col-md-10'>
    <h1>Contacto</h1>
      <hr></hr>
  </div>
  <div class='col col-md-1'/>
  
  <div class='col col-md-2'>
  </div>
  <div class='col col-md-4'>
    <div class='texto-left'>
      <h2>Gabriela Alfaro</h2>
      <hr></hr>
      <h5>Tel:</h5>
      <h5>Email:</h5>
      <h5>Oficina:</h5>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
      </div>
  </div>
  <div class='col col-md-4 '>
  <div class='texto-right'>
    <h2>Zabdy Moises</h2>
    <hr></hr>
      <h5>Tel:</h5>
      <h5>Email:</h5>
      <h5>Oficina:</h5>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
      
    </div>
  </div>
  <div class='col col-md-2'>
  </div>
</div>
</div>
    
   
  );
};

export default About;