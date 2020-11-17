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
