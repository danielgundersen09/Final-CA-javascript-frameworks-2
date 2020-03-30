import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>Contact us Form</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>Name: </p>
            <input type="text" name="firstName" id="firstName" />
            <span className="error" id="firstNameError">
              This field cannot be blank
            </span>
          </div>
          <div className="col-sm-12">
            <p>Last Name: </p>
            <input type="text" name="lastName" id="lastName" />
            <span className="error" id="lastNameError">
              This field cannot be blank
            </span>
          </div>
          <div className="col-sm-12">
            <p>Telephone: </p>
            <input type="text" name="phone" id="phone" />
            <span className="error" id="phoneError">
              Please enter a correct phone number
            </span>
          </div>
          <div className="col-sm-12">
            <p>Email: </p>
            <input type="text" name="email" id="email" />
            <span className="error" id="emailError">
              Please enter a correct email address
            </span>
          </div>
          <div className="col-sm-12">
            <button type="submit" id="submitContact" className="m-t-30">
              Submit <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

var submitbtn = document.getElementById("submitContact");

submitbtn.addEventListener("click", function() {
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var phoneNumber = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var fNameError = document.getElementById("firstNameError");
  var lNameError = document.getElementById("lastNameError");
  var phoneNumberError = document.getElementById("phoneError");
  var mailError = document.getElementById("emailError");

  var phoneNumberPattern = /^[0-9]{3}[ -.]{1}[0-9]{3}[ -.]{1}[0-9]{4}$/;
  var mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (fName === "") {
    fNameError.style.display = "block";
  } else {
    fNameError.style.display = "none";
  }

  if (lName === "") {
    lNameError.style.display = "block";
  } else {
    lNameError.style.display = "none";
  }

  if (phoneNumberPattern.test(phoneNumber) === false) {
    phoneNumberError.style.display = "block";
  } else {
    phoneNumberError.style.display = "none";
  }

  if (mailPattern.test(email) === false) {
    mailError.style.display = "block";
  } else {
    mailError.style.display = "none";
  }
});

export default ContactForm;
