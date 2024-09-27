import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDzhupJibcDyJZrUyTGVmjQx41xblTbnSU",
  authDomain: "trophic-ff286.firebaseapp.com",
  projectId: "trophic-ff286",
  storageBucket: "trophic-ff286.appspot.com",
  messagingSenderId: "176086186713",
  appId: "1:176086186713:web:32844e2fa375a6efbc5cc8",
  measurementId: "G-62S1DV58Q0",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, app };
