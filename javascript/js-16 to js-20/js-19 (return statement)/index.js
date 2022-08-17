// return = returns a value back to the place
//          where you invoked a function

let area;
let height;
let width;

width = window.prompt("Enter width of rectangle");
height = window.prompt("Enter height of rectangle");

area = AreaOfRectangle(width, height);

console.log("The area is:", area);

function AreaOfRectangle(width, height){
    let result = height * width;
    return result;
    // return width * height;
}