import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyAS-wMQmidE9kxhHXun_4QQbRfnenu_uU0",
    authDomain: "instagram-alex.firebaseapp.com",
    projectId: "instagram-alex",
    storageBucket: "instagram-alex.appspot.com",
    messagingSenderId: "862493848294",
    appId: "1:862493848294:web:42cbef80a07adb24c34127"
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;



export { firebase, FieldValue }