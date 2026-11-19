import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD2v_fBk5MskpShHIQ-m9xwjsnsOLk5ak8",
    authDomain: "mernai-f2c52.firebaseapp.com",
    projectId: "mernai-f2c52",
    storageBucket: "mernai-f2c52.firebasestorage.app",
    messagingSenderId: "484675312689",
    appId: "1:484675312689:web:5357eb368f32c4922f0910",
    measurementId: "G-84Y2KWE90G"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider};
