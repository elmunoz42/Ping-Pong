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
      countOutput.push("<li id='ping-pong'>" + bagOfNumbers[i-1] + "</li>");
    }
    else if (j % 5 === 0){
      bagOfNumbers.push("Pong!");
      countOutput.push("<li id='pong'>" + bagOfNumbers[i-1] + "</li>");
    }
    else if (j % 3 === 0){
      bagOfNumbers.push("Ping!");
      countOutput.push("<li id='ping'>" + bagOfNumbers[i-1] + "</li>");
    }
    else {
      bagOfNumbers.push(i);
      countOutput.push("<li>" + bagOfNumbers[i-1] + "</li>");
    }
  }
}




///////////UI///////////

$(document).ready(function(){

  $("form#input-form").submit(function(event){
    event.preventDefault();
    countOutput.splice(0,countOutput.length);
    bagOfNumbers.splice(0,bagOfNumbers.length);
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
    $("#output-list").empty();
    $("#output-list").append(countOutput);
  })
});
