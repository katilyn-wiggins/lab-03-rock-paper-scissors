# EDIT-THIS-README
### HTML
- radio buttons for rock/paper/scisors
- button to play
- span with result (you won! you loose! it was a draw!)
    -that includes user input and computer input 
- display area for totals 
    - div with total wins
    - div with total losses
    - div with total draws 
    - div with total games played
-reset  
    -reset button
    - span with total number times reset button has been pressed 


## Javascript
 - grab DOM elements (by id)
 - initialize state 
     wins: 0 
     losses: 0 
     total games played: 0 
     reset: 0 
 - add event listener for "play" button
    - on click 
        a. store computer choice 
            -figure out how to randomize selection between rock, paper, and scisors 
        b. store user choice 
            - grabbes the selected button and stores it's value 
    - compare user choice to computer choice 
    - display result of the game 