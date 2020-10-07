import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.scss";

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

var $body = (`body`);
var $progressBar = ("progress");
var $animContainer = (".animation-container");
var value = 0;
var transitionEnd = "webkitTransitionEnd transitionend";

/**
 * Resets the form back to the default state.
 * ==========================================
 */
function formReset() {
	value = 0;
	$progressBar.val(value);
	("form input").not("button").val("").removeClass("hasInput");
	(".js-form-step").removeClass("left leaving");
	(".js-form-step")
		.not('.js-form-step[data-step="1"]')
		.addClass("hidden waiting");
	('.js-form-step[data-step="1"]').removeClass("hidden");
	(".form-progress-indicator").not(".one").removeClass("active");

	$animContainer.css({
		paddingBottom: ('.js-form-step[data-step="1"]').height() + "px"
	});

	console.warn("Form reset.");
	return false;
}

/**
 * Sets up the click handlers on the form. Next/reset.
 * ===================================================
 */
function setupClickHandlers() {
	// Show next form on continue click
	('button[type="submit"]').on("click", function (event) {
		event.preventDefault();
		var $currentForm = (this).parents(".js-form-step");
		showNextForm($currentForm);
	});

	// Reset form on reset button click
	(".js-reset").on("click", function () {
		formReset();
	});

	return false;
}

/**
 * Shows the next form.
 * @param - Node - The current form.
 * ======================================
 */
function showNextForm($currentForm) {
	var currentFormStep = parseInt($currentForm.attr("data-step")) || false;
	var $nextForm = ('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');

	console.log("Current step is " + currentFormStep);
	console.log("The next form is # " + $nextForm.attr("data-step"));

	$body.addClass("freeze");

	// Ensure top of form is in view
	("html, body").animate(
		{
			scrollTop: $progressBar.offset().top
		},
		"fast"
	);

	// Hide current form fields
	$currentForm.addClass("leaving");
	setTimeout(function () {
		$currentForm.addClass("hidden");
	}, 500);

	// Animate container to height of form
	$animContainer.css({
		paddingBottom: $nextForm.height() + "px"
	});

	// Show next form fields
	$nextForm
		.removeClass("hidden")
		.addClass("coming")
		.one(transitionEnd, function () {
			$nextForm.removeClass("coming waiting");
		});

	// Increment value (based on 4 steps 0 - 100)
	value += 33;

	// Reset if we've reached the end
	if (value >= 100) {
		formReset();
	} else {
		(".form-progress")
			.find(".form-progress-indicator.active")
			.next(".form-progress-indicator")
			.addClass("active");

		// Set progress bar to the next value
		$progressBar.val(value);
	}

	// Update hidden progress descriptor (for a11y)
	(".js-form-progress-completion").html($progressBar.val() + "% complete");

	$body.removeClass("freeze");

	return false;
}

/**
 * Sets up and handles the float labels on the inputs.
 =====================================================
 */
function setupFloatLabels() {
	// Check the inputs to see if we should keep the label floating or not
	("form input")
		.not("button")
		.on("blur", function () {
			// Different validation for different inputs
			switch (this.tagName) {
				case "SELECT":
					if (this.value > 0) {
						this.className = "hasInput";
					} else {
						this.className = "";
					}
					break;

				case "INPUT":
					if (this.value !== "") {
						this.className = "hasInput";
					} else {
						this.className = "";
					}
					break;

				default:
					break;
			}
		});

	return false;
}

/**
 * Gets the party started.
 * =======================
 */
function init() {
	/*formReset();
	setupFloatLabels();
	setupClickHandlers();*/
}

init();




export default NewEspecie;