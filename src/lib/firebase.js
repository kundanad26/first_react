import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//here is where we want to call seed file (only once)
const config={
    apiKey: "AIzaSyAcPs4H2kiVakNWsFpPev3D4ll23tnoiCg",
  authDomain: "instagram-yt-a67c3.firebaseapp.com",
  projectId: "instagram-yt-a67c3",
  storageBucket: "instagram-yt-a67c3.appspot.com",
  messagingSenderId: "36958217373",
  appId: "1:36958217373:web:43237b29eb2e1e94be2074"
};
const firebase= Firebase.initializeApp(config);
const { Fieldvalue }=Firebase.firestore;
console.log('firebase',firebase);
export {firebase,Fieldvalue};