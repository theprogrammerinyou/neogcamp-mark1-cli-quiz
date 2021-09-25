
var readLineSync = require('readline-sync');

var chalk = require('chalk');

var score = 0;

var name = chalk.red(readLineSync.question("What is your name? "));

console.log(chalk.red("welcome " + name + " do you know Shivansh? "));

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green(("right")));
    chalk.green(score = score + 1);
  }
  else {
    console.log(chalk.red(("wrong!")));
  }

  console.log(chalk.green(("Current score is " + score)));
  console.log(chalk.red('------------'));
}


var questions = [
  {
    question: "What's Shivansh's age? (in words) ",
    answer: "twenty two"
  },
  {
    question: "Where does shivansh work? ",
    answer: "cisco"
  },
  {
    question: "Where does shivansh live? ",
    answer: "hyderabad"
  },
  {
    question: "What character does shivansh like ?",
    answer: "batman"
  },
  {
    question: "Where does shivansh likes to go? ?",
    answer: "Indore"
  }
];


for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];

  play(currentquestion.question, currentquestion.answer);
}

log(chalk.red(name , " your final score is : " , score));
