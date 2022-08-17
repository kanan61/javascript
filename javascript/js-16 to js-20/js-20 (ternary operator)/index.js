// ternary operator = shortcut for an if/else statement
//                    Takes three operands \
//                     
//                   1. a condition with ?
//                   2. expression if true;
//                   3 expression if false

// syntax : condition ? expIfTrue ; expIfFalse 


let adult = checkAge(21);

console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false ;
}

checkWinner(true);

function checkWinner(win){
    win ? console.log("You Win") : console.log("You Lose");
}