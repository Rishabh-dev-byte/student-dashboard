import { createClient } from '@supabase/supabase-js'

// This runs on the SERVER only (like an Express module)
// Think of this as your db connection file in Express
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseKey)
}

// Fetches all courses from the database
// This is like an Express route handler that queries postgres
export async function getCourses() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Failed to fetch courses:', error.message)
    return { data: null, error: error.message }
  }
}
