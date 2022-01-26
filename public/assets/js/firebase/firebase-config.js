/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGGXonSi7E3X2aCk-pEQjsYrzq4TsEkz8",
    authDomain: "metrica-31f16.firebaseapp.com",
    databaseURL: "https://metrica-31f16-default-rtdb.firebaseio.com",
    projectId: "metrica-31f16",
    storageBucket: "metrica-31f16.appspot.com",
    messagingSenderId: "782036737669",
    appId: "1:782036737669:web:d18239b61d5b972d6fd3ec",
    measurementId: "G-SK9Y2YF6WQ"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }