import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import PageConstructionMessage from "../components/layout/main-pages/construction";
import ProfilePageBody from "../components/layout/main-pages/profile-page";

function ProfilePage() {
  return <PageConstructionMessage />
  // return <ProfilePageBody />;
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

export default ProfilePage;
