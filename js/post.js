import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://ozrtnqbqadnzqmyivoto.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cnRucWJxYWRuenFteWl2b3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MzkxMTUsImV4cCI6MjA2ODMxNTExNX0.B_NYiKy0NzJrVTmIucZINas7EeBxHJzNVjLpQ7YI3Rc')


window.uploadPost = async () => {
  const caption = document.getElementById('caption').value
  const file = document.getElementById('file').files[0]
  const { data: { user } } = await supabase.auth.getUser()

  const filename = `${user.id}-${Date.now()}`
  await supabase.storage.from('images').upload(filename, file)
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(filename)

  await supabase.from('posts').insert([{ user_id: user.id, caption, image_url: publicUrl }])
  alert('Posted!')
  window.location.href = 'index.html'
}
