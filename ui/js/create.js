//  creating blog post
const createForm = document.querySelector(".create_form");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = createForm.author.value;
  const image = createForm.image.files[0];
  const title = createForm.title.value;
  const content = createForm.content.value;
  const storageRef = firebase.storage().ref().child(`blogsImage/${image.name}`);
  const uploadImage = storageRef.put(image);
  uploadImage.snapshot.ref.getDownloadURL().then((downloadURL) => {
    let today = new Date();
    let time =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    db.collection("blog_post")
      .add({
        title: title,
        content: content,
        image: downloadURL,
        commentsCount: 0,
        author: author,
        time: time,
      })
      .then(() => {
        createForm.reset();
        location.href = "../pages/admin.html";
      });
  });
});
