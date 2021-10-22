import Firebase from 'firebase/app';
import  {FieldValue} from 'firebase/firestore';
import 'firebase/auth';
const config = {
apiKey: "AIzaSyAcPs4H2kiVakNWsFpPev3D4ll23tnoiCg",
authDomain: "instagram-yt-a67c3.firebaseapp.com",
projectId: "instagram-yt-a67c3",
storageBucket: "instagram-yt-a67c3.appspot.com",
messagingSenderId: "36958217373",
appId: "1:36958217373:web:43237b29eb2e1e94be2074"
};
 //const firestore=firebase.firestore();
export const firebase = Firebase.initializeApp(config);
export  const FV = FieldValue;
//export { firebase, FieldValue };