# 2026GameJam

Latest commit (23/7/26)
Added a new javascript file (script.js) which contains functionality for new html and css, allowing card elements to be reordered in the "play" array.

To do:
 - Change what is in the "play" array from card elements to actual cards
 
 - Implement actual cards as objects with a name, description, and abilities (as a function) --> let me know if you need help for this, I am going to read up on the topic either way

 - Implement card comboes (ONLY ONCE THE PREVIOUS BULLET POINT IS DONE! No point making the system complicated if it doesn't exist yet)

 - Implement time and audience happiness systems into html
 
 - Add a "shop" or "new card" screen that will show in between rounds and display new card options that will then be added to the personal deck
 
 - Add basic graphics for the overall background (the part currently in brown), the cards, the bottom section (the part currently in light blue), and the top section (currently blank). 
 (aside:) Animations can wait until the game is functional, and technically so can the graphics, but it's easier to (metaphorically) sell a nice-looking game and animations are quicker to make than graphics.
 
 
 
"Global" deck may be unnessecary with "shop/new card" screen, all that's needed is the cards themselves. This is to say, instead of an array holding each copy of each card that can ever be distributed, it may only be nessecary to hold one of each card, that can then be copied to the personal deck once needed.

A global deck would still be good for balancing in an expanded game to make sure that the number of each card is limited, but 1) we're not going to get that far and 2) that can be controlled to a sufficient degree with probability to make powerful cards rare, instead of making them 'absolutely' rare (say, chance of getting a card is 10% instead of "there is only one of this card in a ten-card deck")

For testing the javascript I've made, feel free to temporarily change the source of the <script> element to "script.js" or even to make a seperate <script> element, I don't mind.

I'll handle the html/css stuff, so all the pages and interfaces. Once graphics are made, I'll figure out how to put those in, and if we make music/sfx, I can handle those too.
In return, I need you to work on the main logic of the game. Now obviously this is a big task, so let me know of anything I can help out with and I'll happily take a break from wrangling HTML to help you with javascript.
