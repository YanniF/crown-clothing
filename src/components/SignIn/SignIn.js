import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import './signIn.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error('Error signing in', error);
		}
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required />
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
