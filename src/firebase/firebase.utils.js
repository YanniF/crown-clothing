import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAoG3sv1Dle4u4OfXv0Sp6i1s7hI0F2DZY',
	authDomain: 'yanni-crown-clothing.firebaseapp.com',
	databaseURL: 'https://yanni-crown-clothing.firebaseio.com',
	projectId: 'yanni-crown-clothing',
	storageBucket: 'yanni-crown-clothing.appspot.com',
	messagingSenderId: '863133429492',
	appId: '1:863133429492:web:a187d4f4305d1aa843b8a1',
	measurementId: 'G-CZW9HN0F52',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
