import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import DashboardDisplay from "../components/layout/main-pages/dashboard-layout";
import fs from 'fs'
import path from 'path'

function DashboardPage() {
  return <DashboardDisplay />;
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
  // const { data } = await supabase.from('users').select('*')

  let { data: matches, error } = await supabase
    .from("matches")
    .select("*")

    const filePath = path.join(process.cwd(), 'data', 'matches.json')
    fs.writeFileSync(filePath, JSON.stringify(matches));

  return {
    props: {
      initialSession: session,
      user: session.user,
      //     data: data ?? [],
    },
  };
};

export default DashboardPage;
