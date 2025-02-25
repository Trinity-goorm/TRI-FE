importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

console.log("✅ Service Worker 실행됨");

const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = firebase.initializeApp(config);

self.addEventListener("install", function () {
    console.log("✅ Service Worker 설치됨");
    self.skipWaiting();
});

self.addEventListener("activate", function () {
    console.log("✅ Service Worker 활성화됨");
});

self.addEventListener("notificationclick", (e) => {
    console.log("🔔 FCM 푸시 알림 수신됨:", e);
    e.preventDefault();
    e.notification.close();
    const redirectUrl = e.notification.data?.url;
    clients.openWindow(redirectUrl || "/");
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("📩 백그라운드 푸시 메시지 수신됨:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/logo_test.png",
    });
});