///////////BE/////////////
var userInput;
var countOutput = [];
var bagOfNumbers = [];
var counter = function(count) {
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

    countOutput.push("<li>" + bagOfNumbers[i-1] + "</li>");
  }

}











///////////UI///////////

$(document).ready(function(){
  // alert("Hello my name is Ping-Pong");
  // userInput = prompt("How high should I count?");
  $("form#input-form").submit(function(event){
    event.preventDefault();
    countOutput.splice(0,countOutput.length);
    bagOfNumbers.splice(0,countOutput.length);
    userInput = $("#text-input").val();
    counter(userInput);
    countOutput =
    $("#output-list").append(countOutput);
    // alert(userInput);
    // alert(bagOfNumbers);
  })



});
