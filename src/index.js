import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2zIjoZ40l0SDyjkbPaVZnATghepsAqcU",
  authDomain: "coffee-house-aa6a9.firebaseapp.com",
  projectId: "coffee-house-aa6a9",
  storageBucket: "coffee-house-aa6a9.appspot.com",
  messagingSenderId: "140147120704",
  appId: "1:140147120704:web:3bc29d4df9954952d59da5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
