import UserProfile from "../components/layout/profile/user-profile";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import PageConstructionMessage from "../components/layout/main-pages/construction";

function ProfilePage() {
  return <PageConstructionMessage />;
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
