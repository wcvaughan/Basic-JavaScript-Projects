
//Making a dictionary (key-value pairs)
function my_Dictionary () {
    //This dictionary stores two values to the same key.
    var Music = {
        genre:"cowboy western",
        genre:"space cowboy",
        tempo:"pokemon"

    };
    delete Music.genre; //deleted the genre key
 
    //This replaces the stuff id'd by "dictionary" with the key "genre" from the "Music" dictionary
    document.getElementById("dictionary").innerHTML = Music.genre;
}