// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var array = [];

for (var i = 0; i < 6; i++) {

  var insertNumber = parseInt(prompt('Inserire un numero'))

  if (insertNumber % 2 != 0) {
      array.push(insertNumber)
  }
}

console.log('Ecco i numeri dispari: ' + array);
