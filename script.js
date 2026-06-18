const questions = [
    "هل تحبني؟ ❤️",
    "هل اشتقت لي؟ 🥺",
    "هل تفكر بي كثيراً؟ 💕",
    "هل أنا شخص مميز في حياتك؟ ❤️",
    "هل تريد أن نبقى معاً دائماً؟ 💖"
];

let current = 0;

const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const counter = document.getElementById("counter");

yesBtn.addEventListener("click", () => {
    current++;

    if(current < questions.length){
        question.textContent = questions[current];
        counter.textContent = `السؤال ${current + 1} من ${questions.length}`;
    }else{
        document.querySelector(".buttons").style.display = "none";

        question.innerHTML = `
        ❤️❤️❤️<br><br>
        أنت أفضل شخص في حياتي ❤️<br>
        وأجمل شيء حدث لي 💕<br><br>
        أحبك كثيراً ❤️
        `;
    }
});

function moveButton(){
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,300);