/*if statements = a basic form of dicison making
                   if condition is true, then do something
                   if not, then we don't do it!
*/
 
let age;
let value;

document.getElementById("submit").onclick = function () {

    age = document.getElementById("textbox").value;
    age = Number(age);

    if(age >=65){
        document.getElementById("label").innerHTML = "you are senior citizen";
    }
    
    else if(age >=18){
        document.getElementById("label").innerHTML = "you are adult";
    }
    
    else{
        document.getElementById("label").innerHTML = "you are minor";
    }

}

