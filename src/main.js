import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwpHMCjpPAYusMNKSunLyF8tbrnWyimh4",
    authDomain: "short-link-generator-b371d.firebaseapp.com",
    projectId: "short-link-generator-b371d",
    storageBucket: "short-link-generator-b371d.firebasestorage.app",
    messagingSenderId: "901701169098",
    appId: "1:901701169098:web:2d18823a5974f3a5c26933"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = createApp(App);
app.provide('db', db);
app.mount('#app');
