// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.

//var array = [];

var totale = 0;

for (var i = 0; i < 5; i++) {

  //chiedere all'untente 5 volte un numero
  var insertNumber = parseInt(prompt('Inserisci un numero'));

  //array.push(insertNumber);
  // sommare il totale che vale 0 all'i
  // console.log("Totale = " + totale)
  totale = totale + insertNumber
  // console.log("Totale aggiornato = " + totale)

}

console.log('Il totale dei numeri inseriti è: ' + totale);


// for(var i = 0; i < array.length; i++) {
//
//   console.log(array[i]);
// }
