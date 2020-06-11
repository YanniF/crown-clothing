import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/Header/Header';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	checkIfLoggedIn = () => {
		if (this.props.currentUser) {
			return <Redirect to="/" />;
		}
		else {
			return <SignInSignUpPage />;
		}
	};

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" render={this.checkIfLoggedIn} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
