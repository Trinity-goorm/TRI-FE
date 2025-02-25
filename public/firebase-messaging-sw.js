importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = firebase.initializeApp(config);

self.addEventListener("install", function (e) {
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    console.log("fcm service worker가 실행되었습니다.");
});

self.addEventListener("notificationclick", (e) => {
    e.preventDefault();
    e.notification.close();
    const redirectUrl = e.notification.data?.url;

    if (redirectUrl) {
        clients.openWindow(redirectUrl);
    } else {
        clients.openWindow("/");
    }
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message",
        payload
    );
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: "/logo_test.png",
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
