// random number between 1 and # of sides from w3schools.org
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// main
// make click event for each dice
$(".dice").click(function () {
  const diceSides = $(this).data("num");
  const roll = rollDice(diceSides);
  $("#rolls").append($("<h2>").text(`d${diceSides}: ${roll}`))
  console.log(roll);
});

// tests
// roll one million times and show results on console
// function testDice(sides) {
//   // create array to hold results
//   const results = new Array();
//   for (let i = 1; i <= sides; i++) {
//     // initialize all results to 0
//     // results[0] will be the bad result counter
//     results[i] = 0;
//   }
//   for (let i = 0; i < 1000000; i++) {
//     // roll the dice
//     let roll = rollDice(sides);
//     // if the roll is valid
//     if (roll >= 1 && roll <= sides) {
//       // incriment the respective esult
//       results[roll]++;
//     } else {
//       // increment bad result counter
//       results[0]++;
//     }
//   }
//   console.log(results);
// }
