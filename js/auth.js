// script/auth.js
async function registerUser(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else window.location.href = "feed.html";
}

async function loginUser(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = "feed.html";
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}
