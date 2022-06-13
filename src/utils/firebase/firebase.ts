import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import storage from "utils/storage";

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

export const signInWithGooglePopup = async () => {
  try {
    return await signInWithPopup(auth, googleAuthProvider);
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

export const refreshSession = async () => {
  const user = auth.currentUser;

  if (user == null) return;

  let refreshToken = await user.getIdToken();

  console.log(`REFRESH: ${refreshToken}`);

  if (!refreshToken) return;

  if ('token' in localStorage) {
    storage.clearToken();
  }

  storage.setToken(refreshToken);
}