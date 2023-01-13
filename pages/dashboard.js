import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Fragment } from "react";
import DashboardDisplay from "../components/layout/main-pages/dashboard-layout";
import Head from "next/head";

function DashboardPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dashboard | Match Journal</title>
        <meta name="description" content="All your match data" />
      </Head>
      <DashboardDisplay data={props.data} user={props.user} />
    </Fragment>
  );
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
  const user_profile = profiles[0];

  return {
    props: {
      initialSession: session,
      user: user_profile,
      data: matches ?? [],
    },
  };
};

export default DashboardPage;
