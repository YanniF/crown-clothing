import {useState} from "react";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import './sign-in-form.styles.scss'
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils.js";
import {buttonTypeClasses} from "../button/button.type.js";

const initialFormState = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [form, setForm] = useState(initialFormState)
  const [ loading, setLoading ] = useState(false)

  const { email, password} = form

  const handleChange = (event) => {
    const {name, value} = event.target

    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)

      console.log(user)
      resetForm()
    }
    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
    finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async() => {
    const { user } = await signInWithGooglePopup()

    const userDocRef = await createUserDocumentFromAuth(user)

    console.log(userDocRef)
  }

  const resetForm = () => {
    setForm(initialFormState)
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit' disabled={loading}>Sign In</Button>
          <Button
            buttonType={buttonTypeClasses.google}
            type='button'
            onClick={signInWithGoogle}
            disabled={loading}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm