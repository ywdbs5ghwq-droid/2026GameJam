//declaring all of the variables needed to manipulate content on main screen and shop screen. Constant because they have no reason to change.
const happinessMeter = document.getElementById("happiness-meter");
const timer = document.getElementById("timer");
const playButton = document.getElementById("play")

const shopButton = document.querySelector("#shopButton");
const shop = document.querySelector(".shop");
const content = document.querySelector(".content");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const cards = document.querySelectorAll(".card");

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


function playGame() {
    while (time > 0) {turn()}
    
}


function initializeBoard() {
    play = [];
    console.log("Personal contains: "+personal+"\nHand contains: "+hand);
    transferHand()
    dealHand()
    console.log("Operation \"initializeBoard()\" complete!");
    console.log("Personal now contains: "+personal);
    console.log("Hand now contains: "+hand)
    //gameLoop()
    setText()
}

function turn() {
    happy = happy - 3;
    initializeBoard();
    console.log(hand);
    if (time == 0) {timer.textContent = "You won!"}
}


function transferHand() {
    if (hand.length == 4) {
        hand.forEach ((item) => {
            personal.push(item);
        })
        hand = [];
    }
    return hand;
}

function dealHand() {
    for(i=0; i<4; i++){
        let rand = Math.floor(Math.random() * personal.length);
        hand.push(personal[rand]);
        personal.splice(rand, 1);
    }
    return hand;
}

function playHand() {
    for (i=0; i<4; i++) {
        time = time - hand[i][2]
    }
    return time
}

function setText() {
    for (let i = 0; i < 4; i++) {
    if (cards.id !== "personalDeck") {
        cards[i].firstChild.textContent = hand[i][0]
        cards[i].lastChild.textContent = hand[i][1]
    }
    };
    timer.textContent = "TIME LEFT: "+time + "min";
    happinessMeter.textContent = happy;
}

playButton.addEventListener("click", () => { 
    for (let i = 0; i < 4; i++) {
        for (let g = 0; g < 4; g++) {
            if (hand[g][0] == (play[i]).firstChild.textContent) {
                play[i] = hand[g]
                break;
            }
        }
    }
    console.log(play);
    playHand();
    turn();
});


document.addEventListener("keydown", () => {
    shop.setAttribute("style", "display: flex;")
    content.setAttribute("style", "display: none;")  
});

document.addEventListener("load", initializeBoard());

// below this point handles the html elements on the screen and gives them functionality

shopButton.addEventListener("click", () => {
    shop.setAttribute("style", "display: none;")
    content.setAttribute("style", "display: flex;")
});


cards.forEach( (card) => {
    if (card.id !== "personalDeck") {
        card.addEventListener("mouseenter", () => {
            card.setAttribute("style", "background-color: #FFF2DE;")
        });
        card.addEventListener("mouseleave", () => {
            card.setAttribute("style", "background-color: #FFFBF5;")
        });
       card.addEventListener("click", () => {
            if (play.includes(card)) { play.splice(play.indexOf(card), 1 ) }
            else {play.push(card)};
            displayPos();
        }); 
    }
})

function displayPos() {
    cards.forEach( function (card) {
        card.lastChild.textContent = (play.indexOf(card) == -1 ) ? "" : "Position "+(play.indexOf(card)+1);
    })
}