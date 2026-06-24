function sendMessage() {

let message = document.getElementById("message").value;

if(message.trim() === ""){
    return;
}

let chat = document.getElementById("chat");

chat.innerHTML += "<p>" + message + "</p>";

document.getElementById("message").value = "";

}

console.log("Script Working");
