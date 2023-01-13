import { Fragment } from "react";
import AuthForm from "../components/auth/auth-form";

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
