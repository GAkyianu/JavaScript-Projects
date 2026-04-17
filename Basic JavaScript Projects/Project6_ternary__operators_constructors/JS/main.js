// main.js

// A function with HTML and JavScript using a ternary operation with input from the browser
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

