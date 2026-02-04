export const supabaseConfig = {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error("Missing Supabase environment variables. Please check your .env file.");
}
