"use strict";

//Opbygger et Array med javascript objeckter indeholdende film/movies
const movies = [
    {title:"Forest Gump", genre:"drama", year:1994, duration:2.22, img:"/img/forrest-gump.webp", url:"https://www.imdb.com/title/tt0109830/"}, 

    {title:"Gladiator", genre:"action", year:2000, duration:2.35, img:"/img/gladiator.webp", url:"https://www.imdb.com/title/tt0172495/"}, 

    {title:"Inception", genre:"science-fiction", year:2010, duration:2.28, img:"/img/inception.webp", url:"https://www.imdb.com/title/tt1375666/"}, 

    {title:"Interstellar", genre:"science-fiction", year:2014, duration:2.49, img:"/img/interstellar.webp", url:"https://www.imdb.com/title/tt0816692/"}, 

    {title:"IT", genre:"horror", year:2017, duration:2.15, img:"/img/it.webp", url:"https://www.imdb.com/title/tt1396484/"}, 

    {title:"Pulp Fiction", genre:"drama", year:1994, duration:2.34, img:"/img/pulp-fiction.webp", url:"https://www.imdb.com/title/tt0110912/"}, 

    {title:"Superbad", genre:"comedy", year:2007, duration:1.53, img:"/img/superbad.webp", url:"https://www.imdb.com/title/tt0829482/"}, 

    {title:"The Conjuring", genre:"horror", year:2013, duration:1.52, img:"/img/the-conjuring.webp", url:"https://www.imdb.com/title/tt1457767/"}, 

    {title:"The Dark Knight", genre:"action", year:2008, duration:2.32, img:"/img/the-dark-knight.webp", url:"https://www.imdb.com/title/tt0468569/"}, 

    {title:"Godfather", genre:"drama", year:1972, duration:2.55, img:"/img/the-godfather.webp", url:"https://www.imdb.com/title/tt0068646/"}, 

    {title:"Hangover", genre:"comedy", year:2009, duration:1.40, img:"/img/the-hangover.webp", url:"https://www.imdb.com/title/tt1119646/"}, 

    {title:"The Matrix", genre:"science-fiction", year:1999, duration:2.16, img:"/img/the-matrix.webp", url:"https://www.imdb.com/title/tt0133093/"}

];

// Henter HTML-elementer movies-container & category-select
const moviesContainer = document.getElementById("movies-container");
const selectedCategory = document.getElementById("category-select");

function displayMovies(filmListe) {
    moviesContainer.innerHTML =""; //Tømmer container for at undgå duplikering

    //Gennemløber hver film fra Array'et (movies) som indeholder javascript objekter, der skal vises
    filmListe.forEach( (movie) => { //Movie = det der flytter sig igennem objekterne - starte med at peje på det første objekt
        const movieElement = document.createElement("article"); //Opretter et HTML element (article) ved hjælp af javascript
        
        //opbygger en HTML struktur for hver film
        movieElement.innerHTML = `
        <h3>${movie.title} </h3>
        <p>Genre: ${movie.genre}</p>
        <p>År: ${movie.year}</p>
        <p>Varighed: ${movie.duration}</p>
        <figure>
            <a href="${movie.url}" target="_blank">
            <img src="${movie.img}" alt="${movie.title}">
        </figure>`;

        moviesContainer.appendChild(movieElement); //tilføjer den html struktur til vores article

    }); 

}

// Indlæser alle film når hjemmesiden loades fra vores Array med JavaScript Objekter
displayMovies(movies);


selectedCategory.addEventListener("change", () => {
    const selectedValue = selectedCategory.value;

    let filteredMovies;

    if (selectedValue === "all") {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(movie => movie.genre === selectedValue)
    }

    displayMovies(filteredMovies);

});

