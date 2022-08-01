//a loop function that counts to 10 and prints to browser
function Call_Loop () {
    //empty variable "Digit" created, will be string
    var Digit = "";
    //starting point of my counter is 1 and stored in "X"
    var X = 1;
    //The loop, checks value of "X", if it is less than 11, execute
    while (X < 11) {
        //Stores the variable "X" in Digit along with a line break before it
        Digit += "<br>" + X;
        //Adds one to variable "X"
        X++;
    }
    //prints the value of Digit at place id'd by "Loop"
    document.getElementById("Loop").innerHTML = Digit;

}

//Declares an array of strings in variable "Instruments"
var Instruments = ["Axe", "Claymore", "Morning star", "Battleaxe", "Silver bow", "Mace", "Bone wand"];
//empty variable "Contexnt" created
var Content = "";
//empty variable "Y" created
var Y;
//Loop function, starts value of "Y" at 0, checks its current value against the length of the array "Instruments", then adds one to "Y"
function for_loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        //Stores the value of "Instruments" at index Y with a line break after in "Content"
        Content += Instruments[Y] + "<br>";
    }
    //prints value of "Content"
    document.getElementById("List_of_Instruments").innerHTML = Content;

}

//declared an array of strings
var Cat_Picture = [];
Cat_Picture [0] = "eating";
Cat_Picture [1] = "eating";
Cat_Picture [2] = "not a cat";
Cat_Picture [3] = "dazzling";
var Content = "";
var Y;
//for loop that prints each string along the array indices
function cat_pics () {
    for (Y = 0; Y < Cat_Picture.length; Y++) {
        Content += Cat_Picture[Y] + "<br>";
    }
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Content + ".";
}
//including a continue in a for loop
function cat_pics2 () {
    for(Y = 0; Y < Cat_Picture.length; Y++) {
        if (Y === 3) continue;
        Content += Cat_Picture[Y] + "<br>";
    }
    document.getElementById("Cat2").innerHTML = "In this picture, the cat is " + Content + ".";
}

//const object creation with properties then changed properties and reprinted
function constant_function () {
    const planet = {type: "Gas giant", distance: 406.11E6, orbitalperiod: 12, name: "Jupiter"};
    planet.name = "Venus"
    planet.type = "rocky";
    planet.distance = 144.7E6;
    planet.orbitalperiod = (225/365).toPrecision(3);
    document.getElementById("Constant").innerHTML = "The planet " + 
    planet.name + " is " + planet.distance + " miles from earth" + 
    " and has an orbital period of " + planet.orbitalperiod + " years.";
}

//Using "let" to set variables
function goolet () {
    let finger = 5;
    let hand = 2 * finger;
    document.getElementById("letterman").innerHTML = "You should have up to " + hand + " fingers.";
}

//Using "return" 
document.getElementById("returns").innerHTML = coolios(10)
function coolios (A) {
    return A * 2;
}

//object, let, and return
let beverage = {
    brand: "fa!rlife",
    calories: 200,
    sugar: "10g",
    preferred: "#1",
    description: function () {
        return "My preferred beverage at " + this.preferred + " is " +
        this.brand + " and has " + this.calories + " calories and " + this.sugar +
        " of sugar."
    }
};
document.getElementById("malk").innerHTML = beverage.description();

let burger = "";
const fixins = ["tomato", "gorgonzola", "black truffle", "porcupine", "pickles"];

list: {
    burger += fixins[0] + "<br>";
    burger += fixins[1] + "<br>";
    burger += fixins[2] + "<br>";
    break list;
    burger += fixins[3] + "<br>";
}
document.write(burger);