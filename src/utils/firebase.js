// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY, //VARIABLE DE ENTORNO QUE INCLUYE LA APIKEY SE USA  PARA NO SUBIRLO DIRECTO YA QUE ESTA MAL
  authDomain: "react-coder-house22.firebaseapp.com",
  projectId: "react-coder-house22",
  storageBucket: "react-coder-house22.appspot.com",
  messagingSenderId: "478321723334",
  appId: "1:478321723334:web:5e288656b100d34aeb14c7",
  measurementId: "G-566115EDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
