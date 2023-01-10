import { Fragment, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import Hamburger from "./menu-pieces.js/hamburger";
import MenuList from "./menu-pieces.js/links-list";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const session = useSessionContext(); // implement changing profile and logout on website

  let first = "Log In";
  let second = "Sign Up";
  let flink = "";
  let slink = "profile";

  if (session) {
    first = "Logout";
    second = "Profile";
    flink = "";
    slink = "profile";
  } else {
    first = "Log In";
    second = "Sign Up";
    flink = "auth";
    slink = "auth";
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

        <MenuList
          hidden="hidden"
          first={first}
          second={second}
          menuHandler={menuHandler}
          flink={flink}
          slink={slink}
        />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Hamburger function={menuHandler} />

        <MenuList
          hidden=""
          first={first}
          second={second}
          menuHandler={menuHandler}
          flink={flink}
          slink={slink}
        />
      </Fragment>
    );
  }
}
