import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAq2OPWNt6CctwH6b3C8R5R1ENqiLW4brI",
  authDomain: "san-inmobiliaria.firebaseapp.com",
  projectId: "san-inmobiliaria",
  storageBucket: "san-inmobiliaria.appspot.com",
  messagingSenderId: "197791830892",
  appId: "1:197791830892:web:1f1f31d5dfb785f5ca1949",
  measurementId: "G-RYEHRCP75B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);