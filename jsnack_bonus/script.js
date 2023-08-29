/* 

🍫 🍫 Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

// crea un array vuoto

myArray = [];

const h1Element = document.querySelector('h1');

// chiedi di inserire un numero * 6

//const userNumber_1 = Number(prompt('insert a number between 1 and 10'))

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt('insert a number between 1 and 10'));
    console.log(userNumber);

    // se è dispari inseriscilo nell'array
    if (userNumber % 2 != 0) {
        myArray.push(userNumber);
    }
    
}

console.log(myArray);

h1Element.insertAdjacentHTML('beforeend', 'I numeri dispari da te inseriti sono ' + myArray);