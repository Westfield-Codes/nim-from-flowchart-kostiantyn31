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
    if (again == true) {
        main();
    }
    alert("Thank's you for playing");
}

/* playNim */
function playNim() {
    count = 0;
    while ( count < 20 ) {
        userTurn();
        if ( count < 20 ) {
            CPUTurn();
        }
        else alert("U lose");
        userTurn(); 
        if ( count < 20 ) {
            CPUTurn();
        }
        else if ( count = 20 ) alert("U win");
    }
}

 /** 
 * playNim runs Nim, player first and then computer, and says who wins * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */

function userTurn() {
   /* count += 3; */
    count = prompt("say namber")
    alert("You counted 3. Count is now " + count);
} 

 /** 
 * userTurn gets a turn the user and checks if it is cheating with recursion * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */

function CPUTurn() {
    count += 1;
    alert("I counted 3. Count is now " + count);
}

/** 
 * CPUTurn gets a computer's turn without losing on purpose. Different * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */