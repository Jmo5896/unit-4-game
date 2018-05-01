var numberPool = [];
//loop for building numberPool
for (var i = 19; i < 121; i++) {
    numberPool.push(i);
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





