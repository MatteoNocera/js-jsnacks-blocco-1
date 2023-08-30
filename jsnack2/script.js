/* 
🍫 Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

## Tools


*/

/* // Utente inserisce parola 1

const firstWord = prompt('Type first word');

// Utente inserisce parola 2

const secondWord = prompt('Type second word');

if (firstWord == '' || secondWord =='') {
    alert('insert two word');
    location.reload();
} else {
    // Individua lunghezza parole

    const lengthFirstWord = Number(firstWord.length);

    const lengthSecondtWord = Number(secondWord.length);


    // Stampa parola corta
    // Stampa parola lunga

    const h1Element = document.querySelector('h1');




    if (lengthFirstWord > lengthSecondtWord) {
        console.log(secondWord);
        console.log(firstWord);
        h1Element.innerHTML = secondWord + ' è più corta di ' + firstWord;
    } else if (lengthSecondtWord > lengthFirstWord) {
        console.log(firstWord);
        console.log(secondWord);
        h1Element.innerHTML = firstWord + ' è più corta di ' + secondWord;

    } else {
        console.log('Le parole hanno la stessa lunghezza');
    }    
}
 */


/* 
BONUS
(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const word = '';
const words = []
let i = 0;

while (i < 2) {
    const word = prompt('Type first word');
    
    words.push(word);
    console.log(words);
    i++
}
if (words[0].length < words[1].length) {

    console.log(`la parola ${words[0]} è più corta della parola ${words[1]}`)
    ;
} else if(words[1].length < words[0].length) {

    console.log(`la parola ${words[1]} è più corta della parola ${words[0]}`);

} else {

    console.log(`le parole ${words[0]} e ${words[1]} hanno la stessa lunghezza`);
}
