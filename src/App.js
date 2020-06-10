import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils'
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import Header from './components/Header/Header';

class App extends React.Component {
	state = {
		currentUser: null
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user })
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render () {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
