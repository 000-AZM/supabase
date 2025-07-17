import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://ozrtnqbqadnzqmyivoto.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cnRucWJxYWRuenFteWl2b3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MzkxMTUsImV4cCI6MjA2ODMxNTExNX0.B_NYiKy0NzJrVTmIucZINas7EeBxHJzNVjLpQ7YI3Rc')

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
