const { RandomPHUB } = require('../discord-phub');

//If you want to generate unique media each time else set it to false (by default it's false)
const nsfw = new RandomPHUB(unique = true);

const pussy = nsfw.getRandomInCategory('pussy', "gif"); //will return a link to a pussy gif
const pussy2 = nsfw.getRandomInCategory('pussy'); //will return a link to a pussy media 
const rnd = nsfw.getRandom("gif"); //will return a link to a random media of any categorie with gif type
const rnd2 = nsfw.getRandom(); //will return a link to a random media of any categorie with any type
const cat = nsfw.getRandomCategory(); //will return a random category
const type = nsfw.getRandomType(); //will return a random category

console.log(pussy);
console.log(pussy2);

console.log(rnd);
console.log(rnd2);

console.log(cat);
console.log(type);

console.log(nsfw.typesByCategorie);