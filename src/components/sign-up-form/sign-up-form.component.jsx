import {useContext, useState} from "react";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.js";
import './sign-up-form.styles.scss'
import {UserContext} from "../../context/user.context.jsx";

const initialFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [form, setForm] = useState(initialFormState)
  const [ loading, setLoading ] = useState(false)
  const { setUser } = useContext(UserContext)

  const {displayName, email, password, confirmPassword} = form

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

    if (password !== confirmPassword) {
      alert('Passwords do not match')

      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      setUser(user)

      await createUserDocumentFromAuth(user, { displayName })

      resetForm()
    }
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      }
      else {
        console.log('user creation encountered an error', error)
      }
    }
    finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setForm(initialFormState)
  }

  return (
    <div className='sign-up-container'>
      <h2>Don&#39;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type='submit' disabled={loading}>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
