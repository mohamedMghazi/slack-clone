import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiprrVkq0I8G8bkyXf7yvNFjTX_TqQ-BE",
    authDomain: "slack-clone-01.firebaseapp.com",
    databaseURL: "https://slack-clone-01.firebaseio.com",
    projectId: "slack-clone-01",
    storageBucket: "slack-clone-01.appspot.com",
    messagingSenderId: "175616028789",
    appId: "1:175616028789:web:0be624ed37a1987062083c",
    measurementId: "G-6G5DVWYHR8"
};
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
