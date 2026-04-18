// main.js

var A = 35; // Global variable
function Add_numbers_1() {
    document.write(15 + A + "<br>"); 
// A function with if and else statements
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        License = "You are eligible for a license!";
    }
    else {
        License = "You are not eligible for a license!";
    document.getElementById("How_old_are_you?").innerHTML = License 
}
function Add_numbers_2(){
    document.write(A + 45); // Using global variable
}
Add_numbers_1();
Add_numbers_2();
