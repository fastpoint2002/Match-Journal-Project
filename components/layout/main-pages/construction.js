import HomeWrapper from "../HomeWrapper";
import Link from "next/link";
import { IoIosConstruct } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";

export default function PageConstructionMessage() {
  return (
    <HomeWrapper>
      <section id="home">
        <div className="container mx-auto flex flex-col-reverse justify-center p-6 lg:flex-row">
          <div className="mb-44 flex flex-col items-center space-y-10 lg:mt-16 lg:w-4/5 xl:mb-52">
            <h1 className="text-center text-5xl font-bold lg:max-w-2xl lg:text-center lg:text-6xl">
              Page Under Construction
              <div className="flex flex-row justify-center">
                <GrUserWorker />
                <IoIosConstruct />
              </div>
            </h1>
            <p className="text-center text-2xl text-gray-400 lg:max-w-lg lg:text-center">
              Hang tight as we work to develop the website
            </p>
            <div className="mx-auto lg:mx-0">
              <Link
                href="/"
                className="rounded-full bg-cyan py-5 px-10 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
              >
                To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}
