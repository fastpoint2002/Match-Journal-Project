import Link from "next/link";
import { Fragment } from "react";
import {
  useSession,
} from "@supabase/auth-helpers-react";

export default function RightLinks() {
  const session = useSession();

  function logoutHandler() {
    // figure out
  }

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
          <button onClick={logoutHandler}>Logout</button>
        </Link>
        <Link
          href="/auth"
          className="rounded-full bg-cyan px-8 py-3 font-bold text-black hover:opacity-70"
        >
          Profile
        </Link>
      </Fragment>
    );
  }
}
