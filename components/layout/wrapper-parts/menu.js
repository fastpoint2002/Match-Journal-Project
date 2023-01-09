import { Fragment, useState } from "react";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
import Hamburger from "./menu-pieces.js/hamburger";
import MenuList from "./menu-pieces.js/links-list";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const session = useSession(); // implement changing profile and logout on website

  let first = 'Log In'
  let second = 'Sign Up'

  if (session) {
    first = 'Logout'
    second = 'Profile'
  } else {
    first = 'Log In'
    second = 'Sign Up'
  }

  function menuHandler() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  // it is flipped but works for some reason
  if (open) {
    return (
      <Fragment>
        <Hamburger function={menuHandler} />

        <MenuList hidden='hidden' first={first} second={second} menuHandler={menuHandler}/>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Hamburger function={menuHandler} />

        <MenuList hidden='' first={first} second={second} menuHandler={menuHandler}/>
      </Fragment>
    );
  }
}
