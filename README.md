# Short Link Generator

## Overview
Short Link Generator is a web application that allows users to shorten long URLs into short, shareable links. It is built using **Vue.js**, **Vite**, **Tailwind CSS**, and **Firebase Firestore**.

## Features
- Shorten long URLs into short links
- Store and retrieve shortened links using Firebase Firestore
- Redirect users to the original long URL when they visit the short link
- Simple and clean UI with Tailwind CSS

## Technologies Used
- **Vue.js**: Frontend framework
- **Vite**: Build tool for fast development
- **Tailwind CSS**: Styling framework
- **Firebase Firestore**: Database to store links
- **Firebase Hosting**: Optional for deployment

## Installation & Setup
### 1. Clone the repository
```bash
git clone https://github.com/RahimjonovBoburjon/short-link-generator.git
cd short-link-generator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Create a **collection** named `shortLinks`
4. Update `firebase.js` with your Firebase config:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

### 4. Start the development server
```bash
npm run dev
```
This will start the app on `http://localhost:5173/`

## Firestore Rules (Required)
Make sure your Firestore rules allow read/write access:
```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /shortLinks/{document=**} {
      allow read, write: if true;
    }
  }
}
```

## Deployment
You can deploy the app to Firebase Hosting:
```bash
npm run build
firebase deploy
```

## Troubleshooting
- **Not Redirecting to Long URL?** Check Firestore data and ensure the `longUrl` field exists.
- **Permission Errors?** Verify Firestore rules and Firebase config.
- **CORS Issues?** If deployed, make sure Firebase Hosting settings allow access.

## License
This project is open-source and free to use.

---

Happy Coding! 🚀

