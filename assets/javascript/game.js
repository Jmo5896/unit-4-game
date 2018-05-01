var numberPool = [];
//loop for building numberPool
for (var i = 19; i < 121; i++) {
    numberPool.push(i);
}
console.log('game.js loaded')

if ($) {
    console.log('jqueryfound')
}
//global variables
var wins = 0;
var losses = 0;
var guessNumber = numberPool[Math.floor(Math.random() * numberPool.length)];
var currentScore = 0;
var crystalANumber = Math.ceil(Math.random()*12);
var crystalBNumber = Math.ceil(Math.random()*12);
var crystalCNumber = Math.ceil(Math.random()*12);
var crystalDNumber = Math.ceil(Math.random()*12);

document.onclick = function(){
    if (currentScore === guessNumber) {       
        wins++;
        alert('You Win!' );
        updateVariablesOnPage();
    } else if (currentScore > guessNumber){
        losses++;
        alert('better luck next time!');
        updateVariablesOnPage();
    }
   
}
function updateVariablesOnPage() {
    currentScore = 0;
    guessNumber = numberPool[Math.floor(Math.random() * numberPool.length)]; 
    crystalANumber = Math.ceil(Math.random()*12);
    crystalBNumber = Math.ceil(Math.random()*12);
    crystalCNumber = Math.ceil(Math.random()*12);
    crystalDNumber = Math.ceil(Math.random()*12);
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#currentScore').html(currentScore);
    $('#guessNumber').html(guessNumber);
}
updateVariablesOnPage();

$('#a').on('click', function() {
    currentScore += crystalANumber;
});

$('#b').on('click', function() {
    currentScore += crystalBNumber;
});

$('#c').on('click', function() {
    currentScore += crystalCNumber;
});

$('#d').on('click', function() {
    currentScore += crystalDNumber;
});
$('.crystalButtons').on('click', function() {
    $('#currentScore').html(currentScore);
});





