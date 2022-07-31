//Using "type of" operator

function whatIsIt () {

    //stores the typeof "wonderful" in variable "foo"
    var foo = document.write(typeof("wonderful"));

    //replaces stuff id'd by "coerce" with result stored in variable foo
    document.getElementById("coerce").innerHTML = foo;
}

function forceIt () {

    //coerces the string "4" to be writtine with the number 2 and stores the result, 42, in variable done
    var done = document.write("4" + 2);

    //replaces stuff id'd by "doIt" with result stored in variable done
    document.getElementById("doIt").innerHTML = done;

}

function makeNaan () {

    //stores the result of 0/0 in variable naan
    var naan = 0/0;

    //replaces the stuff id'd by "one" with the result stored in variable naan
    document.getElementById("one").innerHTML = naan;

}


function makeGood () {

    //stores a string in variable "good"
    var good = "This is not a number";

    //runs function isNaN on variable "good" to check if it is a number
    var y = isNaN(good);

    //replaces stuff id'd by "two" with result stored in variable "y"
    document.getElementById("two").innerHTML = y;
}


function makeBad () {

    //stores a number in variable "bad"
    var bad = 294;

    //runs function isNaN on variable "bad" and stores result in variable "x"
    var x = isNaN(bad);

    //replaces stuff id'd by "three" with result stored in variable "x"
    document.getElementById("three").innerHTML = x;
}

function infinitize () {

    //stores an inifinitly large number in variable "astronomical"
    var astronomical = 3E310;

    //replaces stuff id'd by "timeEnough" with value stored in variable "astronomical"
    document.getElementById("timeEnough").innerHTML = astronomical;

}

function deInfinitize () {

    //stores an inifinitly negative large number in variable "abyssal"
    var abyssal = -3E310;

    //replaces stuff id'd by "timed" with value stored in variable abyssal
    document.getElementById("timed").innerHTML = abyssal;

}

function left () {

    document.getElementById("yup").innerHTML = 15 < 4;

}

function right () {

    document.getElementById("nope").innerHTML = 15 > 4;

}

function whatarewe () {

    console.log(2 + 2);

}

function makeItRain () {

    console.log(4 > 5);
}

function wedoing () {

    console.log(42 == 42);
    
    console.log(42 == 24);
}

function allofit () {

    var a = 24;

    var b = 42;

    var bb = "42";

    var c = "24";

    console.log(b === b);

    console.log(b === c);

    console.log(b === bb);

    console.log(a === b);

    console.log(42 == 42 && 24 == 24);

    console.log(42 == 42 && 24 == 23);

    console.log(42 == 42 || 24 > 25);

    console.log(42 > 42 || 24 > 25);

}

function not_Function() {

    document.getElementById("dun").innerHTML = !("can't" == "can't");
    
    console.log(!(42 > 1234));

}