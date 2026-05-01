// main.js

// Creating a JavaScript Break Statement
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 5) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("Trial").innerHTML = text;




