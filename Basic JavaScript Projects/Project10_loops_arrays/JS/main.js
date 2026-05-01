// main.js

// A function with an array
function dog_acts() {
    var Dog_Activity = [];
    Dog_Activity[0] = "running";
    Dog_Activity[1] = "sleeping";
    Dog_Activity[2] = "playing";
    Dog_Activity[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this activity, the dog is " + Dog_Activity[3] + ".";   
// Creating an object with the let keyword
function car(){
    let car = {
        make: "Audi",
        year: 2017,
        color: "Black",
        model: "Q3"    
    };
    document.getElementById("My_Car_Object").innerHTML = 
    "I own a " + car.year + " " + car.color + " " + car.make + " " + car.model + ".";
}





