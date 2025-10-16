import { posts } from "./data.js";

const postsContainer = document.querySelector("#posts-container");

posts.forEach(post => {
  const createPost = document.createElement("article");
  createPost.classList.add("post");

  createPost.innerHTML += `
    <section class="author">
      <img src=${post.avatar} class="author-avatar">
      <div class="author-info">
        <p class="name bold">${post.name}</p>
        <p class="location">${post.location}</p>
      </div>
    </section>

    <section class="picture">
      <img src="${post.uploadedPic}" class="uploaded-pic">
    </section>

    <section class="icons">
      <img src="images/icon-heart.png" class="og-icon">
      <img src="images/icon-comment.png" class="og-icon">
      <img src="images/icon-dm.png" class="og-icon">
    </section>

    <section class="likes">
      <p class="bold"><span class="num-likes">${post.likes.toLocaleString()}</span> likes</p>
    </section>

    <section class="comments">
      <p><span class="username bold">${post.username}</span> ${post.comment}</p>
    </section>
  `;

  postsContainer.appendChild(createPost);
});