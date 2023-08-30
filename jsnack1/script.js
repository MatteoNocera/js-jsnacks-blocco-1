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

/* const firstUserYear = prompt('Inserisci anno di nascita utente 1');

const secondUserYear =prompt('Inserisci anno di nascita utente 2');

console.log(firstUserYear, secondUserYear);

if ( isNaN(firstUserYear)) {
    alert('inserisci due date valide');
    location.reload();
} else if ( isNaN(secondUserYear)) {
    alert('inserisci due date valide');
    location.reload();
} else if (firstUserYear == 0 || secondUserYear == 0) {
    alert('inserisci due date valide');
    location.reload();
} else if (firstUserYear === '' || secondUserYear === '') {
    alert('inserisci due date valide');
    location.reload();
} else {
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
} */




/*

BONUS

Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

let i = 0;

while (i < 2) {
    
    const userNumb1 = Number(prompt('Insert a number between 1 and 9'));
    const userNumb2 = Number(prompt('Insert a number between 1 and 9'));

    if ( isNaN(userNumb1)) {
        alert('inserisci numeri validi');
        location.reload();
    } else if ( isNaN(userNumb2)) {
        alert('inserisci numeri validi');
        location.reload();
    } else if (userNumb1 == 0 || userNumb2 == 0) {
        alert('inserisci numeri validi');
        location.reload();
    } else if (userNumb1 === '' || userNumb2 === '') {
        alert('inserisci numeri validi');
        location.reload();
    } else {
        if (userNumb1 > userNumb2) {
        console.log('il numero maggiore è ' + userNumb1);
        } else if (userNumb2 > userNumb1) {
        console.log('il numero maggiore è ' + userNumb2);
        } else {
            console.log('patta');
        }

        i++
    }
    
    
}