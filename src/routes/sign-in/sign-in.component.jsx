import {
  auth,
  singInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../Utils/firebase/firebase.utils";

import SingUpForm from "../../Components/sign-up-form/sign-up-form.component";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // useEffect(() => {
  //   async function getResponse() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }
  //   getResponse();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popups </button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
