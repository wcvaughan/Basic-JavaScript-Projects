
//Declares various strings of a poem
var part_1 = "The bairnies cuddle doon at nicht ";
var part_2 = "Wi muckle faught and din. ";
var part_3 = "Oh try an sleep, ye waukrife rogues, ";
var part_4 = "Your faithers comin in. ";
var part_5 = "They niver heed a word I speak,";

//concatenates the previously declared variables
function put_together () {
    var all_together = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("stickin").innerHTML = all_together;

}

//grabs a section of the variables concatenated below
function slice_it () {
    var put_it = part_1.concat(part_2, part_3);
    var section = put_it.slice(34, 41);
    document.getElementById("stuck").innerHTML = section;

}

//upper case the concatenated variables in the function
function enLarge () {
    var cuddle = part_1.concat(part_2, part_3, part_4, part_5);
    var gorge = cuddle.toUpperCase();
    document.getElementById("upped").innerHTML = gorge;

}

//declares the position of "waukrife" from the concatenated variables
function foundit () {
    var doon = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("found").innerHTML = doon.search("waukrife");
}

//turns the number variable into a string
function str_method () {
    var x = 42;
    document.getElementById("num2str").innerHTML = x.toString();

}


//shortens the variable to a specific number of values
function length_method () {
    var x = 42.24422424242424242424;
    document.getElementById("num2strlength").innerHTML = x.toPrecision(8);

}

//fixes the variable to a certain number of variables
function fixed_method () {
    var h = 42.44444222222;
    document.getElementById("constr").innerHTML = h.toFixed(3);
}

//puts the thing to string
function value_method () {
    var t = "have at it";
    document.getElementById("valuable").innerHTML = t.valueOf();
}