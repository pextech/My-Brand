const singleBlog = document.querySelector(".whole_wrapper");
const commentBlog = document.querySelector(".comment_singlePage");
const blogId = location.href.split("?id=")[1];
// const increment = firebase.firebase.FieldValue.increment(1);
// db.collection('blogs').doc(blogId).update(cone)
// db.collection("blogs")
//   .doc(blogId)
//   .collection("comments")
//   .orderBy("time", "desc")
//   .onSnapshot((docs) => {
//     let html = "";
//     docs.forEach((doc) => {
//       const comment = doc.data();
//       html += ``;
//     });
//     commentBlog;
//   });

console.log(blogId);

db.collection("blog_post")
  .doc(blogId)
  .onSnapshot((doc) => {
    let html = "";
    html =
      html +
      `    
    <div class="post_wrapper">
      <div class="post_header">
        <h1>${doc.data().title}</h1>
        <div class="post_author_name">
          <time>${doc.data().time}</time>
          <p><a href="#">~By ${doc.data().author}</a></p>
        </div>
      </div>
      <div class="post_content">
        <div class="post_img">
          <img src="${doc.data().image}" alt="" />
        </div>
        <div class="post_text">
          <p>
          ${doc.data().content}
          </p>
        </div>
      </div>
    </div>`;
    singleBlog.innerHTML = html;
  });

const commentForm = document.querySelector(".comment_form");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //  get input values
  const name = commentForm.name.value;
  const message = commentForm.message.value;

  db.collection("comment_single_post").add({
    name: name,
    message: message,
  });
  commentForm.reset();
});

const commentContainer = document.querySelector(".comment_container");

db.collection("comment_single_post").onSnapshot((docs) => {
  let enter = "";
  docs.forEach((doc) => {
    enter += `        <div class="comment_container">
    <div class="comment_card">
      <h3>${doc.data().name}</h3>
      <p>
      ${doc.data().message}
      </p>
    </div>`;
  });
  commentContainer.innerHTML = enter;
});
