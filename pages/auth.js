import { Fragment } from "react";
import AuthForm from "../components/auth/auth-form";
import Head from "next/head";

function AuthPage() {
  return (
    <Fragment>
      <Head>
        <title>Log In | Match Journal</title>
        <meta name="description" content="Log into your account" />
      </Head>
      <AuthForm />
    </Fragment>
  );
}

export default AuthPage;
