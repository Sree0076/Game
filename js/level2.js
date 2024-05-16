function moveRight() {
  const shipImageJs = document.getElementById("shipImage");

  const currentLeft = parseFloat(shipImageJs.style.marginLeft) || 20;

  const newLeft = currentLeft + 5;

  if (newLeft < 40) {
    shipImageJs.style.marginLeft = newLeft + "%";
  } else {
    // localStorage.setItem('playerTwoScore', playerTwoScore);
    alert(
      "Player 2 has reached the edge and wins with score: " + playerTwoScore
    );

    location.reload(true);
  }
}

function moveLeft() {
  const shipImageJs = document.getElementById("shipImage");

  const currentLeft = parseFloat(shipImageJs.style.marginLeft) || 20;

  const newLeft = currentLeft - 5;

  if (newLeft > 0) {
    shipImageJs.style.marginLeft = newLeft + "%";
  } else {
    localStorage.setItem("playerOneScore", playerOneScore);
    alert(
      "Player 1 has reached the edge and wins with score: " + playerOneScore
    );

    location.reload(true);
  }
}

function playerOneColorChange() {
  const playerOne = document.getElementById("playerOne");
  const playerTwo = document.getElementById("playerTwo");
  playerOne.style.backgroundColor = "green";
  playerTwo.style.backgroundColor = "grey";
  playerOne.style.opacity = 0.9;
  playerTwo.style.opacity = 0.5;
}

function playerTwoColorChange() {
  const playerOne = document.getElementById("playerOne");
  const playerTwo = document.getElementById("playerTwo");
  playerOne.style.backgroundColor = "grey";
  playerTwo.style.backgroundColor = "green";
  playerTwo.style.opacity = 0.9;
  playerOne.style.opacity = 0.5;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "2") {
    moveRight();
    playerTwoColorChange();
  } else if (event.key === "1") {
    moveLeft();
    playerOneColorChange();
  }
});

let playerChance = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let timeLeft = 20;
let timerInterval;

function winnerSelector() {
  if (playerOneScore > playerTwoScore) {
    // localStorage.setItem('playerOneScore', playerOneScore);
    alert("Quiz over. Player 1 wins with a score: " + playerOneScore);

    location.reload(true);
  } else if (playerOneScore < playerTwoScore) {
    // localStorage.setItem('playerTwoScore', playerTwoScore);
    alert("Quiz over. Player 2 wins with a score: " + playerTwoScore);

    location.reload(true);
  } else {
    // localStorage.setItem('playerOneScore', playerOneScore);
    // localStorage.setItem('playerTwoScore', playerTwoScore);
    alert("Quiz over. Its a tie with score: " + playerOneScore);

    location.reload(true);
  }
}

async function fetchQuizQuestions() {
  const response = await fetch("../json/quiz.json");
  const questions = await response.json();

  return questions;
}

async function renderQuiz() {
  const quizContainer = document.getElementById("quiz");
  const questions = await fetchQuizQuestions();

  let questionIndex = 0;

  renderQuestion();

  function renderQuestion() {
    quizContainer.innerHTML = ""; // Clear previous content

    const question = questions[questionIndex];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionTitle = document.createElement("h2");
    questionTitle.textContent = `Q${questionIndex + 1}: ${question.question}`;
    questionElement.appendChild(questionTitle);

    const answersList = document.createElement("ul");
    answersList.classList.add("answers");

    for (const [key, value] of Object.entries(question.answers)) {
      if (value) {
        const answerItem = document.createElement("li");
        const answerButton = document.createElement("button");
        answerButton.textContent = value;
        answerButton.addEventListener("click", () => {
          checkAnswer(key);
        });
        answerItem.appendChild(answerButton);
        answersList.appendChild(answerItem);
      }
    }

    questionElement.appendChild(answersList);
    quizContainer.appendChild(questionElement);

    if (playerChance % 2 != 0) {
      playerOneColorChange();
      playerChance++;
    } else {
      playerTwoColorChange();
      playerChance++;
    }

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      timeLeft--;

      updateTimerDisplay();
      if (timeLeft <= 0) {
        questionIndex++;

        if (questionIndex < questions.length) {
          renderQuestion();
          timeLeft = 20;
        } else {
          clearInterval(timerInterval);

          winnerSelector();
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    document.getElementById("timeLeft").textContent = timeLeft;
  }

  function checkAnswer(selectedAnswer) {
    const question = questions[questionIndex];
    const correctAnswerKey = Object.keys(question.correct_answers).find(
      (key) => question.correct_answers[key] === "true"
    );

    if (selectedAnswer + "_correct" === correctAnswerKey) {
      //because in the api documentation, the key is defined as answera_correct

      if ((playerChance - 1) % 2 != 0) {
        playerOneScore++;
        moveLeft();

        console.log("Player one score: " + playerOneScore);
      } else {
        playerTwoScore++;
        moveRight();

        console.log("Player two score: " + playerTwoScore);
      }
    }

    questionIndex++;

    if (questionIndex < questions.length) {
      renderQuestion();
      timeLeft = 20;
    } else {
      clearInterval(timerInterval);

      winnerSelector();
    }
  }
}

document.addEventListener("DOMContentLoaded", renderQuiz);
