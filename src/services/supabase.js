import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfqeyoeffjwuwnctghnn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcWV5b2VmZmp3dXduY3RnaG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNTQ0NjEsImV4cCI6MjAzNzYzMDQ2MX0.8E26o3mtfG8ZdUl6SnzsS2xkTiCC7g-4ywCl0RgeIrI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
