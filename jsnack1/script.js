/* 
🍫 Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

## Tools
- prompt
- if/else
- console.log

*/

// chiedi all'utente due numeri attraverso il prompt

const firstUserYear = prompt('Inserisci anno di nascita utente 1');

const secondUserYear = prompt('Inserisci anno di nascita utente 2');


// stabilisci il numero maggiore inserito
//Stampa il numero maggiore

const titleElement = document.querySelector('h1');


if (firstUserYear > secondUserYear) {
    let result = 'Utente 1 è più grande';
    console.log(result);
    titleElement.insertAdjacentHTML('beforeend', result);

} else if (secondUserYear > firstUserYear) {
    let result = 'Utente 2 è più grande';
    console.log(result);
    titleElement.insertAdjacentHTML('beforeend', result);

} else {
    let result = 'Utente 1 e Utente 2 sono coetanei';
    console.log(result);
    titleElement.insertAdjacentHTML('beforeend', result);

}
