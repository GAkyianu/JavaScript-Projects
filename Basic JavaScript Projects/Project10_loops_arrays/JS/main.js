// main.js

// A function using a while loop
function count_to_fifteen() {
    var numbersString = "";
    var Y = 1;
    while (Y <= 15) {
        numbersString += "<br>" + Y;
        Y++;
    }
    document.getElementById("Counting_to_fifteen").innerHTML = numbersString;
}
