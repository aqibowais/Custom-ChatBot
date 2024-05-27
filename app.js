let messages = document.getElementsByClassName("msgList")[0];
let msg = '';
let userInput = document.getElementById("msg");

userInput.addEventListener('input', (e) => {
    msg = e.target.value;
});

let send = document.getElementsByClassName("send")[0];

const messageList = [
    {
        id: "user",
        message: "Hello, how are you?"
    },
    {
        id: "bot",
        message: "I'm fine, thank you!"
    },
    {
        id: "user",
        message: "What's up?"
    },
    {
        id: "bot",
        message: "Just hanging around."
    }
];

// Render list of messages
for (let i = 0; i < messageList.length; i++) {
    messages.innerHTML += `<li class="${messageList[i].id}">${messageList[i].message}</li>`;
}

function checkEnterKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
function sendMessage() {
    if (msg.trim()) {
        messages.innerHTML += `<li class="user">${msg}</li>`;
        setTimeout(autoReply, 1000);
        userInput.value = "";
        msg = '';  // Clear the message after sending
    }
}

send.addEventListener("click", sendMessage);

function autoReply() {
    const dummyText = [
        {
            id: "bot",
            message: "Indeed."
        },
        {
            id: "bot",
            message: "Look behind you."
        },
        {
            id: "bot",
            message: "Why ask so many questions?"
        },
        {
            id: "bot",
            message: "Enough already."
        },
        {
            id: "bot",
            message: "Starting to understand now."
        }
    ];

    const newMessage = Math.floor(Math.random() * dummyText.length);

    messages.innerHTML += `<li class="bot">${dummyText[newMessage].message}</li>`;
}