/* 
🍫 Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.



*/


const totalNumbers = [];
let result = 0;
const h1Element = document.querySelector('h1');

for (i = 0; i < 3; i++ ) {

    const userNumbers = Number(prompt('insert a number between 1 and 10'));

    if ( isNaN(userNumbers)) {
        alert('insert numbers between 1 and 10')
        location.reload();
    } 

    if ( userNumbers == '') {
        alert('insert numbers between 1 and 10')
        location.reload();
    }
    console.log(userNumbers);
    result += userNumbers;
    

}
console.log(result);
h1Element.insertAdjacentHTML('beforeend', 'Il risultato finale è ' + result);