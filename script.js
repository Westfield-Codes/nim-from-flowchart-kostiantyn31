/* Nim Trainer by Kostiantyn Lohin */

// global variable
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
    alert("You played Nim");
}


/** 
 * main lets user control game type and playing again * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 * 
 *//** 
 * playNim runs Nim, player first and then computer, and says who wins * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 * 
 *//** 
 * userTurn gets a turn the user and checks if it is cheating with recursion * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 * 
 *//** 
 * CPUTurn gets a computer's turn without losing on purpose. Different * 
 * @param parameter1 Description of the first parameter. 
 * @param parameter2 Description of the second parameter. 
 * @return Description of the return value. 
 */