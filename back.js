// console.log("hello world");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Switch to light mode";
    } else {
        themeToggle.textContent = "Switch to dark mode";
    }
});

const chatPanel = document.getElementById("chatPanel");
const chatLauncher = document.getElementById("chatLauncher");
const chatClose = document.getElementById("chatClose");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

function setChatOpen(isOpen) {
    chatPanel.hidden = !isOpen;
    chatLauncher.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        chatInput.focus();
    }
}

function addChatMessage(message, className) {
    const messageElement = document.createElement("p");
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatReply(message) {
    const text = message.toLowerCase();

    if (/\b(hi|hello|hey|namaste)\b/.test(text)) {
        return "Hi! You can ask me about Sahil, his skills, projects, hobbies, or career goals.";
    }
    if (/\b(skill|skills|technology|technologies|programming|language)\b/.test(text)) {
        return "Sahil is learning Python, C, C++, HTML, CSS, JavaScript, React, Next.js, data structures and algorithms, AI, and data science.";
    }
    if (/\b(project|projects|zenny|square|audit)\b/.test(text)) {
        return "Sahil's projects include ZENNY.AI, a square-of-numbers program, and Readme Audit. See the Projects section for links.";
    }
    if (/\b(hobby|hobbies|cricket|freefire|clash of clans|football)\b/.test(text)) {
        return "Sahil enjoys cricket, football, Free Fire, and Clash of Clans.";
    }
    if (/\b(goal|goals|career|future|aspir)\b/.test(text)) {
        return "Sahil's career goals are to become a data scientist and an esports athlete.";
    }
    if (/\b(about|who|sahil|student|study|college|degree)\b/.test(text)) {
        return "Sahil Kashyap is a B.Tech Computer Engineering student interested in software development, AI, and data science.";
    }
    if (/\b(help|what can you do)\b/.test(text)) {
        return "I can answer questions about Sahil's background, skills, projects, hobbies, and career goals.";
    }

    return "I can answer questions about Sahil's background, skills, projects, hobbies, and career goals. Try asking about one of those!";
}

chatLauncher.addEventListener("click", function () {
    setChatOpen(chatPanel.hidden);
});

chatClose.addEventListener("click", function () {
    setChatOpen(false);
    chatLauncher.focus();
});

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = chatInput.value.trim();

    if (!message) {
        return;
    }

    addChatMessage(message, "user-message");
    chatInput.value = "";
    addChatMessage(getChatReply(message), "bot-message");
    chatInput.focus();
});