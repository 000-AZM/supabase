import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://YOUR_PROJECT.supabase.co', 'YOUR_ANON_KEY')

window.login = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) alert(error.message)
  else window.location.href = 'index.html'
}

window.register = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const username = document.getElementById('username').value
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) return alert(error.message)
  await supabase.from('users').insert([{ id: data.user.id, username }])
  alert('Registered! Check your email.')
}

window.logout = async () => {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}
