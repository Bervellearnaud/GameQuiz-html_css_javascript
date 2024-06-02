// script.js
const quizData = [
  {
    question: "Quelle est la capitale de la France?",
    choices: ["Paris", "Londres", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Quelle est la capitale de l'Allemagne?",
    choices: ["Paris", "Londres", "Berlin", "Madrid"],
    correct: "Berlin",
  },
  {
    question: "Quelle est la capitale de l'Espagne?",
    choices: ["Paris", "Londres", "Berlin", "Madrid"],
    correct: "Madrid",
  },
  {
    question: "Quelle est la capitale du Royaume-Uni?",
    choices: ["Paris", "Londres", "Berlin", "Madrid"],
    correct: "Londres",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  const buttons = choicesElement.getElementsByClassName("choice");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = currentQuestion.choices[i];
    buttons[i].onclick = checkAnswer;
  }
  resultElement.innerText = "";
}

function checkAnswer() {
  const selectedAnswer = this.innerText;
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    score++;
    resultElement.innerText = "Correct!";
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = `Incorrect! La bonne réponse était ${currentQuestion.correct}`;
    resultElement.style.color = "red";
  }
  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-container").classList.remove("active");
  scoreContainer.classList.add("active");
  scoreElement.innerText = `Vous avez obtenu ${score} sur ${quizData.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  scoreContainer.classList.remove("active");
  document.getElementById("quiz-container").classList.add("active");
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

document.getElementById("quiz-container").classList.add("active");
loadQuestion();
