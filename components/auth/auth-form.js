import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import HomeWrapper from "../layout/HomeWrapper";
import { useRouter } from "next/router";

const AuthForm = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  if (!session) {
    return (
      <HomeWrapper>
      <div className="container mx-auto max-w-xl p-6">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="minmial"
          />
      </div>
    </HomeWrapper>
    )
  } else {
    router.push({
      pathname: '/dashboard',
      query: {}
    }, '/dashboard')
  }
};

export default AuthForm;
