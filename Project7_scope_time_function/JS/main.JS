
//Assigning a global variable
var x = 100;
//addition function using the global variable
function the_first_one () {
    console.log(42 + x);

}
//function attempting to use the global. works
function the_second_one () {
    console.log(55 + x);
}

the_first_one();
the_second_one();

//an addition function using a local variable
function the_third_one () {
    var y = 5;
    console.log(55 + y);

}

//addition function attempting to use the local variable from the last function. doesn't work
function the_fourth_one () {
    console.log(65 + y);

}

the_third_one();
the_fourth_one();

//returns a string if the current time in hours is later than 3 am
function vowOfSilence () {
    if (new Date().getHours() > 3) {
        document.getElementById("dated").innerHTML = "Good morning friends";
    }

}

//returns a string if the current year is prior to 2023
function my_own_if () {
    if (new Date().getFullYear() < 2023) {
        document.getElementById("dooms").innerHTML = "Wait a bit longer";
    }

}

//asks user to input the number 42, uses if/else if/else to return string
function the_answer () {
    number = document.getElementById("number").value;
    if (number > 42) {
        didThey = "Too high";
    }
    else if (number < 42) {
        didThey = "too low";
    }
    else {
        didThey = "the answer to everything";
    }
    document.getElementById("did_you_write_it?").innerHTML = didThey;

}


//returns string depending on time of day
function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "SabaHH alKhayr!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "Misaa alKhayr.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

}