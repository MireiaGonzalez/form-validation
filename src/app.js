/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const form = document.querySelector("#payment-form");
  let formData = {};

  form.addEventListener("change", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
  });
};
