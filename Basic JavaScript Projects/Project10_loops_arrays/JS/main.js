// main.js

// A function using a while loop
function count_to_fifteen() {
    var numbersString = "";
    var Y = 1;
    while (Y <= 15) {
        numbersString += "<br>" + Y;
        Y++;
// A function using a for loop
var Instrument = ["Clarinet", "Drums", "Piano", "Bass", "Voilin", "Trumpet", "Flute"];
var Content =  "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instrument.length; Y++) {
        Content += Instrument[Y] + "<br>";    
    }
    document.getElementById("Counting_to_fifteen").innerHTML = numbersString;
    document.getElementById("List_of_Instruments").innerHTML = Content;
}



