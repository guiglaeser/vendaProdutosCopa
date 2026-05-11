import { createClient } from "@supabase/supabase-js";

const supabaseurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasekey = process.env.SUPABASEKEY_ANON_KEY;

export const supabase = createClient(supabaseurl, supabasekey);