import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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

async function sendMessage() {

  let message = document.getElementById("message").value;

  if(message.trim() === "") return;

 let username = document.getElementById("username").value;

if(username.trim() === ""){
  username = "Anonymous";
}

onSnapshot(collection(db, "messages"), (snapshot) => {

  chat.innerHTML = "";

  snapshot.forEach((docSnap) => {

    let data = docSnap.data();

    const div = document.createElement("div");

    const isMe = data.email === currentUserEmail;

    div.classList.add("msg");
    div.classList.add(isMe ? "me" : "other");

    div.innerHTML = `
      <b>${data.username}</b><br>
      ${data.text}
      <div class="time">${new Date(data.time).toLocaleTimeString()}</div>
    `;

    chat.appendChild(div);
  });

  chat.scrollTop = chat.scrollHeight;
});

  document.getElementById("message").value = "";
}

window.sendMessage = sendMessage;

const chat = document.getElementById("chat");

onSnapshot(collection(db, "messages"), (snapshot) => {

  chat.innerHTML = "";

  snapshot.forEach((doc) => {

    let data = doc.data();

 chat.innerHTML += `
  <p><b>${data.username || "Anonymous"}:</b> ${data.text}</p>
`;
  });

});
