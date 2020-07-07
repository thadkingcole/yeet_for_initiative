// GLOBAL VARIABLES
let total = 0,
  modifier = 0;

// FUNCTIONS
// random number between 1 and # of sides from w3schools.org
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// MAIN
// put starting total in table
$("#total").text(total);

// add 1 to modifier
$("#add1").click(function () {
  modifier++;
  $("#modifier").val(modifier);
});

// subtract 1 to modifier
$("#minus1").click(function () {
  modifier--;
  $("#modifier").val(modifier);
});

// zero out modifier
$("#zero").click(function () {
  modifier = 0;
  $("#modifier").val(modifier);
});

// click event for each dice
$(".dice").click(function () {
  const diceSides = $(this).data("num"), // number of sides to be rolled
    roll = rollDice(diceSides) + modifier, // result of roll including modifier
    newRow = $("<tr>"); // create new table to display roll results
  // populate new row with d{#sides}, roll result, and clear button
  newRow.append($("<td>").text(`d${diceSides}`));
  newRow.append($("<td>").text(roll));
  newRow.append(
    $("<td>")
      .addClass("remove-roll")
      .append(
        $("<i>")
          .addClass("material-icons text-danger")
          .text("remove_circle_outline")
      )
  );
  // prepend the new row to the table
  $("#rolls").prepend(newRow);
  // update total for table
  total += roll;
  $("#total").text(total);
  // remove invisible class so that table can be seen
  $("table").removeClass("invisible");
});

// clear roll event
$("#rolls").on("click", ".remove-roll", function () {
  // subtract the roll being removed from total
  total -= parseInt($(this).prev().text(), 10);
  // remove corresponding row clicked by user
  $(this).parent().remove();
  // display new total on table
  $("#total").text(total);
});

// clear all rolls event
$("#clear-all").click(function () {
  // reset total to 0
  total = 0;
  // remove all rows of rolls
  $("#rolls").empty();
  // hide table
  $("table").addClass("invisible");
});

// tests (for debugging only)
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
