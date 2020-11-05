const form = document.getElementById("login-form");
const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

// show input error

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "input-div error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

//  show input success

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "input-div success";
};

//  checking required parameter

const checkRequired = (inputArry) => {
  inputArry.forEach((input) => {
    console.log(input);
    // if (input.value.trim() === "") {
    //   showError(input, `${input} is required`);
    // } else {
    //   showSuccess(input);
    // }
  });
};

// check email validation

// const checkEmail = (input) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// };

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([inputs]);
});
