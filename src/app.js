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
  console.log(formData);

  form.addEventListener("change", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
  });

  submitButton.addEventListener("click", e => {
    e.preventDefault();
    //Card Number validation
    if (formData.ccn.length > 0) {
      const ccnError = document.querySelector("#card-error");
      const ccnInput = document.querySelector("#ccn-input");
      if (isNaN(formData.ccn) === false) {
        console.log("Yay it's a number!");
        if (formData.ccn.length === 16) {
          ccnInput.classList.remove("red");
          ccnError.classList.add("hidden");
          ccnInput.classList.add("green-border");
        } else {
          ccnError.innerHTML = "Oops! Card must be 16 digits long!";
          ccnInput.classList.remove("green-border");
          ccnError.classList.remove("hidden");
          ccnInput.classList.add("red");
        }
      } else {
        console.log("Not a number :(");
        ccnError.innerHTML = "Please enter only numbers.";
        ccnInput.classList.remove("green-border");
        ccnError.classList.remove("hidden");
        ccnInput.classList.add("red");
      }
    } else {
      const ccnInput = document.querySelector("#ccn-input");
      const ccnError = document.querySelector("#card-error");
      ccnError.innerHTML = "This field is empty! Enter a card number.";
      ccnInput.classList.remove("green-border");
      ccnError.classList.remove("hidden");
      ccnInput.classList.add("red");
    }

    //CVC number validation
    if (formData.cvc.length > 0) {
      const cvcError = document.querySelector("#cvc-error");
      const cvcInput = document.querySelector("#cvc-input");
      if (isNaN(formData.cvc) === false) {
        console.log("Yay it's a number!");
        if (formData.cvc.length === 3) {
          cvcInput.classList.remove("red");
          cvcError.classList.add("hidden");
          cvcInput.classList.add("green-border");
        } else {
          cvcError.innerHTML = "Oops! CVC must be 3 digits long!";
          cvcInput.classList.remove("green-border");
          cvcError.classList.remove("hidden");
          cvcInput.classList.add("red");
        }
      } else {
        console.log("Not a number :(");
        cvcError.innerHTML = "Please enter 3 numbers, not letters.";
        cvcInput.classList.remove("green-border");
        cvcError.classList.remove("hidden");
        cvcInput.classList.add("red");
      }
    } else {
      const cvcInput = document.querySelector("#cvc-input");
      const cvcError = document.querySelector("#cvc-error");
      cvcError.innerHTML = "Empty field! Please enter the CVC number.";
      cvcInput.classList.remove("green-border");
      cvcError.classList.remove("hidden");
      cvcInput.classList.add("red");
    }

    //Amount validation
    if (formData.amount.length > 0) {
      const amountError = document.querySelector("#amount-error");
      const amountInput = document.querySelector("#amount-input");
      if (isNaN(formData.amount) === false) {
        console.log("Yay it's a number!");
        amountInput.classList.remove("red");
        amountError.classList.add("hidden");
        amountInput.classList.add("green-border");
      } else {
        console.log("Not a number :(");
        amountError.innerHTML = "We need the amount in numbers, please.";
        amountInput.classList.remove("green-border");
        amountError.classList.remove("hidden");
        amountInput.classList.add("red");
      }
    } else {
      const amountInput = document.querySelector("#amount-input");
      const amountError = document.querySelector("#amount-error");
      amountError.innerHTML = "Empty field! Amount is not optional.";
      amountInput.classList.remove("green-border");
      amountError.classList.remove("hidden");
      amountInput.classList.add("red");
    }

    //First Name Validation
    if (formData.firstName.length > 0) {
      const firstNameError = document.querySelector("#first-name-error");
      const firstNameInput = document.querySelector("#first-name-input");
      if (/\d/.test(formData.firstName) === false) {
        console.log("Nice, no numbers in the first name");
        firstNameInput.classList.remove("red");
        firstNameError.classList.add("hidden");
        firstNameInput.classList.add("green-border");
      } else {
        console.log("First Name can't have any numbers");
        firstNameError.innerHTML = "This field doesn't accept numbers.";
        firstNameInput.classList.remove("green-border");
        firstNameError.classList.remove("hidden");
        firstNameInput.classList.add("red");
      }
    } else {
      const firstNameInput = document.querySelector("#first-name-input");
      const firstNameError = document.querySelector("#first-name-error");
      firstNameError.innerHTML = "Please enter your first name.";
      firstNameInput.classList.remove("green-border");
      firstNameError.classList.remove("hidden");
      firstNameInput.classList.add("red");
    }

    //Last Name Validation
    if (formData.lastName.length > 0) {
      const lastNameError = document.querySelector("#last-name-error");
      const lastNameInput = document.querySelector("#last-name-input");
      if (/\d/.test(formData.lastName) === false) {
        console.log("Nice, no numbers in the first name");
        lastNameInput.classList.remove("red");
        lastNameError.classList.add("hidden");
        lastNameInput.classList.add("green-border");
      } else {
        console.log("First Name can't have any numbers");
        lastNameError.innerHTML = "This field doesn't accept numbers.";
        lastNameInput.classList.remove("green-border");
        lastNameError.classList.remove("hidden");
        lastNameInput.classList.add("red");
      }
    } else {
      const lastNameInput = document.querySelector("#last-name-input");
      const lastNameError = document.querySelector("#last-name-error");
      lastNameError.innerHTML = "Please enter your last name.";
      lastNameInput.classList.remove("green-border");
      lastNameError.classList.remove("hidden");
      lastNameInput.classList.add("red");
    }

    //City Validation
    if (formData.city.length > 0) {
      const cityError = document.querySelector("#city-error");
      const cityInput = document.querySelector("#city-input");
      if (/\d/.test(formData.city) === false) {
        console.log("Yes! City doesn't contain numbers");
        cityInput.classList.remove("red");
        cityError.classList.add("hidden");
        cityInput.classList.add("green-border");
      } else {
        console.log("First Name can't have any numbers");
        cityError.innerHTML = "City can't contain numbers";
        cityInput.classList.remove("green-border");
        cityError.classList.remove("hidden");
        cityInput.classList.add("red");
      }
    } else {
      const cityInput = document.querySelector("#city-input");
      const cityError = document.querySelector("#city-error");
      cityError.innerHTML = "This field is empty! Please enter your city.";
      cityInput.classList.remove("green-border");
      cityError.classList.remove("hidden");
      cityInput.classList.add("red");
    }

    //State Validation
    if (formData.state.length <= 0) {
      const stateError = document.querySelector("#state-error");
      const stateSelect = document.querySelector("#state-select");
      stateError.innerHTML = "You need to select a state.";
      stateError.classList.remove("hidden");
      stateSelect.classList.remove("green-border");
      stateSelect.classList.add("red");
    } else if (formData.state === "pickState") {
      const stateError = document.querySelector("#state-error");
      const stateSelect = document.querySelector("#state-select");
      stateError.innerHTML = "You need to select a state.";
      stateError.classList.remove("hidden");
      stateSelect.classList.remove("green-border");
      stateSelect.classList.add("red");
    } else {
      const stateError = document.querySelector("#state-error");
      const stateSelect = document.querySelector("#state-select");
      console.log("Yes, you picked a State!");
      stateSelect.classList.remove("red");
      stateError.classList.add("hidden");
      stateSelect.classList.add("green-border");
    }

    //Postal Code Validation
    if (formData.cvc.length > 0) {
      const postalCodeError = document.querySelector("#postal-code-error");
      const postalCodeInput = document.querySelector("#postal-code-input");
      if (isNaN(formData.cvc) === false) {
        console.log("Yay it's a number!");
        if (formData.cvc.length === 5) {
          postalCodeInput.classList.remove("red");
          postalCodeError.classList.add("hidden");
          postalCodeInput.classList.add("green-border");
        } else {
          postalCodeError.innerHTML =
            "Sorry! Postal code must be 5 digits long.";
          postalCodeInput.classList.remove("green-border");
          postalCodeError.classList.remove("hidden");
          postalCodeInput.classList.add("red");
        }
      } else {
        console.log("Not a number :(");
        postalCodeError.innerHTML = "Please enter 5 numbers, not letters.";
        postalCodeInput.classList.remove("green-border");
        postalCodeError.classList.remove("hidden");
        postalCodeInput.classList.add("red");
      }
    } else {
      const postalCodeInput = document.querySelector("#postal-code-input");
      const postalCodeError = document.querySelector("#postal-code-error");
      postalCodeError.innerHTML = "Empty field! Please enter your postal code.";
      postalCodeInput.classList.remove("green-border");
      postalCodeError.classList.remove("hidden");
      postalCodeInput.classList.add("red");
    }
  });
};
