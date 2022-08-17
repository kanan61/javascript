// there is two way to accept user input

// 1.easy way with window prompt
/*
let username = window.prompt("enter your name");
console.log(username);
*/

// 2.difiicult way html textbox
let username;

document.getElementById("submit").onclick = function () {
    username = document.getElementById("username").value;
    console.log(username);

    document.getElementById("lebal-2").innerHTML = "hello " + username;
};

//                        type conversion

// type conversion = change the current datatype to another 
//                          (strings, numbers, booleans)


/*
let age = window.prompt("how old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("happy birthday! you are", age , "years old now");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


