importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: 'AIzaSyCAUqNGSxrBB4XY92qgz-Fqg0LmCJwzIgo',
    authDomain: 'hekto-app.firebaseapp.com',
    projectId: 'hekto-app',
    storageBucket: 'hekto-app.appspot.com',
    messagingSenderId: '721899590110',
    appId: '1:721899590110:web:fccd6c56c6a41c706d8d4f',
    measurementId: 'G-V1ZKTMDEZ1',
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
