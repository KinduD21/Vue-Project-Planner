import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pgklzypfanhxnuahluob.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBna2x6eXBmYW5oeG51YWhsdW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NzIwMzIsImV4cCI6MjAyODE0ODAzMn0.Ht3ek_eKHP3md3RP94A9VAcXtplR14575uqhz1DIWtQ",
);
