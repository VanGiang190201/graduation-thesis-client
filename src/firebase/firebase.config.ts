// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, MessagePayload, onMessage } from 'firebase/messaging';

export const firebaseConfig = {
    apiKey: 'AIzaSyBFBedGZyNcj_1E-NvsRVV8ungs9ABZL_s',
    authDomain: 'hekto-334ba.firebaseapp.com',
    projectId: 'hekto-334ba',
    storageBucket: 'hekto-334ba.appspot.com',
    messagingSenderId: '428863195083',
    appId: '1:428863195083:web:72b34bf85a6cef5b1c984e',
    measurementId: 'G-7LBB5MF95T',
};

// Initialize Firebase
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getMessagingToken = async (setTokenFound: any) => {
    return getToken(messaging, {
        vapidKey: 'BFxvQ_MQTNsGOuKmRltZm3_ErKQ1P0KwUTqSkjhWrCA9nOa8POEj49qIG0hb6VAEjHYN084MeL2z4T8Xfphgne4',
    })
        .then((currentToken) => {
            console.log(currentToken);
            if (currentToken) {
                setTokenFound(currentToken);
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        console.log('Test');
        onMessage(messaging, (payload: MessagePayload) => {
            console.log(payload);
            resolve(payload);
        });
    });

export default initializeAuthentication;
