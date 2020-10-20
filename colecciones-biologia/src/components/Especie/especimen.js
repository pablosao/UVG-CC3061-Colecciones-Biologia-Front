import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.scss";
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';

const NewEspecie = () => {
  return (
    <div className="especimen-container">
      <section class="section">
          <h1>Formulario de Ingreso Nuevo Especimen</h1>

          <div class="form-progress">
            <progress class="form-progress-bar" min="0" max="100" value="0" step="33" aria-labelledby="form-progress-completion"></progress>
            
            <div class="form-progress-indicator one active"></div>
            <div class="form-progress-indicator two"></div>
            <div class="form-progress-indicator three"></div>
            <div class="form-progress-indicator four"></div>
            
            <p id="form-progress-completion" class="js-form-progress-completion sr-only" aria-live="polite">0% complete</p>
          </div>
          
          
          <div class="animation-container">
            
            <p class="form-instructions"><strong>Click the continue button to show form progression.</strong><br />
                Please fill out the fields below so we can learn some information about you. We promise to store these on Post-It<sup><small>TM</small></sup> notes around the office.</p>

              <form action="" name="form-step-1">
                <div class="fieldgroup">
                  <input type="text" name="codigo" id="codigo" />
                  <label for="codigo">Código</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="comun_name" id="comun_name" />
                  <label for="comun_name">Nombre Común</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="email" id="email" />
                  <label for="email">Nombre Científico</label>
                </div>
                
                <div class="buttons">
                  <div class="dropdown">
                    <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Departamento
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>

                  <div class="dropdown">
                    <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Departamento
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="postalCode" id="postalCode" />
                  <label for="postalCode">Localidad</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="postalCode" id="postalCode" />
                  <label for="postalCode">Postal code</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="postalCode" id="postalCode" />
                  <label for="postalCode">Postal code</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="postalCode" id="postalCode" />
                  <label for="postalCode">Postal code</label>
                </div>

                <div class="buttons">
                      <button type="button" class="btn btn-alt js-reset">Reset</button>

                    <button type="submit" class="btn">Continue</button>
                </div>
              </form>
            <div class="form-step js-form-step" data-step="1">
            hola
              <p class="form-instructions"><strong>Click the continue button to show form progression.</strong><br />
                Please fill out the fields below so we can learn some information about you. We promise to store these on Post-It<sup><small>TM</small></sup> notes around the office.</p>

              <form action="" name="form-step-1">
                <div class="fieldgroup">
                  <input type="text" name="firstName" id="firstName" />
                  <label for="firstName">First name</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="lastName" id="lastName" />
                  <label for="lastName">Last name</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="email" id="email" />
                  <label for="email">Email</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="postalCode" id="postalCode" />
                  <label for="postalCode">Postal code</label>
                </div>

                <div class="buttons">
                      <button type="button" class="btn btn-alt js-reset">Reset</button>

                    <button type="submit" class="btn">Continue</button>
                </div>
              </form>

            </div>
            
              <div class="form-step js-form-step waiting hidden" data-step="2">

                <p class="form-instructions"><strong>Click the continue button to show form progression.</strong>
                    <br /> Please fill in the token below with yesterday's date plus the timestamp from the day of your birth (expressed as an integer) to the power of fourteen divided by two.</p>

                <form action="" name="form-step-2">
                    <div class="fieldgroup">
                        <input type="text" name="token" id="token" />
                        <label for="token">Token</label>
                    </div>

                    <div class="buttons">
                        <button type="button" class="btn btn-alt js-reset">Reset</button>

                        <button type="submit" class="btn">Continue</button>
                    </div>
                </form>

            </div>
            
            
            
              
              <div class="form-step js-form-step waiting hidden" data-step="3">

                <p class="form-instructions"><strong>Click the continue button to show form progression.</strong>
                    <br /> Please tell us your credit card information. We promise not to store it or use it to buy a new iPhone in the App Store.</p>

                <form action="" name="form-step-3">
                    <div class="fieldgroup">
                        <input type="text" name="credit-card" id="credit-card" />
                        <label for="credit-card">Credit card number</label>
                    </div>
                  
                    <div class="fieldgroup">
                        <input type="text" name="credit-card-expiry" id="credit-card-expiry" />
                        <label for="credit-card-expiry">Credit card expiry</label>
                    </div>

                    <div class="buttons">
                        <button type="button" class="btn btn-alt js-reset">Reset</button>

                        <button type="submit" class="btn">Continue</button>
                    </div>
                </form>

            </div>
            
            
          
              <div class="form-step js-form-step waiting hidden" data-step="4">

                <p class="form-instructions"><strong>Click the continue button to show form progression.</strong>
                    <br /> Finally, please just write the words "I Agree" in the field below to consent to us using the previous data you entered to buy a new iPhone.</p>

                <form action="" name="form-step-4">
                    <div class="fieldgroup">
                        <input type="text" name="agreen" id="agreen" />
                        <label for="agreen">I agree</label>
                    </div>

                    <div class="buttons">
                        <button type="button" class="btn btn-alt js-reset">Reset</button>
                    </div>
                </form>

		        </div>
      	</div>
      </section>
    </div>
  );
};





export default NewEspecie;