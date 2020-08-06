import React from "react";

import SignInContainer from "../../components/sign-in/SignIn.container";
import SignUpContainer from "../../components/sign-up/SignUp.container";
import { SignInAndSignUpContainer } from "./SignInAndSignUp.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignInContainer />
      <SignUpContainer />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
