const fetchButton = document.getElementById("fetch-posts");
fetchButton.addEventListener("click", fetchPosts);

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <span class="user-details" data-id=${post.id}></span>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
        fetchButton.disabled = true;
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
}