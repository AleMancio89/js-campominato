//Definisco array vuoto e lo riempio con 16 numeri random non uguali tra loro

var computerNumbers = [];

var i = 0;
while (computerNumbers.length < 16) {
  var computerRandomNumber = (Math.floor(Math.random() * 100) + 1);
  if (computerNumbers.includes(computerRandomNumber)) {
    computerRandomNumber = (Math.floor(Math.random() * 100) + 1);
  } else{
    computerNumbers.push(computerRandomNumber);
  }
  i++
}

console.log(computerNumbers.sort());

//Chiedo all'utente di inserire un numero
