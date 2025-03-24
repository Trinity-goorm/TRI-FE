import { getMessaging, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { notificationState } from '../atoms/notificationState';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

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

const NotificationHandler = () => {
  const [notification, setNotification] = useRecoilState(notificationState);

  useEffect(() => {
    const handleMessage = (payload) => {
      setNotification({
        isModalOpen: true,
        title: payload.data.title || '',
        body: payload.data.body || '',
        redirectUrl: payload.data.redirectUrl || '',
      });
    };

    const unsubscribe = onMessage(messaging, handleMessage);

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
};

export default NotificationHandler;
