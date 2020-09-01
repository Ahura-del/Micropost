class EasyHttp {
  async get(url) {
    let get = await fetch(url);
    let user = await get.json();
    return user;
  }

  async post(url, data) {
    let post = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let user = await post.json();
    return user;
  }

  async put(url, data) {
    let put = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let user = await put.json();
    return user;
  }

  async delete(url) {
    let del = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    let user = await "User Deleted ...";
    return user;
  }
}

export default EasyHttp;
