 // Stampa le potenze di 2 senza superare il numero 1000.

 var limite = 1000;

 for (var i = 1; Math.pow(2, i) < limite; i++) {

    var potenze = Math.pow(2, i)

    console.log(potenze);

 }
