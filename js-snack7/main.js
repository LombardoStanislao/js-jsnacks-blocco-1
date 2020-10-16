 // Calcola la somma e la media dei numeri da 1 a 10.

var somma = 0;

var massimo = 10;

var media = 0;

for (var i = 1; i <= massimo; i++) {

  somma = somma + i;


  console.log('Questo è il valore di somma ad ogni i: ' +  somma);

}

console.log('Questa è la somma dei numeri da 1 a 10: ' + somma);

console.log('Questa è la media dei numeri da 1 a 10: ' + somma / massimo);
