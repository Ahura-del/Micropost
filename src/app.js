import Http from "./http";
import UI from "./Ui";
let ui = new UI();

document.addEventListener("DOMContentLoaded", getPost);

//get post

function getPost() {
  new Http()
    .get("http://localhost:3000/posts")
    .then((posts) => ui.showPosts(posts))
    .catch((err) => console.log(err));
}

document.querySelector("#post-it").addEventListener("click", (e) => {
  e.preventDefault();
  let title = ui.headingInput.value;
  let body = ui.textarea.value;

  let data = {
    title,
    body,
  };

  if (ui.state === "add") {
    new Http()
      .post("http://localhost:3000/posts", data)
      .then((data) => {
        ui.clearInput();
        getPost();
      })
      .catch((err) => console.log(err));
  } else if (ui.state === "edit") {
    const id = document.querySelector("#id").value;
    new Http()
      .put(`http://localhost:3000/posts/${id}`, data)
      .then((data) => {
        ui.clearInput();
        ui.changeButton("add");
        getPost();
      })
      .catch((err) => console.log(err));
  }
});

document.querySelector(".posts").addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.parentElement.parentElement.parentElement.id;

  if (e.target.parentElement.classList.contains("delete")) {
    new Http()
      .delete(`http://localhost:3000/posts/${id}`)
      .then((data) => {
        getPost();
      })
      .catch((err) => console.log(err));
  } else if (e.target.parentElement.classList.contains("edit")) {
    e.preventDefault();
    const title =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.textContent;
    const body =
      e.target.parentElement.parentElement.previousElementSibling.textContent;
    const id = e.target.parentElement.parentElement.parentElement.id;
    ui.inputValue(title, body, id);
    ui.changeButton("edit");
  }
});

document.querySelector(".start-form").addEventListener("click", (e) => {
  e.preventDefault();
  let id = e.target.parentElement.parentElement.parentElement.id;
  if (e.target.classList.contains("cancelButton")) {
    ui.clearInput();
    ui.changeButton("add");
  }
});
