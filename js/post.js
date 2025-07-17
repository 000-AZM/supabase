// script/post.js
async function createPost(content) {
  const user = await supabase.auth.getUser();
  const { data, error } = await supabase.from('posts').insert([
    { user_id: user.data.user.id, content, username: user.data.user.email.split("@")[0] }
  ]);
  if (error) alert(error.message);
  else window.location.href = "feed.html";
}
