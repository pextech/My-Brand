const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const oneLink = document.querySelectorAll(".item");
// const form = document.getElementById("contact-form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");

const form = document.querySelectorAll(".index_form");
const name = document.querySelectorAll("#name");
const email = document.querySelectorAll("#email");
const message = document.getElementById("message");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

oneLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("active");
  });
});

// project page css

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}

// popup form for subscribe

document.getElementById("subscribe_btn").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "index_form error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show success message
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "index_form success";
};

// check email is valid
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not Valid");
  }
};

// cappitalise the first letter of the id

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

// Event listerners
form.forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    checkLength(f.name, 3, 40);
    checkLength(message, 6, 10000);
    checkEmail(f.email);
  });
});

//  uploading queries to the firestore
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //  get input values
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  db.collection("queries").add({
    name: name,
    email: email,
    message: message,
  });
  contactForm.reset();
});
