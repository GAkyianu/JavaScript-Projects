// main.js
//Utilizing the .toPrecision() method
function precision_method() {
    var X =  345.12345678910123;
    document.getElementById("SpecificLength").innerHTML = X.toPrecision(7);
}