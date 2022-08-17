let x;

document.getElementById("rollBtn").onclick = function(){
    x = Math.floor(Math.random() * 7) + 1;

    document.getElementById("label").innerHTML = x;
}