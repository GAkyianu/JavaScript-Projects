//Main.js
function my_Dictionary() { //Function to create a dictionary and delete an entry from it.
    var movie = { //Creating a dictionary with movie details.
        Title: "The Dark Knight",
        Director: "Christopher Nolan",
        Release_Year: 2008,
        Genre: "Action",
        Rating: "PG-13"
    };
    delete movie.Genre; //Deleting the Genre entry from the dictionary.
    document.getElementById("Dictionary").innerHTML = movie.Genre;
    } //Displaying the value of the deleted entry, which will show as undefined.
    
