class UI {
  constructor() {
    this.headingInput = document.querySelector("#heading-input");
    this.textarea = document.querySelector("#text-area");
    this.postIt = document.querySelector("#post-it");
    this.posts = document.querySelector(".posts");
    this.id = document.querySelector("#id");
    this.state = "add";
  }

  showPosts(posts) {
    let output = "";
    posts.forEach((post) => {
      output += `
            <div class="card card-body mt-3 bg-light" id="${post.id}">
            <h4 class="heading">${post.title}</h4>
            <p class="lead">${post.body}</p>
            <div class="button">
              <a href="#" class="edit" data-id ="${post.id}">
                <i class="fa fa-pencil-alt"></i>
              </a>
              <a href="#" class="delete" data-id ="${post.id}">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
            
            `;
    });
    this.posts.innerHTML = output;
  }

  clearInput() {
    this.headingInput.value = "";
    this.textarea.value = "";
  }

  inputValue(title, body, id) {
    const titleInput = (this.headingInput.value = title);
    const bodyInput = (this.textarea.value = body);
    const idInput = (this.id.value = id);
  }

  changeButton(type) {
    if (type === "edit") {
      this.state = "edit";
      let div = document.createElement("div");
      div.className = "btn btn-light btn-block cancelButton";
      div.textContent = "Cancel";
      const endElement = document.querySelector(".end-form");
      const parentElement = document.querySelector(".start-form");
      parentElement.insertBefore(div, endElement);

      let updateBtn = this.postIt;
      updateBtn.textContent = "Update Post";
      updateBtn.className = "btn btn-warning btn-block updateButton";
    } else if (type === "add") {
      this.state = "add";
      if (document.querySelector(".cancelButton")) {
        this.postIt.className = "btn btn-primary btn-block";
        this.postIt.textContent = "Post It";
        document.querySelector(".cancelButton").remove();
      }
    }
  }
}

export default UI;
