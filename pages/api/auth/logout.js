import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const initialize = async () => await supabase.auth.signOut();
    initialize();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const body = JSON.stringify({ event, session });
        const headers = new Headers({ "Content-Type": "application/json" });

        await fetch("/api/login", {
          method: "post",
          body,
          headers,
          credentials: "same-origin",
        });
        router.push("/");
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  return <></>;
}
