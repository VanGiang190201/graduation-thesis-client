// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, MessagePayload, onMessage } from "firebase/messaging"

export const firebaseConfig = {
    apiKey: "AIzaSyCAUqNGSxrBB4XY92qgz-Fqg0LmCJwzIgo",
    authDomain: "hekto-app.firebaseapp.com",
    projectId: "hekto-app",
    storageBucket: "hekto-app.appspot.com",
    messagingSenderId: "721899590110",
    appId: "1:721899590110:web:fccd6c56c6a41c706d8d4f",
    measurementId: "G-V1ZKTMDEZ1"
};

// Initialize Firebase
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getMessagingToken = async () => {
    let currentToken = "";
    if (!messaging) return;
    try {
        currentToken = await getToken(messaging, { vapidKey: 'BLlscsXXoXaVIc9SFv0AUR4Lw8AL2lTLNJ3nwxOjVIctO3f5RzZNY7BqxD3Iyl7bUrepPrFravwJNNPAWOAvQt8' });
        console.log("FCM registration token", currentToken);
    } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
    }
    return currentToken;
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload: MessagePayload) => {
            resolve(payload);
        });
    });

export default initializeAuthentication;