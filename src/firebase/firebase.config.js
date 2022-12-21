// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC5vuNCmurIpYwbytgTW9AIPlD8JhFqTg",
  authDomain: "tic-tac-toe-e2e54.firebaseapp.com",
  projectId: "tic-tac-toe-e2e54",
  storageBucket: "tic-tac-toe-e2e54.appspot.com",
  messagingSenderId: "1041687590632",
  appId: "1:1041687590632:web:df2c68d5990f6ab0237b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;