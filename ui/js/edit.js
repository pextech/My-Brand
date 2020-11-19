const createForm = document.querySelector(".create_form");
const blogId = location.href.split("?id=")[1];

console.log(blogId);

db.collection("blog_post")
  .doc(blogId)
  .onSnapshot((doc) => {
    createForm.author.value = doc.data().author;
    createForm.title.value = doc.data().title;
    createForm.content.value = doc.data().content;
    createForm.image.file = doc.data().image;
  });

// db.collection("blog_post")
//   .doc(blogId)
//   .update()
//   .onSnapshot((doc) => {

//   });
