/* ========= SUPABASE CONFIG ========= */

const SUPABASE_URL = "https://cfskbriyfnmnhhmxpprl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmc2ticml5Zm5tbmhobXhwcHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NDg2OTUsImV4cCI6MjA5NDEyNDY5NX0.x0o0SQdhD5ybgmGML_cxgJ9dZrl6SMPpTXP2YOFk5xI";

let supabaseClient = null;

function getSupabaseClient() {
  if (supabaseClient) {
    return supabaseClient;
  }

  if (!window.supabase || !window.supabase.createClient) {
    throw new Error("Supabase library is not loaded. Internet may be required.");
  }

  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return supabaseClient;
}