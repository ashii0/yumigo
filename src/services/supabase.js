import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bzhrmgcfnpkbduphmwwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6aHJtZ2NmbnBrYmR1cGhtd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NTI3MTcsImV4cCI6MjA3NDIyODcxN30.eMRIYSjlggyFfsY7jd9S-yQtzPpM62bt4HeHEySjiGE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
