import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCukGEaep01g-AAXRqAU0tQnmkhDo4gpUU",
  authDomain: "prepwise-c2a22.firebaseapp.com",
  projectId: "prepwise-c2a22",
  storageBucket: "prepwise-c2a22.appspot.com", // 🔧 Fixed `.app` typo
  messagingSenderId: "396992094843",
  appId: "1:396992094843:web:cc661c7b4fa2be84ccb8de",
  measurementId: "G-Z2Y11Y7C5J",
};

// Initialize Firebase App
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Auth and Firestore (safe for server)
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (only in client-side environment)
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(console.error);
}

export { app, analytics };
