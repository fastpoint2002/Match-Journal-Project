import { Fragment, useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  function hamburgerHandler() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  if (!open) {
    return (
      <Fragment>
        <button className="lg:hidden" onClick={hamburgerHandler}>
          Hamberger
        </button>

        <div
          id="menu"
          className="z-100 absolute left-6 right-6 top-20 hidden rounded-lg bg-darkViolet p-6"
        >
          <div className="jusitify-center flex w-full flex-col items-center space-y-6 rounded-sm font-bold text-white">
            <Link href="/" className="w-full text-center">
              Home
            </Link>
            <Link href="/" className="w-full text-center">
              Features
            </Link>
            <Link href="/" className="w-full text-center">
              Feedback
            </Link>
            <Link
              href={"/"}
              className="w-full border-t border-gray-400 pt-6 text-center"
            >
              Login
            </Link>
            <Link
              href="/"
              className="w-full rounded-full bg-cyan py-3 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <button className="lg:hidden" onClick={hamburgerHandler}>
          Hamberger
        </button>

        <div
          id="menu"
          className="z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6"
        >
          <div className="jusitify-center flex w-full flex-col items-center space-y-6 rounded-sm font-bold text-white">
            <Link href="/" className="w-full text-center">
              Home
            </Link>
            <Link href="/" className="w-full text-center">
              Features
            </Link>
            <Link href="/" className="w-full text-center">
              Feedback
            </Link>
            <Link
              href={"/"}
              className="w-full border-t border-gray-400 pt-6 text-center"
            >
              Login
            </Link>
            <Link
              href="/"
              className="w-full rounded-full bg-cyan py-3 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
