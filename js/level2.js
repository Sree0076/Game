



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
            alert("Player 2 has reached the edge and wins with score: "+playerTwoScore)

        // Example usage of SweetAlert2
        // Swal.fire({
        // title: 'Player 2 Wins',
        // text: 'Score: '+ playerTwoScore,
        // confirmButtonText: 'Restart'
        // }).then((result)=>{
        //     if(result.isConfirmed){
        //     location.reload(true);

        //     }
        // });
  
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
            // document.getElementById("endPopUpText").textContent="Player 1 Wins with score: "+playerOneScore;
            // document.getElementById("endPopUp").style.visibility.visible;
            alert("Player 1 has reached the edge and wins with score: "+playerOneScore);
            // console.log(playerOneScore);
            location.reload(true);
            // Swal.fire({
            //     title: 'Player 1 Wins',
            //     text: 'Score: '+ playerOneScore,
            //     confirmButtonText: 'Restart'
            //     }).then((result)=>{
            //         if(result.isConfirmed){
            //         location.reload(true);
        
            //         }
            //     });
        }
}

function playerOneColorChange(){
    const playerOne=document.getElementById("playerOne")
    const playerTwo=document.getElementById("playerTwo")
    playerOne.style.backgroundColor='green';
    playerTwo.style.backgroundColor='grey';
    playerOne.style.opacity=0.9;
    playerTwo.style.opacity=0.5;
}

function playerTwoColorChange(){
    const playerOne=document.getElementById("playerOne")
    const playerTwo=document.getElementById("playerTwo")
    playerOne.style.backgroundColor='grey';
    playerTwo.style.backgroundColor='green';
    playerTwo.style.opacity=0.9;
    playerOne.style.opacity=0.5;
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
    // console.log("winner 1: "+playerOneScore)
    // console.log("winner 2: "+playerTwoScore)

    if(playerOneScore>playerTwoScore){
        alert("Quiz over. Player 1 wins with a score: "+playerOneScore)
        location.reload(true)
        // Swal.fire({
        //     title: 'Player 1 Wins',
        //     text: 'Score: '+ playerOneScore,
        //     confirmButtonText: 'Restart'
        //     }).then((result)=>{
        //         if(result.isConfirmed){
        //         location.reload(true);
    
        //         }
        //     });
    }
    else if(playerOneScore<playerTwoScore){
        alert("Quiz over. Player 2 wins with a score: "+playerTwoScore)
        location.reload(true)
        // Swal.fire({
        //     title: 'Player 2 Wins',
        //     text: 'Score: '+ playerTwoScore,
        //     confirmButtonText: 'Restart'
        //     }).then((result)=>{
        //         if(result.isConfirmed){
        //         location.reload(true);
    
        //         }
        //     });

    }
    else {
        alert("Quiz over. Game ends with a Tie")
        location.reload(true)
        // Swal.fire({
        //     title: 'Tie',
        //     text: 'Game over',
        //     confirmButtonText: 'Restart'
        //     }).then((result)=>{
        //         if(result.isConfirmed){
        //         location.reload(true);
    
        //         }
        //     });

    }
}



async function fetchQuizQuestions() {
    // const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=9mEY0FIxQz8NMwEB0o8CC1hlaOaoHyLcKTOkg5AT&limit=10&category=Linux&difficulty=easy');
    const response = await fetch('../json/quiz.json');
                const questions = await response.json();
                // console.log(questions)
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
                                // location.reload(true);
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
                            playerOneScore++;
                            moveLeft();
                           
                            // console.log("player chance: "+(playerChance-1))
                            // console.log("Player one score: "+playerOneScore);
                        }
                        else{
                            playerTwoScore++;
                            moveRight();
                            
                            // console.log("player chance: "+(playerChance-1))
                            // console.log("Player two score: "+playerTwoScore);

                        }
                    } 
                    // else {
                    //     alert('Wrong!');
                    // }
     
                    questionIndex++;
                    console.log("question index: "+questionIndex)
                    console.log("questions length: "+questions.length)
                    if (questionIndex < questions.length) {
                        renderQuestion();
                        timeLeft=20;
                    } else {
                        // quizContainer.innerHTML = '<p>Quiz completed!</p>';
                         winnerSelector();
                        // location.reload(true);                    
                    }
                }
            }
     
            document.addEventListener('DOMContentLoaded', renderQuiz);

           





