import { Fragment, useState } from "react";
import Hamburger from "./menu-pieces.js/hamburger";
import MenuList from "./menu-pieces.js/menu-list";

export default function Menu() {
  const [hidden, setHidden] = useState("");

  function menuHandler() {
    if (hidden === "") {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  }

  return (
    <Fragment>
      <Hamburger function={menuHandler} />

      <MenuList hidden={hidden} menuHandler={menuHandler} />
    </Fragment>
  );
}
