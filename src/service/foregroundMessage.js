import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import logoTest from "../../public/logo_test.png";

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDID,
  appId: import.meta.env.VITE_APP_ID,
};
initializeApp(config);
const messaging = getMessaging();

export const setupMessageListener = () => {
  onMessage(messaging, (payload) => {
    console.log("Message received in foreground:", payload);

    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      tag: "catchping",
      icon: logoTest,
    };

    const notification = new Notification(
      notificationTitle,
      notificationOptions
    );

    notification.onclick = (event) => {
      event.preventDefault();
      const redirectUrl = payload.data.url;
      if (redirectUrl) window.open(redirectUrl, "_self");
      notification.close();
    };
  });
};
