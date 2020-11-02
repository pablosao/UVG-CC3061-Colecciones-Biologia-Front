import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.css";




const About = () => {
  const style1 = {
      width: "100%",
      height: "400px",
      backgroundImage: "url(https://www.picsporadic.com/wp-content/uploads/2019/03/guatemala-atitlan-150315-016-hdr-gx1_web.jpg )"
  }

  const style2 = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(https://blog.laminasyaceros.com/hubfs/arton15225.jpg)"
}

const style3 = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(https://www.elagoradiario.com/wp-content/uploads/2019/11/Ping%C3%BCino-emperador-1140x600.jpg )"
}



  return (
    <div>
       <header>
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
</header>
      
 

      <div class="container">
      
        <div class="about">

          <div class="left">
            <br></br>
            <h1>About us</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      
        </div>
          <div class="right">
            <img src="https://www.picsporadic.com/wp-content/uploads/2019/03/guatemala-atitlan-150315-016-hdr-gx1_web.jpg"/>
            </div>
          <div class="clear"></div>
        </div>

        

    
      </div>
    </div>
    
   
  );
};

export default About;