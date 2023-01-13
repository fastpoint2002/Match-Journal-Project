import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import DashboardDisplay from "../components/layout/main-pages/dashboard-layout";

function DashboardPage(props) {
  return <DashboardDisplay data={props.data} user={props.user} />;
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };

  // // Run queries with RLS on the server
  let { data: matches, error } = await supabase.from("matches").select("*");
  let { data: profiles, error2 } = await supabase.from("profiles").select("*");
  const user_profile = profiles[0]

  return {
    props: {
      initialSession: session,
      user: user_profile,
      data: matches ?? [],
    },
  };
};

export default DashboardPage;
