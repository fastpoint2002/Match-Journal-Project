import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger(props) {
  return (
    <Fragment>
      <button className="lg:hidden" onClick={props.function}>
        <GiHamburgerMenu size={25}/>
      </button>
    </Fragment>
  );
}
