import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function LogoutButton(props) {
  const [islogout, setlogout] = useState();
  const session = useSessionContext();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session) {
      setlogout(true);
    } else {
      setlogout(false);
    }
  }, [session]);

  if (islogout) {
    return (
      <Fragment>
        <Link
          href={"/"}
          className="w-full border-t border-gray-400 pt-6 text-center"
          onClick={async () => await supabase.auth.signOut()}
        >
          Logout
        </Link>
      </Fragment>
    );
  } else {
    <Fragment>
      <Link
        href={"/auth"}
        className="w-full border-t border-gray-400 pt-6 text-center"
      >
        Login
      </Link>
    </Fragment>;
  }
}
