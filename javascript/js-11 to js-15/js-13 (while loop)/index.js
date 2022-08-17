// While loop = used for repeting some code
//              while some codition is true
//              can be potentially infinite


let userName = "";

while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name")
}

 
console.log("hello", userName);
