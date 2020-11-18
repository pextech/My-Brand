const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

oneLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("active");
  });
});
