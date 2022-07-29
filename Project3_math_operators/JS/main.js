
//A basic math function
function doMath () {

    //sets the "multiplication" to the math done
    var multiplication = 25 * 10;

    //changes the text in the element "Math" to the phrase and result from var "mulitplication"
    document.getElementById("Math").innerHTML = "25 * 10 = " + multiplication;
}

//Attempt at a reset text function
function reDo () {

    //This doesn't necessarily reset because the text to replace is so small
    document.getElementById("Math").innerHTML = "Math";
}

//This is a subtraction function
function doSubtract () {

    //stores the result of the subtraction in variable "doesit"
    var doesit = 4315 - 3234;

    //This gets the stuff in the element id'd as "Math2" and replaces it with "4315 - 3234 = " + the variable "doesit"
    document.getElementById("Math2").innerHTML = "4315 - 3234 = " + doesit;

}

//division function
function divideIt () {

    //stores result of 55 / 11 in variable "divide"
    var divide = 55 / 11;


    //grabs the stuff in the element id'd by "Math3" and replaces it with the stuff
    document.getElementById("Math3").innerHTML = "55 / 11 = " + divide;
}

//Multiple Math!!
function multiBear () {

    //The math
    var multiples = ((400/10) - 2)*5 - 4;

    //Grabs the stuff in the element id'd by "psychicTandemWarElephant" and replaces it with the result stored in multiples
    document.getElementById("psychicTandemWarElephant").innerHTML = "400 divided by 10, subtract 2, multiplied by 5 and then subtract 4 = " + multiples;
}

//Modulus Math
function warrenAmpersand () {

    //The math
    var leftOver = 50 % 3;

    //Grabs the stuff in the element id'd by "Jake" and replaces it with the result stored in "leftOver"
    document.getElementById("Jake").innerHTML = "When you divide 50 by 3 you have a remainder of: " + leftOver;
}

//unary operator function
function makeItSo () {

    //the variable
    var makeIt = 15;

    //Grabs the stuff in the element id'd by "picard" and replaces it with the result stored in "makeIt"
    document.getElementById("picard").innerHTML = -makeIt;
}


//We add some and then we take some
function increMent () {

    //the variable
    var x = 41;
    var y = 43
    x++
    y--

    //Grabs the stuff in the element id'd by "" and replaces it with the result stored in "x" and "y"
    document.getElementById("doItonce").innerHTML = x;
    document.getElementById("doIttwice").innerHTML = y;

}

//A random number generator
function returnRandom () {

    var rereRandom = Math.random() * 100;

        //Grabs the stuff in the element id'd by "" and replaces it with the result stored in "rereRandom"

    document.getElementById("generateMe").innerHTML = rereRandom;

}

//Math Objects and Math Object Methods
function letUsMath () {

    //Gives a value to gimme
    var gimme = 5.871234;

    //rounds up gimme and stores it in upUP
    var upUP = Math.round(gimme);

    //replaces the stuff id'd at "" with upUP
    document.getElementById("runningOutofIDEAS").innerHTML = upUP;
}