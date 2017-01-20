///////////BE/////////////
var userInput;
var countOutput = [];
var bagOfNumbers = [];
var counter = function(count) {
  for (var i=1 ; i <= count ; i++) {
    var j=i;
    if (j % 15 === 0 ) {
      bagOfNumbers.push("Ping-Pong!");
      countOutput.push("<li id='ping-pong'>" + bagOfNumbers[i-1] + "</li>");
      console.log(bagOfNumbers[i-1]);
    }
    else if (j % 5 === 0){
      bagOfNumbers.push("Pong!");
      countOutput.push("<li id='pong'>" + bagOfNumbers[i-1] + "</li>");
      console.log(bagOfNumbers[i-1]);
    }
    else if (j % 3 === 0){
      bagOfNumbers.push("Ping!");
      countOutput.push("<li id='ping'>" + bagOfNumbers[i-1] + "</li>");
      console.log(bagOfNumbers[i-1]);
    }
    else {
      bagOfNumbers.push(i);
      countOutput.push("<li>" + bagOfNumbers[i-1] + "</li>");
      console.log(bagOfNumbers[i-1]);
    }
    // alert(countOutput);
    // console.log(countOutput);

  }

}


// var rhythmPingPong = function(userInput){
//   var timeCount = parseInt(userInput);
//   alert(timeCount);
//   var startTime = Math.floor(Date.now()/1000);
//   alert(startTime);
//   // var timeLimit = Math.floor(Date.now()/1000) + parseInt(timeCount);
//   var step=1;
//   for (var j=1 ; j <= timeCount ; j++) {
//     if (Math.floor(Date.now()/1000) - startTime > j) {
//       step++;
//       $("#output-list").append(countOutput[step]);
//       // alert(step);
//       console.log("step: " + step);
//     }
//     else {
//       j=step;
//     }
//   }
// }








///////////UI///////////

$(document).ready(function(){
  // alert("Hello my name is Ping-Pong");
  // userInput = prompt("How high should I count?");
  $("form#input-form").submit(function(event){
    event.preventDefault();
    countOutput.splice(0,countOutput.length);
    bagOfNumbers.splice(0,countOutput.length);

    userInput = $("#text-input").val();
    // timeCount = userInput;
    // console.log("timeCount: " + timeCount);
    counter(userInput);
    // rhythmPingPong(userInput);
    // $("#output-list").append(countOutput);
    // alert(userInput);
    // alert(bagOfNumbers);

    // rhythmPingPong:
    var timeCount = parseInt(userInput);
    // alert(timeCount);
    var startTime = Math.floor(Date.now()/1000);
    // alert(startTime);
    // var timeLimit = Math.floor(Date.now()/1000) + parseInt(timeCount);
    var step=1;
    for (var j=1 ; j <= timeCount ; j++) {
      if (Math.floor(Date.now()/1000) - startTime > j) {
        step++;
        $("#output-list").append(countOutput[step]);
        console.log("step: " + step);
      }
      else {
        j=step;
      }
    }

  })



});
