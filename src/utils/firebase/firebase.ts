import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// creates an instance of a firebase app
initializeApp(firebaseConfig)


const googleAuthProvider = new GoogleAuthProvider();

// always prompts google to select an account when signing in
googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  try {
    return signInWithPopup(auth, googleAuthProvider);
  } catch (error) {
    
  }
}
export const authListener = (callback?: (args: any) => void) => {
  try {
    if (!callback) return;

    onAuthStateChanged(auth, callback);
  } catch (error) {
    
  }
}

export const signOutGoogle = () => auth.signOut();
