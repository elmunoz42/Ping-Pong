///////////BE/////////////
var userInput;
var countOutput;
var bagOfNumbers = [];
var counter = function(count) {
  for (var i=0 ; i <= count ; i++) {
    bagOfNumbers.push(i);
  }

}











///////////UI///////////

$(document).ready(function(){
  alert("Hello my name is Ping-Pong");
  userInput = prompt("How high should I count?");
  counter(userInput);
  alert(bagOfNumbers);



});
