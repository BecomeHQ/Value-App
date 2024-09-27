importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyDzhupJibcDyJZrUyTGVmjQx41xblTbnSU",
  authDomain: "trophic-ff286.firebaseapp.com",
  projectId: "trophic-ff286",
  storageBucket: "trophic-ff286.appspot.com",
  messagingSenderId: "176086186713",
  appId: "1:176086186713:web:32844e2fa375a6efbc5cc8",
  measurementId: "G-62S1DV58Q0",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
