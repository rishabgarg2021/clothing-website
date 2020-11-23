import firebase from "firebase/app"

//it will give the access the firebase store
import 'firebase/firestore'

import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyDaGu8Pwjb_W3Ws9Im-i4J5rwt7RJTZDR0",
    authDomain: "clothing-db-5f4db.firebaseapp.com",
    databaseURL: "https://clothing-db-5f4db.firebaseio.com",
    projectId: "clothing-db-5f4db",
    storageBucket: "clothing-db-5f4db.appspot.com",
    messagingSenderId: "696046476391",
    appId: "1:696046476391:web:cffd3272a07a2796b648c2",
    measurementId: "G-Z0F39WDLLM"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {

    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //we need to create the user here if it is not present in our db
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdDate = new Date();
        try{
            await userRef.set({
                displayName : displayName,
                email : email, createdDate : createdDate,  ...additionalData
            })

        }catch(error){
            console.log("error creating user is ", error.message); 

        }

    }
    console.log(snapShot);
    return userRef;

  }

firebase.initializeApp(config);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;