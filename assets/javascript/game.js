// Push button to start game or new game.
var computerNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var sum = 0;

function newGame() {
    computerNumber = Math.floor((Math.random() * 120) + 19);
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
    crystalValue3 = Math.floor((Math.random() * 12) + 1);
    crystalValue4 = Math.floor((Math.random() * 12) + 1);
    sum = 0
    $("#blue").attr("crystalValue", crystalValue1);
    $("#purple").attr("crystalValue", crystalValue2);
    $("#green").attr("crystalValue", crystalValue3);
    $("#red").attr("crystalValue", crystalValue4);
}

$("#start").click(function () {
    newGame()
})

$("#blue").click(function () {
    sum += crystalValue1
    $(".guessNumber").text(sum);
});

$("#purple").click(function () {
    sum += crystalValue2
    $("#guessNumber").text(sum);
});

$("#green").click(function () {
    sum += crystalValue3
    $("#guessNumber").text(sum);
});

$("#red").click(function () {
    sum += crystalValue4
    $("#guessNumber").text(sum);
});






// If number less, then display in bottom box.


// If number more, then lose.


// if numbers equals, then win.

// Display wins.


// Display losses.