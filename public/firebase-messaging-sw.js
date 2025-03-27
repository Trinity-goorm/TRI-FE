importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

console.log('✅ Service Worker 실행됨');

const config = {
  apiKey: 'AIzaSyAHpQFkV6TfhI3Ej2neyWMIVSQegHAxHDM',
  authDomain: 'catchping-fcmserver.firebaseapp.com',
  projectId: 'catchping-fcmserver',
  storageBucket: 'catchping-fcmserver.firebasestorage.app',
  messagingSenderId: '502059574661',
  appId: '1:502059574661:web:5e52a72c28988d1a2410ec',
};

const app = firebase.initializeApp(config);

self.addEventListener('install', function () {
  console.log('✅ Service Worker 설치됨');
  self.skipWaiting();
});

self.addEventListener('activate', function () {
  console.log('✅ Service Worker 활성화됨');
});

self.addEventListener('notificationclick', (e) => {
  console.log('🔔 FCM 푸시 알림 수신됨:', e);
  e.preventDefault();
  e.notification.close();
  const redirectUrl = e.notification.data?.url;
  clients.openWindow(redirectUrl || '/');
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('📩 백그라운드 푸시 메시지 수신됨:', payload);
  self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: '/logo_test.png',
  });
});
