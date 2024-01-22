import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyBRqJcJWMAKkN0rzuCEK53lWnKgVrkIZF0",
  authDomain: "fir-c8340.firebaseapp.com",
  projectId: "fir-c8340",
  storageBucket: "fir-c8340.appspot.com",
  messagingSenderId: "289875684800",
  appId: "1:289875684800:web:93aff5ab916d056689ac25"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}