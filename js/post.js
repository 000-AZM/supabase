import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://YOUR_PROJECT.supabase.co', 'YOUR_ANON_KEY')

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
