/* Nim Trainer by Kostiantyn Lohin */
/* chart: https://lucid.app/lucidchart/169f84c6-72b2-4492-85df-b103daf884b8/edit?page=0_0&invitationId=inv_140e244d-5aaa-4a42-877d-c567026622b6# */


/* global variable */
var trainer = false; 
var count = 0; 

/* Main */
function main() {
    let again = false; 
    trainer = confirm("Trainer mode");
    playNim();
    again = confirm("Again?");
    if (again == true) main();
    
}


 /** 
 * playNim runs Nim, player first and then computer, and says who wins * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */

/* playNim */
function playNim() {
    count = 0;
    while ( count < 21 ) {
        userTurn();
        if ( count > 20 ) {
           alert("U lost!");
        }
        else {
            CPUTurn();
            if ( count > 20 ) alert("U won");
        }
       
    }
}

 /** 
 * userTurn gets a turn the user and checks if it is cheating with recursion * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */

function userTurn() {
    // count += 3;
    // count = prompt("say namber");
    // alert("You counted 3. Count is now " + count);

    let turn = parseInt(prompt("pick a number 1-3"));
    turn = parseInt(turn);
    if (turn < 1 || turn > 3) {
        alert("bad turn");
        userTurn();
    }
    else {
        count += turn;
        alert("Count is now " + count);
    }

} 



/** 
 * CPUTurn gets a computer's turn without losing on purpose. Different * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */

function CPUTurn() {
    // count += 3 ;
    let turn = 0;
    if (count == 17 ) turn = 3;
    else if (count == 18 ) turn = 2;
    else if (count > 18) turn = 1;
    else if (trainer == true) turn = 4 - count % 4;
    else turn = Math.floor(Math.random()*3)+1;
    count += turn;
    alert("I counted 3. Count is now " + count);
}
