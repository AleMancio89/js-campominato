//Funzione per generare un numerorandom con estremi inclusi

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione per controllare se un numero è presente in un array

function isMatchInArray(num, numArray) {
  for(var i = 0; i < numArray.length; i++){
    if ( num === numArray[i]){
      return true;
    }
  }
  return false;
}

//Funzione per verificare range esatto di inserimento

function rangePermitted(num, min, max){
  if ( min <= num && num <= max ) {
    return true;
  }
  return false;
}

//Funzione per verificare se il numero è vincente
