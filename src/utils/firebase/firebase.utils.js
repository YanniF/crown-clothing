// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA30IT3GUNHsiKJoLXeVK4flw5beED8Oqc",
  authDomain: "yanni-crown-clothing-ef043.firebaseapp.com",
  projectId: "yanni-crown-clothing-ef043",
  storageBucket: "yanni-crown-clothing-ef043.appspot.com",
  messagingSenderId: "439639788599",
  appId: "1:439639788599:web:df944533c351972c9ac3b2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date()
      })
    }
    catch (error) {
      console.log('Error creating the user', error.message)
    }
  }

  return userDocRef
}
