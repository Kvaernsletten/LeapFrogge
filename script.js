

let topNum = document.getElementById('topNum');
let bottomNum = document.getElementById('bottomNum');
let time = document.getElementById('timer');
let points = document.getElementById('points');


let inputAnswer = document.getElementById('inputAnswer');

let speechBubbleText = document.getElementById('speechBubbleText')

let gameStarted = false;
let maxNum = 9;
let minNum = 1;
let score = 0;
let timer = 60;

time.innerHTML = 'Time: ' + timer;
points.innerHTML = 'Score: ' + score;

let submitButton = false;

randomNumbers();

function startGame(){

    document.getElementById('submit').innerHTML = 'Submit';
    document.getElementById('answerButtons').innerHTML = /*HTML*/`
    
    <button id="reset" class="reset" onclick="reset()">Reset</button>
    `;
    timerCounter();
    submitButton = true;
}

function randomNumbers() {
    topNum.innerHTML = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    bottomNum.innerHTML = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function higherButton() {
    if (submitButton == true && topNum.innerHTML > bottomNum.innerHTML) {
        Correct();
    }
    else if(submitButton == true && topNum.innerHTML <= bottomNum.innerHTML){
        Wrong();
    }
}

function lowerButton() {
    if (submitButton == true && topNum.innerHTML < bottomNum.innerHTML) {
        correctAnswer = true;
        Correct();
    }
    else if(submitButton == true && topNum.innerHTML >= bottomNum.innerHTML){
        Wrong();
    }
}

function equalButton() {
    if (submitButton == true && topNum.innerHTML == bottomNum.innerHTML) {
        Correct();
    }
    else if(submitButton == true && topNum.innerHTML != bottomNum.innerHTML){
        Wrong();
    }
}

function Correct() {

    points.innerHTML = 'Score: ' + (++score);
    randomNumbers();
    submitButton = false;

    document.getElementById('correct').style.opacity = 1;
    setTimeout(lowerOpacity, 400);
}
function lowerOpacity() {
    document.getElementById('correct').style.opacity = 0.75;
    setTimeout(lowerOpacity1, 100);
}
function lowerOpacity1() {
    document.getElementById('correct').style.opacity = 0.5;
    setTimeout(lowerOpacity2, 100);
}
function lowerOpacity2() {
    document.getElementById('correct').style.opacity = 0.25;
    setTimeout(clearSpeech, 100);
}
function clearSpeech() {
    document.getElementById('correct').style.opacity = 0;
    submitButton = true;
}

function Wrong() {
    if (score > 0){
        points.innerHTML = 'Score: ' + (--score);
    }
    
    else if (score < 0){
        score = 0;
    }
    submitButton = false;

    document.getElementById('wrong').style.opacity = 1;
    setTimeout(lowerOpacityW, 400);
}
function lowerOpacityW() {
    document.getElementById('wrong').style.opacity = 0.75;
    setTimeout(lowerOpacity1W, 100);
}
function lowerOpacity1W() {
    document.getElementById('wrong').style.opacity = 0.5;
    setTimeout(lowerOpacity2W, 100);
}
function lowerOpacity2W() {
    document.getElementById('wrong').style.opacity = 0.25;
    setTimeout(clearSpeechW, 100);
}
function clearSpeechW() {
    document.getElementById('wrong').style.opacity = 0;
    submitButton = true;
}

function timerCounter(){
    setTimeout(timerCounter, 1000)
    if(timer > 0){
        time.innerHTML = "Time: " + (--timer);
    }
    else if(timer <= 0){
        time.innerHTML = "Time: " + (timer);
        clearTimeout(timerCounter, 0);
        timer = 0;
        totalScores();
        submitButton = false;
    }
}

function totalScores(){
    
    document.getElementById('pictures').innerHTML = /*HTML*/`
    <img id="correct" class ="correct transparent" src ="Correct.png" alt="Correct!">
    <div id="finalScore" class="finalScore">Your total score: <br>
    <span class="scoreNumber">${score}</span></div> 
    <img id="speechBubble" class="speechBubble" src="speechBubble.png" alt="Speechbub">
    <img id="frogge" class="frogge" src="frogge.png" alt="frogge">
    `;

    document.getElementById('correct').style.opacity = 0;
}

function reset() {
    location.reload();
}

