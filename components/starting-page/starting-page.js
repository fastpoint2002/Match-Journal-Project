import HomeWrapper from "../layout/HomeWrapper";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <HomeWrapper>
      <section id="home">
        <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row justify-center">
          <div className="mb-44 flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-center lg:text-6xl">
              More than just a journal
            </h1>
            <p className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-center">
              Build your personal match database and get detailed insights on
              your performance
            </p>
            <div className="mx-auto lg:mx-0">
              <Link
                href="/"
                className="rounded-full bg-cyan py-5 px-10 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}

export default StartingPageContent;