//   Gives us the ability to check more than one condition concurrently 
// && AND (both condition must be true)
// || OR (Either condition can be true)

/*                                                >>>>  AND logical operator  <<<<

let temp = 16;

if(temp > 0 && temp < 30){
    console.log("whether is Good!");
}
else{
    console.log("whether is Bad!");
}
*/

/*
let temp = 16;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
    console.log("whether is Good!");
}
else {
    console.log("whether is Bad!");
}
*/


/*                                                >>>>  OR logical operator  <<<<

let temp = 15;
let sunny = true;

if(temp <= 0 || temp >= 30){
    console.log("whether is Bad!");
}
else{
    console.log("whether is Good!");
}
*/




/*                                              >>>>  NOT logical operator  <<<<

// ! NOT logical operator
// typically used to reverse a conditions boolean value
// true -> false / false -> true

let temp = 15;

if(!(temp > 0)){
    console.log("whether is Bad!")
}
else{
    console.log("whether is Good!");
}
*/

let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("whether is Bad!")
}
else{
    console.log("whether is Good!");
}

if(!sunny){
    console.log("whether is cloudy!")
}
else{
    console.log("whether is sunny!");
}

