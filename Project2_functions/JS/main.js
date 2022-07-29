var str ="This is the button text!", dfy = "Don\'t press me again.";
//I thought I'd need to keep these defined within the functions
//But keeping them up out here I could use them separately.
//Tried just defining them within "My_First_Function" but the defined
//variables weren't usable outside their function.

function My_First_Function() {

    document.getElementById("Button_Text").innerHTML= str;
    //switches the text id'd by "Button_Text" with the string variable "str"

    document.getElementById("Button_Text1").style.color = "red";
    //changes the font color of the stuff id'd by "Button_Text1"

}

function My_Second_Function() {

    document.getElementById("Button_Text1").innerHTML = dfy;
    //switches the stuff id'd by "Button_Text1" with string variable dfy

}

//This function is set up to activate upon clicking the text where it is listed
function my_function() {
    var sentence = "I am learning";
    //assigns string to var "sentence"
    sentence += " a lot from this book!";
    //concatenates previously assigned variable with new string
    document.getElementById("concatenate").innerHTML = sentence;
    //switches out stuff denoted by id "concatenate" with the var "sentence"
}

//following function does the same as previous function
function my_poem_function() {
    var poem = "Some body once told me the world was gonna rock ya";
    poem += " And sorry I could not travel both";
    document.getElementById("poetry").innerHTML = poem;
}

//Did pretty much the same as previous function except included a double click
function my_broken_function() {
    var broke = "You broke it";
    broke += " now how will we get back?";
    document.getElementById("poetry").innerHTML = broke;
}