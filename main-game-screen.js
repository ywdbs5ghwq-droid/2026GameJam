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

// syntax for cards: name, description, time decrease, happy increase/decrease
let one = ["ONE", "<description>", 1, 1];
let two = ["TWO", "<description>", 1, 1];
let three = ["THREE", "<description>", 1, 1];
let four = ["FOUR", "<description>", 1, 1];
let five = ["FIVE", "<description>", 1, 1];
let six = ["SIX", "<description>", 1, 1];
let seven = ["SEVEN", "<description>", 1, 1];
let eight = ["EIGHT", "<description>", 1, 1];
let ph1 = ["placeholder1"];
let ph2 = ["placeholder2"];
let ph3 = ["placeholder3"];

let personal = [one, two, three, four, ph1, ph2, ph3];
let hand = [];
let play = [];
let money = 0; // money: flat value of level + bonus (depends on happiness & time over minimum at the end of each round)
let time = 60;
let happy = 100;

function initializeBoard() {
    console.log("Personal contains: "+personal+"\nHand contains: "+hand);
    if (hand.length !== 4) {
        for(i=0; i<4; i++){
            let rand = Math.floor(Math.random() * personal.length);
            hand.push(personal[rand]);
            personal.splice(rand, 1);
        }
        console.log("Operation \"initializeBoard()\" complete!");
        console.log("Personal now contains: "+personal+"\nHand now contains: "+hand.toString());
    }
}

function gameLoop() {

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