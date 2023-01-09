import Link from "next/link";
import { Fragment } from "react";

export default function LeftMenu() {
  return (
    <Fragment>
      <Link href="/" className="text-grayishViolet hover:text-veryDarkViolet">
        Home
      </Link>
      <Link href="/" className="text-grayishViolet hover:text-veryDarkViolet">
        Features
      </Link>
      <Link href="/" className="text-grayishViolet hover:text-veryDarkViolet">
        Feedback
      </Link>
    </Fragment>
  );
}
