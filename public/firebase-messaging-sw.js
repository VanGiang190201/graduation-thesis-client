importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: 'AIzaSyBFBedGZyNcj_1E-NvsRVV8ungs9ABZL_s',
    authDomain: 'hekto-334ba.firebaseapp.com',
    projectId: 'hekto-334ba',
    storageBucket: 'hekto-334ba.appspot.com',
    messagingSenderId: '428863195083',
    appId: '1:428863195083:web:72b34bf85a6cef5b1c984e',
    measurementId: 'G-7LBB5MF95T',
};

const defaultConfig = {
    apiKey: true,
    projectId: true,
    messagingSenderId: true,
    appId: true,
};

firebase.initializeApp(self.firebaseConfig || defaultConfig);
if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging();
    const channel = new BroadcastChannel('notifications');
    messaging.onBackgroundMessage(function (payload) {
        channel.postMessage(payload);
    });
}
