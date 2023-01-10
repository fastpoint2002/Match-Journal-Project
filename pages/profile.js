import UserProfile from "../components/profile/user-profile";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

function ProfilePage() {
  return <UserProfile />;
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
