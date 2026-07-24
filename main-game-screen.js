let happinessMeter = document.getElementById("happiness-meter");
let timer = document.getElementById("timer");

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");

let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
let six = "6";
let seven = "7";
let eight = "8";


let personal = [one, two, three, four];
let hand = [];
let play = [];
let points = 0;
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