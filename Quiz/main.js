const quizData = [
    {
        question: "Qual dessas alternativas não é uma linguagem de programação?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "HTML",
        correct: "d",
    },
    {
        question: "Em que ano começou a Primeira Guerra mundial?",
        a: "1916",
        b: "1914",
        c: "1918",
        d: "1939",
        correct: "b",
    },
    {
        question: "Qual é o maior continente do Planeta?",
        a: "Ásia",
        b: "América",
        c: "Europa",
        d: "África",
        correct: "a",
    },
    {
        question: "Em qual ano o c# foi criado?",
        a: "1966",
        b: "1972",
        c: "1954",
        d: "1980",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked) {
            answer = answerEl.id;
        }
        
       
    });
    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = ` <h2> VocÊ acertou ${score}/${quizData.length} questões</h2>
            <button onclick="location.reload()">Carregar</button>
            `
        }
    }
})







