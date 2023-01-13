import Link from "next/link";
import LeftMenu from "./wrapper-parts/left-menu-links";
import RightLinks from "./wrapper-parts/right-menu-links";
import Menu from "./wrapper-parts/menu";
import InstagramIcon from "../../public/icons/icon-instagram";
import TwitterIcon from "../../public/icons/icon-twitter";
import FacebookIcon from "../../public/icons/icon-facebook";

export default function HomeWrapper(props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Nav Container */}
      <nav className="container relative mx-auto p-6">
        {/* Flex container for all items */}
        <div className="flex items-center justify-between">
          {/* Flex container for logo/menu */}
          <div className="flex items-center space-x-20">
            {/* logo (now is just text) */}
            <h1 className="text-3xl font-extrabold">MatchJournal</h1>
            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <LeftMenu />
            </div>
          </div>
          {/* Right buttons menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <RightLinks />
          </div>
          <div className="lg:hidden">
            <Menu />
          </div>
        </div>
        {/* Mobile Menu */}
      </nav>
      <div className="grow">

      {props.children}
      </div>

      <footer className="bg-veryDarkViolet py-16">
        <div className="jusitfy-between container mx-auto flex flex-col items-center space-y-16 md:flex-row md:items-start md:space-y-0">
          {/* Menus Container */}
          <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0 mx-auto">
            {/* Menu 1 */}
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="mb-5 font-bold capitalize text-white">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <Link
                  href="/"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Journaling
                </Link>
                <Link
                  href="/"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Analytics
                </Link>
                <Link
                  href="/"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Account Linking
                </Link>
              </div>
            </div>
            {/* Menu 2 */}
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="mb-5 font-bold capitalize text-white">
                Contact
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <Link
                  href="/"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Feedback
                </Link>
                <Link
                  href="/"
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
          {/* Social Container */}
          <div className="flex space-x-6">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
      </footer>
    </div>
  );
}
