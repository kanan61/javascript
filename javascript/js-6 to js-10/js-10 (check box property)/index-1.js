document.getElementById("button").onclick = function () {

    const mycheckbox = document.getElementById("mycheckbox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");

    if (mycheckbox.checked) {
        console.log("you are now subscribed");
    }
    else {
        console.log("you are not a subscriber");
    }

    if (mycheckbox.checked) {

        if (visa.checked) {
            console.log("you are paying with visa");
        }
        else if (mastercard.checked) {
            console.log("you are paying with mastercard");
        }
        else if (paypal.checked) {
            console.log("you are paying with paypal");
        }
        else {
            console.log("Please select valid payment option");
        }
    }
    else {
        console.log("you have to subscribe first, then select payment option")
    }


}