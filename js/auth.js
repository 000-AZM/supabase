import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabase = createClient('https://ozrtnqbqadnzqmyivoto.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cnRucWJxYWRuenFteWl2b3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MzkxMTUsImV4cCI6MjA2ODMxNTExNX0.B_NYiKy0NzJrVTmIucZINas7EeBxHJzNVjLpQ7YI3Rc')

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
