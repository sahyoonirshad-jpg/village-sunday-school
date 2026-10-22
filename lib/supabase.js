import { createClient } from "@supabase/supabase-js";

// Both values come from .env.local on your computer and from Vercel's Environment Variables when live.
// They are public (anon) keys; the secret service_role key must never be used here.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
