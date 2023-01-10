import Link from "next/link";
import { Fragment } from "react";
import {
  useSessionContext, useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function RightLinks() {
  const session = useSessionContext();

  const supabase = useSupabaseClient();

  if (!session) {
    return (
      <Fragment>
        <Link href="/auth" className="hover:text-veryDarkViolet">
          Login
        </Link>
        <Link
          href="/auth"
          className="rounded-full bg-cyan px-8 py-3 font-bold text-white hover:opacity-70"
        >
          Sign Up
        </Link>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link href="/" className="hover:text-veryDarkViolet">
          <button onClick={() => supabase.auth.signOut()}>Logout</button>
        </Link>
        <Link
          href="/profile"
          className="rounded-full bg-cyan px-8 py-3 font-bold text-black hover:opacity-70"
        >
          Profile
        </Link>
      </Fragment>
    );
  }
}
