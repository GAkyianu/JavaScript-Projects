// A Constructor function utilizing "new" and "this" keywords

function Vehicle(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
}   
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// A function to display the results of the constructor in an HTML element

function myFunction() {
    document.getElementById("Keywords_and_Construstors").innerHTML = "Erik drives a " + 
    Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " +
     Erik.Vehicle_Year;
}