// main.js

// A nested function
function add_Strings() {
    var start_string = "This is";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("Amazing");
    document.getElementById("Nested_Function").innerHTML = start_string;
}

