import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRFRbRd4s6e8RJR3u7wAMETw57cszVnRo",
  authDomain: "crwn-db-66406.firebaseapp.com",
  databaseURL: "https://crwn-db-66406.firebaseio.com",
  projectId: "crwn-db-66406",
  storageBucket: "crwn-db-66406.appspot.com",
  messagingSenderId: "717558162680",
  appId: "1:717558162680:web:cae9f9e4d59af9b976870d",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth === null) {
    return;
  }

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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
