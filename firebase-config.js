import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlSN0__lD7GH0cDvqQQq9nX2gn1TRRXlE",
  authDomain: "raviranjanchat-10f42.firebaseapp.com",
  projectId: "raviranjanchat-10f42",
  storageBucket: "raviranjanchat-10f42.firebasestorage.app",
  messagingSenderId: "845872620022",
  appId: "1:845872620022:web:bc929300410e45af3fa7d7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
