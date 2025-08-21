let watchList = ["wukong", "minecraft movie", "spongebob", "borat"];    //old list of movies to watch
let watchedMovies = [];     //array to hold the movies that have been watched
console.log(`moves to watch: ${watchList}`);
let next = "minecraft movie";   //next movie to be watched
while (watchList.includes(next)){   //pop up to and including the next movie to be watched and push to the watchedMovies array
    watchedMovies.push(watchList.pop());
}
watchList.push(watchedMovies.pop());    //pop the final element in watchedMovies since it's the next movie to be watched, re-add it to watchList
console.log(`all movies succeeding ${next} (${watchedMovies}) have been watched`);
console.log(`updated list of movies to watch is: ${watchList}, watch ${next} next`);