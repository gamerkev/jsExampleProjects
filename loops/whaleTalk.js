let phrase = "turpentine and turtles";  //the input phrase
const whaleLetters = "aeiouy";          //vowels + y since these are whale talk letters
let whalePhrase = "";                   //will hold the whale phrase
for(let i = 0; i < phrase.length; i++){     //will iterate through each character of the input
    if (whaleLetters.includes(phrase[i].toLowerCase())){    //check if the current letter is a whale letter
                                                            //converts to lower case in case the input phrase includes uppercase
        if (phrase[i].toLowerCase() === 'u' || phrase[i].toLowerCase() === 'e'){    //need two characters for every u or e
            whalePhrase = whalePhrase.concat(phrase[i], phrase[i]);     //add two u's or e's
        }
        else whalePhrase = whalePhrase.concat(phrase[i]);   //only add 1 if it's any other whale letter
    }
}
whalePhrase = whalePhrase.toUpperCase();    //whale talk is uppercase
console.log(whalePhrase);