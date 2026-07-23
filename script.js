// this file is to mess around and learn some javascript on the go. Delete everything afterwards, ellie's got it.
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");

let hand = [], play = [];

hand.push(card1, card2, card3, card4);


const cards = document.querySelectorAll(".card");

cards.forEach( (card) => {
    card.addEventListener("mouseenter", () => {
        card.setAttribute("style", "border-color: red;")
    });
    card.addEventListener("mouseleave", () => {
        card.setAttribute("style", "border-color: blue;")
    });
    card.addEventListener("click", () => {
        if (play.includes(card)) { play.splice(play.indexOf(card), 1 ) }
        else {play.push(card)};
        displayPos();
    }); 
})

function displayPos() {
    cards.forEach( function (card) {
        card.lastChild.textContent = (play.indexOf(card) == -1 ) ? "" : "Position "+(play.indexOf(card)+1);
    })
}