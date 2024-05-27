let messages = document.getElementsByClassName("msgList")[0]
let userInput = document.getElementById("msg")
let send = document.querySelector(".send")


// console.log("here",messages.innerHTML)
console.log(send)

const messageList = [
    {
        id: "user",
        message: "I am fine what about you?"
    },
    {
        id: "bot",
        message: "me thek hon"
    },
    {
        id: "user",
        message: "or kia chal raha he"
    },
    {
        id: "bot",
        message: "bas farigh han"
    }
]

// render list of messages
if(messages.innerHTML != null){
    for (let i = 0; i < messageList.length; i++) {
        messages.innerHTML += `<li class=${messageList[i].id} >  ${messageList[i].message}  </li>`
    }
}

function sendMessage() {
    messages.innerHTML += `<li class="user">${userInput.value}</li>`;
    setTimeout(autoReply, 1000);
    userInput.value = "";
}

send.addEventListener("click",sendMessage)

function autoReply() {
    const dummyText = [
        {
            id: "bot",
            message: "bado badi"
        },
        {
            id: "bot",
            message: "peche toh dekho"
        },
        {
            id: "bot",
            message: "keya pora din swal karte rahte ho"
        },
        {
            id: "bot",
            message: "bas karo bhai"
        },
        {
            id: "bot",
            message: "thora samjh aa raha he"
        }
    ]

    const newMessage = Math.round(Math.random() * dummyText.length)

    console.log(dummyText[newMessage], "newMessage")
    messages.innerHTML += `<li class="bot">  ${dummyText[newMessage].message}   </li>`;
}

