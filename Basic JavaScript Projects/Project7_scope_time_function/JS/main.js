// main.js

// Assigning local and global variables

function Add_numbers_1() {
    var A = 25; // local variable
    document.write(15 + A + "<br>"); // Using local variable
}
function Add_numbers_2() {
    document.write(A + 35);
    console.log(A); // Using console.log to debug which variable is been used
    }
Add_numbers_1();
Add_numbers_2();

