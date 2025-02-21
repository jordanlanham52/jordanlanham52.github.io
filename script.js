const introText = [
    "Welcome to my cyber domain...",
    "> Initializing...",
    "> Access Granted!"
];
const speed = 50; 

function typeEffect() {
    if (i < introText.length) {
        document.getElementById("intro-text").innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);