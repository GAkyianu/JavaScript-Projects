// main.js

var A = 35; // Global variable
function Add_numbers_1() {
    document.write(15 + A + "<br>"); 
}
function Add_numbers_2(){
    document.write(A + 45); // Using global variable
}
Add_numbers_1();
Add_numbers_2();