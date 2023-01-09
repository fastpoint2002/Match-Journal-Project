import Link from "next/link";

export default function HomeWrapper(props) {
  return (
    <div>
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
              <Link
                href="/"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </Link>
              <Link
                href="/"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Feedback
              </Link>
            </div>
          </div>
          {/* Right buttons menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <Link href="/" className="hover:text-veryDarkViolet">
              Login
            </Link>
            <Link
              href="/"
              className="rounded-full bg-cyan px-8 py-3 font-bold text-white hover:opacity-70"
            >
              Sign Up
            </Link>
          </div>
          {/* Hamberget Menu */}
          <button id="menu-btn" className="block hamburger lg:hidden focus:outline-none" type="button">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="menu" className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
            <div className="flex flex-col items-center jusitify-center w-full space-y-6 font-bold text-white rounded-sm">
                <Link href="/" className="w-full text-center">Home</Link>
                <Link href="/" className="w-full text-center">Features</Link>
                <Link href="/" className="w-full text-center">Feedback</Link>
                <Link href={'/'} className="w-full pt-6 border-t border-gray-400 text-center">Login</Link>
                <Link href="/" className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</Link>
            </div>
        </div>
      </nav>
      {props.children}

      <footer className="bg-veryDarkViolet py-16">
        <div className="jusitfy-between container mx-auto flex flex-col items-center space-y-16 md:flex-row md:items-start md:space-y-0">
          {/* Menus Container */}
          <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
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
            <Link href="/">
                <img src="../public/social/icon-facebook.svg" alt="" className="ficon" />
            </Link>
            <Link href="/">
                <img src="../public/social/icon-twitter.svg" alt="" className="ficon" />
            </Link>
            <Link href="/">
                <img src="../public/social/icon-instagram.svg" alt="" className="ficon" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
