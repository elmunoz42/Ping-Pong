///////////BE/////////////
var userInput;
var countOutput;
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
    // alert(bagOfNumbers);
  }

}











///////////UI///////////

$(document).ready(function(){
  alert("Hello my name is Ping-Pong");
  userInput = prompt("How high should I count?");
  counter(userInput);
  alert(bagOfNumbers);



});
