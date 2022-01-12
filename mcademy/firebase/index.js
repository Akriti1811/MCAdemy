// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCLUOx1c12h2HdrZRuQETV7UCkAsRj_XII",
  authDomain: "mcademy-517d6.firebaseapp.com",
  projectId: "mcademy-517d6",
  storageBucket: "mcademy-517d6.appspot.com",
  messagingSenderId: "530530428856",
  appId: "1:530530428856:web:b130c05d8b09730305d14d",
  measurementId: "G-ZQ8X7T5TH2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export default auth;

