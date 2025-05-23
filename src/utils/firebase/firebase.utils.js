// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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

const googleAuthProvider = new GoogleAuthProvider()
googleAuthProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) {
    return
  }

  const userDocRef = await doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// import data to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('Done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items

    return acc
  }, {})
}






