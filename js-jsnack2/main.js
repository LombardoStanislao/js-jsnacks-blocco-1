// JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parolaUno = prompt('Inserisci una  parola');

var parolaDue = prompt('Inserisci un\'altra parola');

if (parolaUno.length > parolaDue.length) {

  console.log('La prima parola è più lunga');
} else if (parolaDue.length > parolaUno.length) {

  console.log('La seconda parola è più lunga');
} else {
  console.log('Le parole sono lunghe uguali');
}
