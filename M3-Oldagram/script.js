import { posts } from "./data.js";

const postsContainer = document.querySelector("#posts-container");

function renderPosts() {
  postsContainer.innerHTML = "";

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
        <img src="${post.isLiked ? "assets/images/icon-heart-liked.png" : "assets/images/icon-heart.png"}" class="og-icon" data-id="${post.id}">
        <img src="assets/images/icon-comment.png" class="og-icon">
        <img src="assets/images/icon-dm.png" class="og-icon">
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
};

renderPosts();

postsContainer.addEventListener("click", (e) => {
  if(e.target.dataset.id) {
    handleLike(e.target.dataset.id);
  }
});

function handleLike(getPostID) {
  const postID = parseInt(getPostID);

  const post = posts.filter(post => {
    return post.id === postID;
  })[0];
  
  if(post) {
    post.likes = post.isLiked ? post.likes - 1 : post.likes + 1;
    post.isLiked = !post.isLiked;
  };

  renderPosts();
};