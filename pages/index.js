import HomeInfo from "../components/layout/main-pages/home-info";
import Head from "next/head";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Match Journal</title>
        <meta name="description" content="Main Page" />
      </Head>
      <HomeInfo />
    </Fragment>
  );
}
export default Home;
