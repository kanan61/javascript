//const = a variable that can't be changed


const pi = 3.14;
let radius;
let circumfrence;


radius = window.prompt("enter value to check circumfrence");
radius = Number(radius);

circumfrence = 2 * pi * radius;

console.log("circumfrence is: ", circumfrence);