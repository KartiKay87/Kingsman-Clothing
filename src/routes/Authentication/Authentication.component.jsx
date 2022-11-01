import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import SingUpForm from "../../Components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
