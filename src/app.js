/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const form = document.querySelector("#payment-form");
  let formData = {};

  form.addEventListener("change", e => {
    console.log(e.target.name);
    console.log(e.target.value);
  });
};
