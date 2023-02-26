var startBtn = document.querySelector("#jumbo-btn");
var submitBtn = document.querySelector('submit-btn')
var startEl = document.querySelector(".start-container");
var quizEl = document.querySelector('.quiz-container');
var highscoreEl = document.querySelector('.highscore-container');
var scoreEl = document.querySelector('.score');
var endEl = document.querySelector('.quiz-end');
var body = document.querySelector('.body')
var quizScore = document.querySelector('.quiz-score');
var playerName = document.querySelector('#user-name');
var questionNumber = document.querySelector(".question-number");
var questionEl = document.querySelector(".question");
var questionCount = 0;
var currentScore = 100;

// array containing 5 objects, each one representing a quiz question with a question, three answer options, and the correct answer
var quizQuestions = [
    {
        question: 'What does the console.log() method do in JavaScript?',
        a: 'Display a message in a pop-up dialog box',
        b: 'Output data to the console',
        c: 'Create a new variable',
        answer: 'b'
    },
    {
        question: 'Which keyword is used to create a conditional statement in JavaScript?',
        a: 'switch',
        b: 'if',
        c: 'for',
        answer: 'b'
    },
    {
        question: 'What is the result of the following comparison in JavaScript? "5" == 5',
        a: 'true',
        b: 'false',
        c: 'It will throw an error',
        answer: 'a'
    },
    {
        question: 'What is the purpose of a function in JavaScript"?',
        a: ' To declare a variable',
        b: 'To create a loop',
        c: 'To perform a specific task',
        answer: 'c'
    },
    {
        question: 'Which keyword is used to stop the execution of a loop in JavaScript?',
        a: 'continue',
        b: 'break',
        c: 'return',
        answer: 'b'
    }
]

// removes the quiz-end container and the highscore container element from the page
endEl.remove();
highscoreEl.remove();


// starts the timer
function quizTimer() {
    scoreEl.textContent = "Current score: 100";

    var scoreInterval = setInterval(function () {
        if (currentScore > 0 && questionCount < quizQuestions.length) {
            scoreEl.textContent = "Current score: " + currentScore;
            currentScore--
        }
        else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 1000);
}


// starts the quiz after selecting the start button and removes questions from page intro
function startQuiz() {
    if (startBtn) {
        quizEl.style.display = "block";
        document.querySelector('.start-container').remove();
        nextQuizQuest(questionCount);
        quizTimer();
    }
}

// sets the text content of the question, answer options, and question number container elements based on the current question count
function nextQuizQuest(i) {
    var btnA = document.getElementById("btn-1");
    var btnB = document.getElementById("btn-2");
    var btnC = document.getElementById("btn-3");
    var btnD = document.getElementById("btn-4");

    questionNumber.textContent = ("Question ") + (i + 1)
    questionEl.textContent = quizQuestions[i].question;
    btnA.textContent = quizQuestions[i].a;
    btnB.textContent = quizQuestions[i].b;
    btnC.textContent = quizQuestions[i].c;
    btnD.textContent = quizQuestions[i].d;

    btnA.addEventListener("click", selectAnswer);
    btnB.addEventListener("click", selectAnswer);
    btnC.addEventListener("click", selectAnswer);
    btnD.addEventListener("click", selectAnswer);
}

// function that checks if the selected answer matches the correct answer and updates the score accordingly, it also checks if the quiz is over or if there are more questions left
var selectAnswer = function (event) {
    var clickedBtn = event.target.getAttribute("value");

    if (clickedBtn === quizQuestions[questionCount].answer) {
        alert('Correct!');
    } else if (currentScore >= 25) {
        currentScore -= 25;
        scoreEl.textContent = "Current score: " + currentScore;
        alert('Incorrect')
    }

    if (currentScore <= 25) {
        endQuiz();
    }

    questionCount++

    if (questionCount < quizQuestions.length) {
        nextQuizQuest(questionCount);
    }
    else {
        endQuiz();
    }
}

// function that removes the quiz and score container elements, adds the quiz end and highscore container elements, and displays the final score
function endQuiz() {
    quizEl.remove();
    scoreEl.remove();
    body.appendChild(endEl);
    body.appendChild(highscoreEl);
    quizScore.textContent = currentScore;
    return quizTimer;
}

// event listener that triggers the startQuiz function when the start button is clicked
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', function () {
    var name
    name.textContent = playerName.value;

});

