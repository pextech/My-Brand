const singleBlog = document.querySelector("tbody");

db.collection("blog_post").onSnapshot((docs) => {
  let html = "";
  docs.forEach((doc) => {
    html =
      html +
      `              <tr>
      <td data-col-title="N">1</td>
      <td data-col-title="Title">${doc.data().title}</td>
      <td data-col-title="Author">${doc.data().author}</td>
      <td data-col-title="Action">
        <ul class="action-btn">
          <li class="edit">
            <a href="../pages/edit.html?id=${
              doc.id
            }"><i class="far fa-edit"></i></a>
          </li>
          <li class="delete" onclick="deletePost('${doc.id}')">
            <a href="#"><i class="far fa-trash-alt"></i></a>
          </li>
          <li class="publish">
            <a href="#"><i class="fas fa-upload"></i></a>
          </li>
        </ul>
      </td>
    </tr>`;
  });

  singleBlog.innerHTML = html;
});

function deletePost(postId) {
  db.collection("blog_post")
    .doc(postId)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
}
