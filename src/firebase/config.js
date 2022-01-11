import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMphCFPZGfNrcxi9nRoZdp_HqsP-oCdkw",
  authDomain: "udemy-vue-firebase-sights.firebaseapp.com",
  projectId: "udemy-vue-firebase-sights",
  storageBucket: "udemy-vue-firebase-sights.appspot.com",
  messagingSenderId: "479970108095",
  appId: "1:479970108095:web:9ebc76de11b153de891c0a"
}

// init firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }