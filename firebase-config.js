// Dream2Moon Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPp-JsePgIM4Y3MrFrXEMLiv1GW3sJGKU",
  authDomain: "dream2moon.firebaseapp.com",
  projectId: "dream2moon",
  storageBucket: "dream2moon.firebasestorage.app",
  messagingSenderId: "172765828532",
  appId: "1:172765828532:web:d31a0b1dae8cc5752bcee1",
  measurementId: "G-WJ5NYQ96MW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
