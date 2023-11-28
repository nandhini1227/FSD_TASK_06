class Movie {
 constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
 }

 static getPG(movies) {
    const pgMovies = movies.filter(movie => movie.rating === "PG");
    return pgMovies;
 }
}


const movies = [
 new Movie("Casino Royale", "Eon Productions", "PG-13"),
 new Movie("Quantum of Solace", "Eon Productions", "PG-13"),
 new Movie("Skyfall", "Eon Productions", "PG-13"),
 new Movie("Blade Runner", "Warner Bros.", "R"),
 new Movie("Dune", "Universal Pictures", "PG")
];

const pgMovies = Movie.getPG(movies);
for (const movie of pgMovies) {
 console.log(movie.title);
}

 
    

