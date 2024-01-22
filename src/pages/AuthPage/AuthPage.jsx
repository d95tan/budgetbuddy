import LoginForm from "../../components/Auth_LoginForm/LoginForm"
import SignupForm from "../../components/Auth_SignupForm/SignupForm";
import NavbarOut from "../../components/Navbar/NavbarOut/NavbarOut";

export default function AuthPage() {
  return (
    <>
      <NavbarOut />
      <h3> Login </h3>
      <LoginForm />
      <SignupForm />
    </>
  );
}