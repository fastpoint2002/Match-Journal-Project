import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function MenuList(props) {
  const session = useSessionContext();
  const supabase = useSupabaseClient();

  const mainClassString =
    "z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6 hidden" +
    props.hidden;

  return (
    <div id="menu" className={mainClassString}>
      <div className="jusitify-center flex w-full flex-col items-center space-y-6 rounded-sm font-bold text-white">
        {session.session && (<Link
          href="/dashboard"
          className="w-full text-center"
          onClick={props.menuHandler}
        >
          Dashboard
        </Link>)}
        <Link
          href="/"
          className="w-full text-center"
          onClick={props.menuHandler}
        >
          Home
        </Link>
        <Link
          href="/features"
          className="w-full text-center"
          onClick={props.menuHandler}
        >
          Features
        </Link>
        <Link
          href="/feedback"
          className="w-full text-center"
          onClick={props.menuHandler}
        >
          Feedback
        </Link>
        {session.session && (<Link
          href={"/"}
          className="w-full border-t border-gray-400 pt-6 text-center"
          onClick={async () => await supabase.auth.signOut()}
        >
          Logout
        </Link>)}
        {!session.session && (<Link
        href={"/auth"}
        className="w-full border-t border-gray-400 pt-6 text-center"
      >
        Login
      </Link>)}
        {session.session && (<Link
          href={"/auth"}
          className="w-full rounded-full bg-cyan py-3 text-center"
        >
          Profile
        </Link>)}
        {!session.session && (<Link
          href={"/profile"}
          className="w-full rounded-full bg-cyan py-3 text-center"
        >
          Sign Up
        </Link>)}
      </div>
    </div>
  );
}
