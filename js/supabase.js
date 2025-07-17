// script/supabase.js
const SUPABASE_URL = 'https://ozrtnqbqadnzqmyivoto.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cnRucWJxYWRuenFteWl2b3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MzkxMTUsImV4cCI6MjA2ODMxNTExNX0.B_NYiKy0NzJrVTmIucZINas7EeBxHJzNVjLpQ7YI3Rc'; // your anon key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
