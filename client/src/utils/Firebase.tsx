import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDtfwHYEJR1lHLHVda6_NCnS244n2i-8y8",
  authDomain: "value-app-8b172.firebaseapp.com",
  projectId: "value-app-8b172",
  storageBucket: "value-app-8b172.appspot.com",
  messagingSenderId: "528063503613",
  appId: "1:528063503613:web:4410e09bac5a09fefbf294",
  measurementId: "G-83W4E39YH1",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, app };
