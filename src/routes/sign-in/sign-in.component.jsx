import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popups </button>
    </div>
  );
};

export default SignIn;
