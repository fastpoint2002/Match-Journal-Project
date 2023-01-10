import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import DashboardDisplay from "../components/layout/main-pages/dashboard-layout";

function DashboardPage() {
  return <DashboardDisplay />;
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }

  // // Run queries with RLS on the server
  // const { data } = await supabase.from('users').select('*')

  return {
    props: {
      initialSession: session,
      user: session.user,
  //     data: data ?? [],
    },
  }
}

export default DashboardPage;
