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
// Utilizing the time_function() from previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }else {
        Reply = "It is evening time!";
}
function Add_numbers_2(){
    document.write(A + 45); // Using global variable
    document.getElementById("Time_of_day").innerHTML = Reply;
}
Add_numbers_1();
Add_numbers_2();

