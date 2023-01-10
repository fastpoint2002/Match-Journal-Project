import Link from "next/link";
import LogoutButton from "./logout-button";

export default function MenuList(props) {
  const mainClassString =
    "z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6 hidden" +
    props.hidden;

  function signOut() {
    if (props.first === "Logout") {
      async () => {
        await supabaseClient.auth.signOut();
        console.log(test)
      };
    }
    props.menuHandler();
  }

  return (
    <div id="menu" className={mainClassString}>
      <div className="jusitify-center flex w-full flex-col items-center space-y-6 rounded-sm font-bold text-white">
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
        <LogoutButton first={props.first}/>
        <Link
          href={"/" + props.slink}
          className="w-full rounded-full bg-cyan py-3 text-center"
          onClick={props.menuHandler}
        >
          {props.second}
        </Link>
      </div>
    </div>
  );
}
