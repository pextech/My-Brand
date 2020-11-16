const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const oneLink = document.querySelectorAll(".item");
const logout = document.querySelector(".logout");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

oneLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("active");
  });
});

auth.onAuthStateChanged((user) => {
  if (!user) {
    console.log("signed out");
    location = "../pages/login.html";
  }
});

logout.addEventListener("click", (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log("user signed out");
  });
});
