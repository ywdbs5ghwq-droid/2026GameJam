# 2026GameJam

## To do:
 - ~Change what is in the "play" array from card elements to actual cards~
 
 - Implement actual cards as objects with a name, description, and abilities (as a function) --> let me know if you need help for this, I am going to read up on the topic either way

 - Implement card combos

 - Test and balance the game

 - ~Implement time and audience happiness systems into html~
 
 - Add a "shop" or "new card" screen that will show in between rounds and display new card options that will then be added to the personal deck
 
 - Add basic graphics for the overall background (the part currently in brown), the cards, the bottom section (the part currently in light blue), and the top section (currently blank).

 - Add music of some kind

## Notes

"Global" deck may be unnecessary with "shop/new card" screen, all that's needed is the cards themselves. This is to say, instead of an array holding each copy of each card that can ever be distributed, it may only be necessary to hold one of each card, that can then be copied to the personal deck once needed.

A global deck would still be good for balancing in an expanded game to make sure that the number of each card is limited, but 1) we're not going to get that far and 2) that can be controlled to a sufficient degree with probability to make powerful cards rare, instead of making them 'absolutely' rare (say, chance of getting a card is 10% instead of "there is only one of this card in a ten-card deck")
