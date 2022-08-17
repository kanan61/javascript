let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function () {

  a = document.getElementById("a-textbox").value;
  a = Number(a);

  b = document.getElementById("b-textbox").value;
  b = Number(b);

   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("c-label").innerHTML = "side C: " + c;
};
