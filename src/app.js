/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const form = document.querySelector("#payment-form");
  const submitButton = document.querySelector("#submit-button");
  let formData = {
    ccn: "",
    cvc: "",
    amount: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "",
    notes: ""
  };

  form.addEventListener("change", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
  });

  submitButton.addEventListener("click", e => {
    e.preventDefault();
    if (formData.ccn.length > 0) {
      const ccnInput = document.querySelector("#ccn-input");
      if (isNaN(formData.ccn) === false) {
        console.log("Yay it's a number!");
        if (formData.ccn.length === 16) {
          ccnInput.classList.add("green-border");
          ccnInput.classList.remove("red");
        } else {
          ccnInput.value = "";
          ccnInput.placeholder = "Card # must be 16 numbers long!";
          ccnInput.classList.add("red");
        }
      } else {
        console.log("Not a number :(");
      }
    } else {
      const ccnInput = document.querySelector("#ccn-input");
      ccnInput.placeholder = "This field is empty!";
      ccnInput.classList.add("red");
    }

    if (formData.cvc.length > 0) {
      const cvcInput = document.querySelector("#cvc-input");
      if (isNaN(formData.ccn) === false) {
        console.log("Yay it's a number!");
        if (formData.ccn.length === 3) {
          cvcInput.classList.add("green-border");
          cvcInput.classList.remove("red");
        } else {
          cvcInput.value = "";
          cvcInput.placeholder = "CVC must be 3 numbers long!";
          cvcInput.classList.add("red");
        }
      } else {
        console.log("Not a number :(");
      }
    } else {
      const cvcInput = document.querySelector("#cvc-input");
      cvcInput.placeholder = "This field is empty!";
      cvcInput.classList.add("red");
    }
  });
};
