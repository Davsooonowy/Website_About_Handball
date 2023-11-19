"use strict";

const quizData = [
    {
        question: "Kto został najlepszym piłkarzem ręcznym świata w 2009 roku?",
        a: "Sławomir Szmal",
        b: "Thierry Omayer",
        c: "Karol Bielecki",
        d: "Nikola Karabatic",
        correct: "a",
    },

    {
        question: "Z ilu zawodników składa się zespół na boisku?",
        a: "5",
        b: "8",
        c: "7",
        d: "11",
        correct: "c",
    },

    {
        question: "Zaznacz pozycje na boisku, która nie występują w piłce ręcznej",
        a: "bramkarz",
        b: "obrotowy",
        c: "rzucający",
        d: "skrzydłowy",
        correct: "c",
    },

    {
        question: "Ile trwa mecz seniorów w piłce ręcznej?",
        a: "90 minut",
        b: "50 minut",
        c: "120 minut",
        d: "60 minut",
        correct: "d",
    },

    {
        question: "ile kroków bez kozłowania może wykonać zawodnik?",
        a: "4",
        b: "3",
        c: "2",
        d: "5",
        correct: "b",
    },

    {
        question: "które miejsce zajęła Polska na mistrzostwach świata w katarze w 2015 roku?",
        a: "trzecie",
        b: "pierwsze",
        c: "nie wyszli z grupy",
        d: "drugie",
        correct: "a",
    },

    {
        question: "Ile razy Iskra Kielce(KS VIVE Kielce) wygrało ligę mistrzów?",
        a: "dwa razy",
        b: "cztery razy",
        c: "nigdy",
        d: "raz",
        correct: "d",
    },
    {
        question: "Z ilu metrów wykonuje się rzut karny??",
        a: "4m",
        b: "7m",
        c: "6m",
        d: "5m",
        correct: "b",
    },
    {
        question: "Jakie wymiary ma boisko do piłki ręcznej?",
        a: "40m x 20m",
        b: "60m x 30m",
        c: "30m x 15m",
        d: "100m x 50m",
        correct: "a",
    },
    {
        question: "Jak inaczej nazywa się piłkarzy ręcznych?",
        a: "hokeiści",
        b: "trampkarze",
        c: "szczypiorniści",
        d: "łajzy",
        correct: "c",
    },
];

const quiz = document.querySelector(".quiz-body");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const footerElement = document.querySelector(".quiz-footer");
const quizDetailElement = document.querySelector(".quiz-details");
const answerListItems = document.querySelectorAll('.answer-li');

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const Submitbtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

LoadQuiz();


function LoadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;

    quizDetailElement.innerHTML = '<p>' + (currentQuiz + 1) + ' z ' + quizData.length + ' pytań</p>';
}

function getSelected() {
    let answer;
    answerElement.forEach((answerElement)=>{
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });
    return answer;
}
function deselectAnswer() {
    answerElement.forEach((answerElement)=> {
        answerElement.checked = false;
    });
}

// caly label jako przycisk
answerListItems.forEach((item) => {
    item.addEventListener('click', () => {
        const dataAnswer = item.getAttribute('data-answer');
        const radioButton = document.getElementById(dataAnswer);
        radioButton.checked = true;
    });
});
Submitbtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            LoadQuiz();
        } else {
            quiz.innerHTML = '<h2>Zdobyłeś ' + score + '/' + quizData.length + ' punktów</h2><button type="button" onclick="location.reload()">Zagraj Ponownie</button>';
            footerElement.style.display = "none";
        }

    }
})