let happinessMeter = document.getElementById("happiness-meter");
let timer = document.getElementById("timer");

const global = {
    card1 : document.getElementById("card1"),
    card2 : document.getElementById("card2"),
    card3 : document.getElementById("card3"),
    card4 : document.getElementById("card4"),
}
 //I have officially reached my lowest point.
//ok yh this is probably easily reassigned with a loop leave me alone >:P I'll do it later
let personal = [card1, card2];
let hand = [];
let points = 0;
let time = 60;
let happy = 100;
while(time!=0){
    for(i=0;i<personal.length + 1;i++){
        var rand = Math.floor(Math.random() * personal.length);
        hand.push(personal[rand])
        hand.push(i)
        personal.pop(personal[rand])
    }
    time = 0
}