// script/feed.js
async function loadFeed() {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  data.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h3>${post.username}</h3>
      <p>${post.content}</p>
      <small>${new Date(post.created_at).toLocaleString()}</small>
    `;
    feed.appendChild(postDiv);
  });
}
loadFeed();
