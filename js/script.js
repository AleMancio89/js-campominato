var RANDOM_NUMBERS = 16;
var MIN_BOUND = 1;
var MAX_BOUND_EASY = 100;
var MAX_BOUND_MEDIUM = 80;
var MAX_BOUND_HARD = 50;

var maxBound = MAX_BOUND_EASY;
var rounds = maxBound - RANDOM_NUMBERS;

// Seleziono livello di difficoltà adattando il numero di tentativi massimi

var isEasyEl = document.getElementById('easy');
var isMediumEl = document.getElementById('medium');
var isHardEl = document.getElementById('hard');
var startBtn = document.getElementById('startBtn');
var startEl = document.getElementById('start');
var playEl = document.getElementById('play');
var leftEl = document.getElementById('left');


var computerNumbers = [];


startBtn.addEventListener('click', function(){

  //Permetto al giocatore di scegliere la difficoltà

  isEasy = isEasyEl.selected;
  isMedium = isMediumEl.selected;
  isHard = isHardEl.selected;

  if (isMedium) {
    maxBound = MAX_BOUND_MEDIUM;
  } else if (isHard) {
    maxBound = MAX_BOUND_HARD;
  } else {
    maxBound = MAX_BOUND_EASY;
  }

  rounds = maxBound - RANDOM_NUMBERS;

  //Creo numeri random per il pc e li salvo in un array

  while (computerNumbers.length < RANDOM_NUMBERS) {
    var randomPcNumber = (randomNumber(MIN_BOUND, maxBound));
    if (!isMatchInArray(randomPcNumber, computerNumbers)) {
      computerNumbers.push(randomPcNumber);
    }
  }

  console.log(computerNumbers.sort());


  startEl.style.display = 'none';
  playEl.style.display = 'block';
  leftEl.innerHTML = rounds;


});


//Chiedo all'utente di inserire un numero fino ad 84 volte

var inputUserEl = document.getElementById('input');
var inputBtn = document.getElementById('inputBtn');

var attempts = [];
var inputNumber = 0;
var userAttempts = 0;
var message = 'Hai perso! Gioca ancora';


inputBtn.addEventListener('click', function(){

  inputNumber = parseInt(inputUserEl.value);


  //Imposto ciclo per stabilire se numero è idoneo a far continuare il gioco o no, in caso contrario il gioco finisce

  if ( !isMatchInArray(inputNumber, computerNumbers) && !isMatchInArray(inputNumber, attempts) && rangePermitted(inputNumber, MIN_BOUND, maxBound)) {
    attempts.push(inputNumber);
    userAttempts++;
    rounds--;
    if (rounds == 0) {
      message = 'Hai vinto, hai conquistato il prato fiorito!'
      alert(message);
    }
  } else if (isMatchInArray(inputNumber, computerNumbers)) {
    message = 'Hai perso, hai calpestato una mina! Gioca di nuovo!'
    alert(message);
    location.reload();
  } else if (isMatchInArray(inputNumber, attempts) || !rangePermitted(inputNumber)) {
    message = 'Hai perso, numero già inserito o non consentito! Gioca di nuovo!'
    alert(message);
    location.reload();
  }


  var scoreEl = document.getElementById('score');
  var listAttemptEl = document.getElementById('listAttempt');

  scoreEl.innerHTML = userAttempts;
  listAttemptEl.innerHTML += (inputNumber + ' - ');

});

// Gestisco il pulsante per il refresh della pagina

var reloadBtn = document.getElementById('reloadBtn');

reloadBtn.addEventListener('click', function(){

  location.reload();

})
