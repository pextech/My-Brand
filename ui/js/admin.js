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

//  get queries form the firestore
const messageContainer = document.querySelector(".message_container");

db.collection("queries").onSnapshot((docs) => {
  let enter = "";
  docs.forEach((doc) => {
    enter += `          <div class="message_card">
    <h3>${doc.data().name}</h3>
    <a href="#00">${doc.data().email}</a>
    <p>
    ${doc.data().message}
    </p>
  </div>`;
  });
  messageContainer.innerHTML = enter;
});
