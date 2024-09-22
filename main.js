// function to roll the dice 
function rollDice () {
    // To output random numbers
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;

    // hiding All of dots
    // let dots = document.getElementsByClassName("diceSix");
    // dots.forEach(diceSix => diceSix.classList.add(hidden));
    let dots = Array.from(document.getElementsByClassName("diceSix"));
    dots.forEach(diceSix => diceSix.classList.add('hidden'));
    
          
    // Dice to show when  rolled
    if (diceRoll === 1) {
        document.getElementById("dice3").classList.remove("hidden");
    } else if (diceRoll === 2) {
        document.getElementById("dice1").classList.remove("hidden");
        document.getElementById("dice6").classList.remove("hidden");
    } else if (diceRoll === 3) {
        document.getElementById("dice1").classList.remove("hidden");
        document.getElementById("dice4").classList.remove("hidden");
        document.getElementById("dice5").classList.remove("hidden");
    } else if (diceRoll === 4) {
        document.getElementById("dice1").classList.remove("hidden");
        document.getElementById("dice2").classList.remove("hidden");
        document.getElementById("dice5").classList.remove("hidden");
        document.getElementById("dice6").classList.remove("hidden");
    } else if (diceRoll === 5) {
        document.getElementById("dice1").classList.remove("hidden");
        document.getElementById("dice2").classList.remove("hidden");
        document.getElementById("dice3").classList.remove("hidden");
        document.getElementById("dice4").classList.remove("hidden");
        document.getElementById("dice5").classList.remove("hidden");
    } else if (diceRoll === 6) {
        document.getElementById("dice1").classList.remove("hidden");
        document.getElementById("dice2").classList.remove("hidden");
        document.getElementById("dice3").classList.remove("hidden");
        document.getElementById("dice4").classList.remove("hidden");
        document.getElementById("dice5").classList.remove("hidden");
        document.getElementById("dice6").classList.remove("hidden");
    }

    // second dice condition 
    if (diceRoll2 === 1) {
        document.getElementById("dice9").classList.remove("hidden");
    } else if (diceRoll2 === 2) {
        document.getElementById("dice7").classList.remove("hidden");
        document.getElementById("dice12").classList.remove("hidden");
    } else if (diceRoll2 === 3) {
        document.getElementById("dice7").classList.remove("hidden");
        document.getElementById("dice10").classList.remove("hidden");
        document.getElementById("dice11").classList.remove("hidden");
    } else if (diceRoll2 === 4) {
        document.getElementById("dice7").classList.remove("hidden");
        document.getElementById("dice8").classList.remove("hidden");
        document.getElementById("dice11").classList.remove("hidden");
        document.getElementById("dice12").classList.remove("hidden");
    } else if (diceRoll2 === 5) {
        document.getElementById("dice7").classList.remove("hidden");
        document.getElementById("dice8").classList.remove("hidden");
        document.getElementById("dice9").classList.remove("hidden");
        document.getElementById("dice10").classList.remove("hidden");
        document.getElementById("dice11").classList.remove("hidden");
    } else if (diceRoll2 === 6) {
        document.getElementById("dice7").classList.remove("hidden");
        document.getElementById("dice8").classList.remove("hidden");
        document.getElementById("dice9").classList.remove("hidden");
        document.getElementById("dice10").classList.remove("hidden");
        document.getElementById("dice11").classList.remove("hidden");
        document.getElementById("dice12").classList.remove("hidden");
    }



}

   

let rollingDice = document.getElementById("roll-dice");
rollingDice.addEventListener("click", rollDice)
