import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import './auth.styles.scss'

const Auth = () => {
  return (
    <div className="auth-container">
      <SignInForm/>
      <SignUpFormComponent />
    </div>
  )
}

export default Auth
