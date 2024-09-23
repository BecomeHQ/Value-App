importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyDtfwHYEJR1lHLHVda6_NCnS244n2i-8y8",
  authDomain: "value-app-8b172.firebaseapp.com",
  projectId: "value-app-8b172",
  storageBucket: "value-app-8b172.appspot.com",
  messagingSenderId: "528063503613",
  appId: "1:528063503613:web:4410e09bac5a09fefbf294",
  measurementId: "G-83W4E39YH1",
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
