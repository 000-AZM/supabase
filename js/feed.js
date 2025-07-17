import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://YOUR_PROJECT.supabase.co', 'YOUR_ANON_KEY')

const feedEl = document.getElementById('feed')

window.logout = async () => {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}

const loadFeed = async () => {
  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(username)')
    .order('created_at', { ascending: false })

  posts.forEach(post => {
    feedEl.innerHTML += `
      <div class="post">
        <img src="${post.image_url}" width="300" />
        <p><strong>${post.users.username}</strong>: ${post.caption}</p>
      </div>
    `
  })
}

loadFeed()
