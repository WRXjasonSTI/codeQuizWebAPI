var userScore = 0;

// Start Button Functionality
var startButton = document.getElementById("startButton");
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', setTime);
var questionBody = document.getElementById("questionBody");

function startGame() {
    var startBlock = document.getElementById("startBlock");
    // startBlock.classList.add("invisible")
    startBlock.remove();

    var quesBlock = document.getElementById("quesBlock");
    quesBlock.classList.remove("invisible");
    setNextQuestion();    
}

// Next Question Button Functionality
var nextButton = document.getElementById("nextButton");

nextButton.addEventListener('click', nextQuestion);

function setNextQuestion() {

}

// Quiz Options and Answer Select functionality
var firstOption = document.getElementById("firstOption");
var secondOption = document.getElementById("secondOption");
var thirdOption = document.getElementById("thirdOption");
var fourthOption = document.getElementById("fourthOption");

function chooseAnswer () {

}


// Timer functionality and display
var timeEl = document.querySelector("timeDisplay");
// var secondsLeft = 0;

function setTime() {
    secondsLeft = 180;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeDisplay.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        }
    }, 1000);
}


// GAME OVER when timer hits 0 or 10 questions answered

function sendMessage() {
    timeDisplay.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "./Assets/spagett.PNG");
    quesBlock.appendChild(imgEl);
  
  }

// Questions in the form of an array of objects of elements of properties
var questions = [
    {
      question: 'With which team did Sebastian Vettel win his Fourth Formula 1 world title?',
      answers: [
        { text: 'Scuderia Ferrari', correct: false },
        { text: 'Red Bull Racing', correct: true },
        { text: 'McLaren', correct: false },
        { text: 'Williams BMW', correct: false }
      ]
    },
    {
      question: 'Who is the youngest F1 grand prix race winner?',
      answers: [
        { text: 'Giuseppe Farina', correct: false },
        { text: 'Fernando Alonso', correct: false },
        { text: 'Sebastian Vettel', correct: false },
        { text: 'Max Verstappen', correct: true }
      ]
    },
    {
      question: 'Which team won the most Constructor\'s titles from 2010 to 2019?',
      answers: [
        { text: 'Mercedes', correct: true },
        { text: 'Ferrari', correct: false },
        { text: 'Red Bull Racing', correct: false },
        { text: 'McLaren', correct: false }
      ]
    },
    {
        question: 'Which driver in 2019 was replaced mid-season by Alex Albon?',
        answers: [
          { text: 'Pierre Gasly', correct: true },
          { text: 'Daniil Kvyat', correct: false },
          { text: 'Romain Grosjean', correct: false },
          { text: 'Robert Kubica', correct: false }
        ]
      },
      {
        question: 'Where is the US Grand Prix held?',
        answers: [
          { text: 'Watkins Glen, New York', correct: false },
          { text: 'Long Beach, California', correct: false },
          { text: 'Austin, Texas', correct: true },
          { text: 'Fairfax, Virginia', correct: false }
        ]
      },
      {
        question: 'This event determines the starting order for race day.',
        answers: [
          { text: 'Free Practice 3', correct: false },
          { text: 'Free Practice 2', correct: false },
          { text: 'Parc Fermé', correct: false },
          { text: 'Qualifying', correct: true }
        ]
      },
      {
        question: 'What year was the champion NOT named "Sebastian Vettel" or "Lewis Hamilton?"',
        answers: [
          { text: '2018', correct: false },
          { text: '2016', correct: true },
          { text: '2012', correct: false },
          { text: '2013', correct: false }
        ]
      },
      {
        question: 'How many engine manufacturers were on the 2019 grid?',
        answers: [
          { text: '6', correct: false },
          { text: '5', correct: false },
          { text: '3', correct: false },
          { text: '4', correct: true }
        ]
      },
      {
        question: 'Which driver has the most Drivers\' world titles?',
        answers: [
          { text: 'Michael Schumacher', correct: true },
          { text: 'Sebastian Vettel', correct: false },
          { text: 'Lewis Hamilton', correct: false },
          { text: 'Taki Inoue', correct: false }
        ]
      },
      {
        question: 'How many wheels does a Formula 1 car have?',
        answers: [
          { text: '4', correct: true },
          { text: 'Four', correct: true },
          { text: 'IV', correct: true },
          { text: 'The square root of 16', correct: true }
        ]
      }
]