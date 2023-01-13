import Link from "next/link";
import { Fragment } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

export default function LeftMenu() {
  const session = useSessionContext();

  return (
    <Fragment>
      {session.session && (
        <Fragment>
          <Link
            href="/dashboard"
            className="text-grayishViolet hover:text-veryDarkViolet"
          >
            Dashboard
          </Link>
        </Fragment>
      )}
          <Link
            href="/"
            className="text-grayishViolet hover:text-veryDarkViolet"
          >
            Home
          </Link>
          <Link
            href="/feedback"
            className="text-grayishViolet hover:text-veryDarkViolet"
          >
            Feedback
          </Link>
          <Link
            href="/features"
            className="text-grayishViolet hover:text-veryDarkViolet"
          >
            Features
          </Link>
    </Fragment>
  );
}
