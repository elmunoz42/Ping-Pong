///////////BE/////////////
var userInput;
var countOutput = [];
var bagOfNumbers = [];
var userInputIsNaN = true;
var counter = function(count) {
  countOutput.splice(0,countOutput.length);
  bagOfNumbers.splice(0,bagOfNumbers.length);
  for (var i=1 ; i <= count ; i++) {
    var j=i;
    if (j % 15 === 0 ) {
      bagOfNumbers.push("Ping-Pong!");
    }
    else if (j % 5 === 0){
      bagOfNumbers.push("Pong!");
    }
    else if (j % 3 === 0){
      bagOfNumbers.push("Ping!");
    }
    else {
      bagOfNumbers.push(i);
    }
  }
}


///////////UI///////////

$(document).ready(function(){
  
  $("form#input-form").submit(function(event){
    event.preventDefault();
    // clear output-list
    $("#output-list").empty();
    countOutput.splice(0,countOutput.length);
    bagOfNumbers.splice(0,bagOfNumbers.length);

    // userInput evaluation
    userInput = Math.floor($("#text-input").val());
    userInputIsNaN = isNaN(userInput);
    if (parseInt(userInput) < 0) {
      countOutput.splice(0,countOutput.length);
      bagOfNumbers.splice(0,bagOfNumbers.length);
      alert("Please input a positive integer and submit again. Thanks!");
    }
    else if ( userInputIsNaN === false ) {
      counter(userInput);
    }
    else if ( userInputIsNaN === true) {
      countOutput.splice(0,countOutput.length);
      bagOfNumbers.splice(0,bagOfNumbers.length);
      alert("Please input an integer and submit again. Thanks!");
    }
    else {}


    // output styling
    countOutput = bagOfNumbers.map(function(number) {
      if (number === "Ping!") {
        return "<li class='ping'>" + number + "</li>";
      }
      else if (number === "Pong!") {
        return "<li class='pong'>" + number + "</li>";
      }
      else if (number === "Ping-Pong!") {
        return "<li class='ping-pong'>" + number + "</li>";
      } else {
        return "<li>" + number + "</li>"
      }
    });
    // bagOfNumbers.map
    $("#output-list").append(countOutput);
  });
  // submit button
});
// document ready
