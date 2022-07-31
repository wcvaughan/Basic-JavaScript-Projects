//Copied from Tech Academy, a ternary function that changes output based on input
function Ride_Function () {

    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//My own ternary function modeled off the previous 
function Vote_Function () {

    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Creating a class and instantiating new stuff in it
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Instantiating a new object of my own
var blue = new Vehicle("Chevy", "Volt", 2010, "Blue");
function my1Function () {
    document.getElementById("New_and_This").innerHTML =
    "I drive a " + blue.Vehicle_Color + "-colored " + blue.Vehicle_Model + " manufactured in " + blue.Vehicle_Year;

}

//The following is commented out because it keeps the rest from working

// var true = string;
// function broken () {

//     console.log(true);

// }


//Modeled after the previous function I created a new class and instantiated some stuff
function Hikes (Name, Length, TimeofYear) {
    this.Hike_Name = Name;
    this.Hike_Length = Length;
    this.Hike_TimeofYear = TimeofYear;

}
var Reeds = new Hikes("Reed Lakes", "4 hrs", "Summer/Fall");
var Fairangel = new Hikes("Fairangel", "2 hrs", "Summer/Fall");
var GoldMint = new Hikes("Gold Mint", "3-4 hrs", "Spring/Summer/Fall/Winter");
function hikeFunction () {
    document.getElementById("hikinghike").innerHTML = 
    "Let's go hike " + Fairangel.Hike_Name + " it should only take us " + Fairangel.Hike_Length + " but we can only hike it in " + Fairangel.Hike_TimeofYear;

}

//Nested Function practice
function nesting_NEST () {
    document.getElementById("Nested_Function").innerHTML = infiniPoem ();
    //nested function which prints out "__ orange cream sodas on the wall" after taking one away
    function infiniPoem () {
        var alAwal = 99
        var tehki = " orange cream sodas on the wall"
        function take_Away() {alAwal -= 1;}
        take_Away();
        return alAwal + tehki;
    }
}