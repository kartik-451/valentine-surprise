function goToPage2() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

/* NO button runs away */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 100;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* YES clicked celebration */
function yesClicked() {
    for (let i = 0; i < 30; i++) {
        createHeart();
        createLoveText();
    }
}


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createLoveText() {
    const text = document.createElement("div");
    text.classList.add("love-text");
    text.innerText = "I Love you Sinchuu!! 💕";

    text.style.left = Math.random() * 80 + "vw";
    text.style.animationDuration = (Math.random() * 2 + 4) + "s";

    document.body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 6000);
}
