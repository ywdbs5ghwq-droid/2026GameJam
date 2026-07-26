//declaring all of the variables needed to manipulate content on main screen and shop screen. Constant because they have no reason to change.
const happinessMeter = document.getElementById("happiness-meter");
const timer = document.getElementById("timer");

const shopButton = document.querySelector("#shopButton");
const shop = document.querySelector(".shop");
const content = document.querySelector(".content");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

// syntax for cards: name, description, time decrease
let one = ["ONE", "<description>", 3];
let two = ["TWO", "<description>", 3];
let three = ["THREE", "<description>", 3];
let four = ["FOUR", "<description>", 3];
let five = ["FIVE", "<description>", 3];
let six = ["SIX", "<description>", 3];
let seven = ["SEVEN", "<description>", 3];
let eight = ["EIGHT", "<description>", 3];
let ph1 = ["PLACEHOLDER1", "<description>", 3];
let ph2 = ["PLACEHOLDER2", "<description>", 3];
let ph3 = ["PLACEHOLDER3", "<description>", 3];

let personal = [one, two, three, four, ph1, ph2, ph3];
let hand = [];
let play = [];
let money = 0; // money: flat value of level + bonus (depends on happiness & time over minimum at the end of each round)
let time = 60;
let happy = 100;

function initializeBoard() {
    console.log("Personal contains: "+personal+"\nHand contains: "+hand);
    if (hand.length !== 4) { dealHand() }
    else {
        for (let i = 0; i<4; i++) {
            personal.push(hand[i]);
            hand.splice(i, 1);
        }
        dealHand()
    }
    console.log("Operation \"initializeBoard()\" complete!");
    console.log("Personal now contains: "+personal);
    console.log("Hand now contains: "+hand)
    timer.textContent = "TIME LEFT: "+time + "min";
    gameLoop()
}

function gameLoop() {
    while (time > 0) {
        timer.textContent = "TIME LEFT: "+time + "min";
        happinessMeter.textContent = happy;
        dealHand()
        playHand()
    }
    timer.textContent = "TIME LEFT: "+time + "min";
    happinessMeter.textContent = happy;
    alert("You won!")
}

function dealHand() {
    for(i=0; i<4; i++){
        let rand = Math.floor(Math.random() * personal.length);
        hand.push(personal[rand]);
        personal.splice(rand, 1);
    }
}

function playHand() {
    for (i=0; i<4; i++) {
        time = time - hand[i][2]
    }
    console.log(time)
    dealHand()
}

document.addEventListener("keydown", () => {
    shop.setAttribute("style", "display: flex;")
    content.setAttribute("style", "display: none;")  
});

// below this point handles the html elements on the screen and gives them functionality

shopButton.addEventListener("click", () => {
    shop.setAttribute("style", "display: none;")
    content.setAttribute("style", "display: flex;")
});