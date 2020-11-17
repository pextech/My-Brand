const blogContainer = document.querySelector(".blog_wrapper");

db.collection("blog_post").onSnapshot((docs) => {
  let enter = "";
  docs.forEach((doc) => {
    console.log(doc.data().image);
    enter += `          <div class="blog_container">
    <div class="blog_img">
      <img src="${doc.data().image}" alt="" />
    </div>
    <div class="blog_content">
      <div class="header_blog">
        <time>${doc.data().time}</time>
        <p><a href="#">~By ${doc.data().author}</a></p>
      </div>
      <div class="main_blog">
        <h2>
          <a href="./pages/single_page.html?id=${doc.id}">${
      doc.data().title
    }</a>
        </h2>
        <p class="min_content">
        ${doc.data().content}
        </p>
      </div>

      <footer class="blog_footer">
        <a href="#">2 comments</a>
      </footer>
    </div>
  </div>`;
  });
  blogContainer.innerHTML = enter;
});
