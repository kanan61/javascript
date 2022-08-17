// useful string properties & methods

let username = "kanan koshti";
let firstname;
let lastname;

//                 string properties

//console.log(username.length);
//console.log(username.charAt(4));
//console.log(username.endsWith("i"));
//console.log(username.includes("k", "i", "s"));
//console.log(username.trim(""));
//console.log(username.toUpperCase());



//                   string slicing 

//                      Method-1
firstname = username.slice(0, 6);
lastname = username.slice(6);


//                      Method-2
//firstname = username.slice(0, username.indexOf(" "));
//lastname = username.slice(username.indexOf(" ") + 1);


console.log(firstname);
console.log(lastname);
