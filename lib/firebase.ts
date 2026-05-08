import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLjB8BmDjTtwkeuu31OzpB9Y6HhOomYeU",
  authDomain: "nina-flower-haifa.firebaseapp.com",
  projectId: "nina-flower-haifa",
  storageBucket: "nina-flower-haifa.firebasestorage.app",
  messagingSenderId: "138454507073",
  appId: "1:138454507073:web:13336c91068e982696f0c0",
};

/** Initialise l’app Firebase côté client (à appeler depuis un composant `"use client"`). */
export function getFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}
