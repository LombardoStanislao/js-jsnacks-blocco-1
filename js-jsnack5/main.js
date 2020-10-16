// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.


var array = [];

var potenza = 0;

var cubo = [];

var insertNumber = parseInt(prompt('Inserisci un numero'));

for (var i = 1; i <= insertNumber; i++) {

  console.log(i);

  potenza = Math.pow(i, 3);

  // console.log(potenza);

  cubo.push(potenza);
}

console.log(cubo);
