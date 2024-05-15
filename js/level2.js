



function moveRight(){
    const shipImageJs=document.getElementById("shipImage")
     // console.log(shipImageJs.style.marginLeft)
        // console.log(shipImageJs.style.left)
        // console.log(parseFloat(shipImageJs.style.marginLeft))

        const currentLeft = parseFloat(shipImageJs.style.marginLeft)||20;
       
        // console.log("right: "+currentLeft)
        const newLeft = currentLeft + 5;
        // console.log(newLeft)
        if(newLeft<40){
        shipImageJs.style.marginLeft = newLeft + '%';
        }
        else{
            alert("Player 2 Wins with score: "+playerTwoScore)
            // console.log(playerTwoScore)
            location.reload(true);

        }
}

function moveLeft(){
    const shipImageJs=document.getElementById("shipImage")
     // console.log(shipImageJs.style.marginLeft)
        // console.log(shipImageJs.style.left)
        // console.log(parseFloat(shipImageJs.style.marginLeft))

        const currentLeft = parseFloat(shipImageJs.style.marginLeft)||20;
       
        // console.log("left: "+currentLeft)
        const newLeft = currentLeft - 5;
        // console.log(newLeft)
        if(newLeft>0){
        shipImageJs.style.marginLeft = newLeft + '%';
        }
        else{
            alert("Player 1 Wins with score: "+playerOneScore);
            // console.log(playerOneScore);
            location.reload(true);
        }
}

function playerOneColorChange(){
    const playerOne=document.getElementById("playerOne")
    const playerTwo=document.getElementById("playerTwo")
    playerOne.style.color='green';
    playerTwo.style.color='red';
}

function playerTwoColorChange(){
    const playerOne=document.getElementById("playerOne")
    const playerTwo=document.getElementById("playerTwo")
    playerOne.style.color='red';
    playerTwo.style.color='green';
}


document.addEventListener('keydown',function(event){
   
    // console.log(shipImageJs)
    if(event.key === '2'){
       moveRight();
       playerTwoColorChange();
    } else if(event.key === '1'){
        moveLeft();
        playerOneColorChange();
    }      
})

//quiz js from here

let playerChance=1;
let playerOneScore=0;
let playerTwoScore=0;
let timeLeft=20;
let timerInterval;

function winnerSelector(){
    console.log("winner 1: "+playerOneScore)
    console.log("winner 2: "+playerTwoScore)

    if(playerOneScore>playerTwoScore){
        alert("Player 1 wins with a score: "+playerOneScore)
        location.reload(true)
    }
    else if(playerOneScore<playerTwoScore){
        alert("Player 2 wins with a score: "+playerTwoScore)
        location.reload(true)

    }
    else {
        alert("Game ends with a Tie")
        location.reload(true)

    }
}



async function fetchQuizQuestions() {
    const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=9mEY0FIxQz8NMwEB0o8CC1hlaOaoHyLcKTOkg5AT&limit=10&category=Linux&difficulty=easy');
                const questions = await response.json();
                return questions;
            }

      
     
            async function renderQuiz() {
                const quizContainer = document.getElementById('quiz');
                const questions = await fetchQuizQuestions();
     
                let questionIndex = 0;
     
                renderQuestion();

                
                function renderQuestion() {
                    quizContainer.innerHTML = ''; // Clear previous content
     
                    const question = questions[questionIndex];
                    const questionElement = document.createElement('div');
                    questionElement.classList.add('question');
     
                    const questionTitle = document.createElement('h2');
                    questionTitle.textContent = `Q${questionIndex + 1}: ${question.question}`;
                    questionElement.appendChild(questionTitle);
     
                    const answersList = document.createElement('ul');
                    answersList.classList.add('answers');
     
                    for (const [key, value] of Object.entries(question.answers)) {
                        if (value) {
                            const answerItem = document.createElement('li');
                            const answerButton = document.createElement('button');
                            answerButton.textContent = value;
                            answerButton.addEventListener('click', () => {
                                checkAnswer(key);
                            });
                            answerItem.appendChild(answerButton);
                            answersList.appendChild(answerItem);
                        }
                    }
     
                    questionElement.appendChild(answersList);
                    quizContainer.appendChild(questionElement);
                    // console.log(playerChance)
                if(playerChance%2!=0){
                    playerOneColorChange();
                    playerChance++;
                }
                else{
                    playerTwoColorChange();
                    playerChance++;
                }
                
                clearInterval(timerInterval)

                timerInterval=setInterval(() => {
                        timeLeft--;
                        // console.log("Set Interval: "+timeLeft)
                        updateTimerDisplay();
                        if (timeLeft <= 0) {
                            questionIndex++;
                            if (questionIndex < questions.length) {
                                renderQuestion();
                                timeLeft=20;
                            } else {
                                // quizContainer.innerHTML = '<p>Quiz completed!</p>';
                                winnerSelector();
                                location.reload(true);
                            }
                        }
                    }, 1000);
                
                
                }

                function updateTimerDisplay() {
                    document.getElementById("timeLeft").textContent = timeLeft;
                    // console.log("update timer: "+document.getElementById("timeLeft").textContent)
                }

                
     
                function checkAnswer(selectedAnswer) {
                    const question = questions[questionIndex];
                    const correctAnswerKey = Object.keys(question.correct_answers).find(key => question.correct_answers[key] === 'true');
                    // console.log(correctAnswerKey)
                    // console.log(correctAnswerKey)
                    // console.log(selectedAnswer)
                    if ((selectedAnswer+"_correct") === correctAnswerKey) {  //because in the api documentation, the key is defined as answera_correct
                        // alert('Correct!');
                        if((playerChance-1)%2!=0){
                            moveLeft();
                            playerOneScore++;
                            console.log("player chance: "+(playerChance-1))
                            console.log("Player one score: "+playerOneScore);
                        }
                        else{
                            moveRight();
                            playerTwoScore++;
                            console.log("player chance: "+(playerChance-1))
                            console.log("Player two score: "+playerTwoScore);

                        }
                    } 
                    // else {
                    //     alert('Wrong!');
                    // }
     
                    questionIndex++;
                    if (questionIndex < questions.length) {
                        renderQuestion();
                        timeLeft=20;
                    } else {
                        // quizContainer.innerHTML = '<p>Quiz completed!</p>';
                         winnerSelector();
                        location.reload(true);                    
                    }
                }
            }
     
            document.addEventListener('DOMContentLoaded', renderQuiz);





