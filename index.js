//IMPORTS
var readlineSync = require("readline-sync");
const chalk = require("chalk");

//FUNCTION
function play(ques,option,ans) {
  console.log(ques);
  var index = readlineSync.keyInSelect(option);

  if (option[index] === ans ) {
    console.log(chalk.bgGreen.blue.bold("Right!"));
    score++;
  }
  else {
    console.log(chalk.bgRedBright.black.bold("Wrong!"));
    console.log(chalk.hex("#064E3B").bold("The correct answer was = "+ option[index]));
  }
  console.log("Score : "+ score);
  if (score === 5){
    console.log(chalk.hex("#064E3B").bold("\n\nWoW...You have now moved to level 2\n"))
  }

  if (score === 10){
    console.log(chalk.hex("#064E3B").bold("Looks like we have got the biggest fan of FRIENDS here. \n Congrats, you have topped the chart"))
  }
  console.log("---------------------------------------");
}

//INPUTS
name = readlineSync.question(chalk.hex("#064E3B").bold("Type your Name = "));
console.log(chalk.hex("#F59E0B").bold("\nHI "+name+"!!\nLets play a quiz and see how much you know about FRIENDS \n"));

//QUES-ANS
var ques1 = ("How many sisters does Joey have?");
var option1 = ["6","7","5","4"];

var ques2 = ("Who was Monica's first kiss?");
var option2 = ["Chandler", "Ross", "Joey", "Rachel"];

var ques3 = ("How many times has Ross been married?");
var option3 = ["1","2","4","3"];

var ques4 = ("What's the name of the dancer Joey lived with?");
var option4 = ["Janice", "Janine", "Jacey"];

var ques5 = ("Who got stuck in a pair of leather pants?");
var option5 = ["Joey", "Ross", "Chandler", "Richard"];

var ques6 = ("Who hates Thanksgiving?");
var option6 = ["Joey", "Ross", "Chandler", "Richard"];

var ques7 = ("What’s Monica’s biggest pet peeve?");
var option7 = ["Humans dressed as animals", "Animals dressed as Humans"];

var ques8 = ("Where did Monica get a pencil stuck when she was 14?");
var option8 = ["Nose", "Ear", "Mouth"];

var ques9 = ("What was the name of Joey’s childhood imaginary friend??");
var option9 = ["Maurice", "Morris", "Morry", "Maty"];

var ques10 = ("Who says the last line of the series?");
var option10 = ["Joey", "Ross", "Chandler", "Rachel", "Pheebe", "Monica"];

var ques = [ques1, ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10];
var option = [option1, option2, option3, option4, option5, option6, option7, option8, option9, option10 ];

var ans = ["7","Ross","3", "Janine","Ross", "Chandler", "Animals dressed as Humans", "Nose", "Maurice", "Chandler" ];

//PROCESSING
var score = 0 ;
for (var i=0; i<ques.length; i++) {
    play(ques[i],option[i],ans[i]);
}

//OUTPUT
console.log(chalk.hex("#F59E0B").bold("\nYour total Score = "+score));
console.log(chalk.hex("#F59E0B").bold("Thanks for playing!!!"))

//DATA FROM FREINDS 
var data = {
  Simphia: 3,
  Sehaj : 7,
  Aditya : 5,
  Abhijeet :8 ,
}

console.log (chalk.hex("#064E3B").bold("\n\nScores collected\n"))

//PROCESSING
var highScorer, max = 0;
for (const [key, value] of Object.entries(data)) {
  console.log(chalk.hex("#F59E0B").bold(key+":"+value))
  if (value > max) {
    max = value
    highScorer = key
  } 
}

//OUTPUT
console.log (chalk.hex("#064E3B").bold.bgWhite("\nHighest Scorer = "+ highScorer));

//END OF CODE
