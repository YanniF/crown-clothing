import React, { Component } from 'react'

import './signIn.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value }, () => console.log(this.state))
  }

  render() {
    const { email, password } = this.state

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={email} onChange={(e) => this.handleChange(e)} required />
          <label>Email</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SignIn
