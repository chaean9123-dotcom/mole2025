const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let timeId = null;
let hitPosition;
let result = 0;
let currentTime = 60;

function randomeSquae() {
    squares.forEach((squares) => {
        squares.classList.remove("mole");
    });

    let randomeSquae = squares[Math.floor(Math.random()*9)];
    randomeSquae.classList.add("mole");
    hitPosition = randomeSquae.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition=null;
        }
    });
});   

function moveMole() {
    timeId = setInterval(randomeSquae,500)
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId);
        alert("game over!" + result);
    }
}

let countDownTimerId = setInterval(countDown,1000);
