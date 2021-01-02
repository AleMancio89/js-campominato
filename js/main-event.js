var RANDOM_NUMBERS = 16;
var MIN_BOUND = 1;
var MAX_BOUND_EASY = 100;
var MAX_BOUND_MEDIUM = 81;
var MAX_BOUND_HARD = 49;

var maxBound = MAX_BOUND_EASY;
var rounds = 0;
var classCells = "";
var mines = [];
var playerScore = 0;

// Seleziono livello di difficoltà adattando il numero di tentativi massimi

var isEasyEl = document.getElementById('easy');
var isMediumEl = document.getElementById('medium');
var isHardEl = document.getElementById('hard');
var startBtn = document.getElementById('startBtn');
var startEl = document.getElementById('start');
var playEl = document.getElementById('play');


startBtn.addEventListener('click', function(){

  //Permetto al giocatore di scegliere la difficoltà

  isEasy = isEasyEl.selected;
  isMedium = isMediumEl.selected;
  isHard = isHardEl.selected;


  if (isMedium) {
    maxBound = MAX_BOUND_MEDIUM;
    classCells = "medium";
  } else if (isHard) {
    maxBound = MAX_BOUND_HARD;
    classCells = "hard";
  } else {
    maxBound = MAX_BOUND_EASY;
    classCells = "easy";
  }

  rounds = maxBound - RANDOM_NUMBERS;

  //Creo numeri random per il pc e li salvo in un array

  while (mines.length < RANDOM_NUMBERS) {
    var randomPcNumber = (randomNumber(MIN_BOUND, maxBound));
    if (!isMatchInArray(randomPcNumber, mines)) {
      mines.push(randomPcNumber);
    }
  }

  console.log(mines.sort());

  //Genero la griglia in base alla difficoltà scelta

  for(var i = 1; i <= maxBound; i++){
      var cell = document.createElement("div");
      cell.value = i;
      cell.classList.add("cell", classCells);
      document.getElementById("dashboard").appendChild(cell);      
  }

  //Salvo gli elementi "cell" e gestisco l'evento del click su ognuno

  var cellsListEl = document.getElementsByClassName("cell");

  //Al click su ogni casella comparo il value con l'array delle mine, se presente il gioco finisce

  for(var count = 0; count < cellsListEl.length; count++){
      cellsListEl[count].addEventListener('click', function(event){
        var cellValue = parseInt(event.target.value);

        if(isMatchInArray(cellValue, mines)){
            event.target.style.backgroundImage = "url(img/bomb.png)";
            setTimeout(function(){
                alert('Hai Perso!');
                location.reload();
            }, 200)
        } else {
            event.target.style.backgroundColor = "green";            
            playerScore++;
            if (rounds == playerScore){
                alert('Hai Vinto!');
                location.reload();
            }
        }
      })   
  }

  startEl.style.display = 'none';
  playEl.style.display = 'block';
  


});


