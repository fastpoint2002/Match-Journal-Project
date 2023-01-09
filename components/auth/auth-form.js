import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import HomeWrapper from "../layout/HomeWrapper";

const AuthForm = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
      <div className="container mx-auto max-w-xl p-6">
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="minmial"
          />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
  );
};

export default AuthForm;
