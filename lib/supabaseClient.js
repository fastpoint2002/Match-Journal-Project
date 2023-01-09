import { createClient } from '@supabase/supabase-js'

const Supabase = createClient('https://odrkbddbwyhvosgpumfq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kcmtiZGRid3lodm9zZ3B1bWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNDU1NDUsImV4cCI6MTk4ODcyMTU0NX0.lhZH_i5T0jMv9oYXilxTHUZJIkD_Iba37BIneOgLrMc')

export default Supabase