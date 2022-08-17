document.getElementById("button").onclick = function () {

    /*if(document.getElementById("mycheckbox").checked){
        console.log("you are now subscriber");
    }
    */
    const mycheckbox = document.getElementById("mycheckbox");

    if (mycheckbox.checked) {
        console.log("you are now subscriber");
    }
    else {
        console.log("you are not a subscriber");
    }
}