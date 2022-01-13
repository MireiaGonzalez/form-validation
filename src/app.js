/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const form = document.querySelector("#payment-form");
  const submitButton = document.querySelector("#submit-button");
  let formData = {
    cnn: "",
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
};
