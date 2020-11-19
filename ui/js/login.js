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

const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

//  form validation
//  show error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "input-field error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

//  success
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "input-field success";
};

// checking email
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, "Email is not Valid");
  } else {
    showSuccess(input);
  }
};
// capitalise firt letter of the error
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// checking password length

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else {
    showSuccess(input);
  }
};

// authentication with github

// const github = document.querySelector(".fa-github");

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logged");
    location = "../pages/admin.html";
  } else {
    console.log("no user");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail(email);
  checkLength(password, 10);
  // firebase get user info
  const email_L = form["email"].value;
  const password_L = form["password"].value;

  // signup for the user
  auth.signInWithEmailAndPassword(email_L, password_L).then((cred) => {
    console.log(cred);
    form.reset();
  });
});
