import HomeWrapper from "../HomeWrapper";
import Link from "next/link";

export default function ProfilePageBody() {
  return (
    <HomeWrapper>
      <body class="bg-gray-300 antialiased p-7">
        <div class="container mx-auto my-60">
          <div>
            <div class="relative mx-auto w-5/6 rounded-lg bg-white shadow  md:w-5/6 lg:w-4/6 xl:w-3/6">
              <div class="flex justify-center">
              <h1 className="text-center text-5xl font-bold lg:text-center lg:text-6xl">Your Profile</h1>
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"> */}
              </div>

              <div class="mt-16">
                <h1 class="text-center text-3xl font-bold text-gray-900">
                  Pantazi Software
                </h1>
                <p class="text-center text-sm font-medium text-gray-400">
                  UI Components Factory
                </p>
                <p>
                  <span></span>
                </p>
                <div class="my-5 px-6">
                  <a
                    href="#"
                    class="block rounded-lg bg-gray-900 px-6 py-3 text-center font-medium leading-6 text-gray-200 hover:bg-black hover:text-white"
                  >
                    Connect with <span class="font-bold">@pantazisoft</span>
                  </a>
                </div>
                <div class="my-5 flex items-center justify-between px-6">
                  <a
                    href=""
                    class="w-full rounded py-3 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in hover:bg-gray-100 hover:text-gray-900"
                  >
                    Facebook
                  </a>
                  <a
                    href=""
                    class="w-full rounded py-3 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in hover:bg-gray-100 hover:text-gray-900"
                  >
                    Twitter
                  </a>
                  <a
                    href=""
                    class="w-full rounded py-3 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in hover:bg-gray-100 hover:text-gray-900"
                  >
                    Instagram
                  </a>
                  <a
                    href=""
                    class="w-full rounded py-3 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in hover:bg-gray-100 hover:text-gray-900"
                  >
                    Email
                  </a>
                </div>

                <div class="w-full">
                  <h3 class="px-6 text-left font-medium text-gray-900">
                    Recent activites
                  </h3>
                  <div class="mt-5 flex w-full flex-col items-center overflow-hidden text-sm">
                    <a
                      href="#"
                      class="block w-full w-full border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100"
                    >
                      {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> */}
                      Updated his status
                      <span class="text-xs text-gray-500">24 min ago</span>
                    </a>

                    <a
                      href="#"
                      class="block w-full w-full border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100"
                    >
                      {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> */}
                      Added new profile picture
                      <span class="text-xs text-gray-500">42 min ago</span>
                    </a>

                    <a
                      href="#"
                      class="block w-full w-full border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100"
                    >
                      {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> */}
                      Posted new article in{" "}
                      <span class="font-bold">#Web Dev</span>
                      <span class="text-xs text-gray-500">49 min ago</span>
                    </a>

                    <a
                      href="#"
                      class="block w-full w-full border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100"
                    >
                      {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> */}
                      Edited website settings
                      <span class="text-xs text-gray-500">1 day ago</span>
                    </a>

                    <a
                      href="#"
                      class="block w-full w-full overflow-hidden border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100"
                    >
                      {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> */}
                      Added new rank
                      <span class="text-xs text-gray-500">5 days ago</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </HomeWrapper>
  );
}

// <section id="home">
//   <div className="container mx-auto flex flex-col-reverse justify-center p-6 lg:flex-row">
//     <div className="mb-44 flex flex-col items-center space-y-10 lg:mt-16 lg:w-4/5 xl:mb-52">
//       <h1 className="text-center text-5xl font-bold lg:max-w-2xl lg:text-center lg:text-6xl">
//         Page Under Construction
//         <div className="flex flex-row justify-center">
//         </div>
//       </h1>
//       <p className="text-center text-2xl text-gray-400 lg:max-w-lg lg:text-center">
//         Hang tight as we work to develop the website
//       </p>
//       <div className="mx-auto lg:mx-0">
//         <Link
//           href="/"
//           className="rounded-full bg-cyan py-5 px-10 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
//         >
//           To Home
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>
