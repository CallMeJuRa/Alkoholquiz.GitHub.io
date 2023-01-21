const quizData = [
    {   number: "1",
        question: " 1. Wann wurde Immanuel Kant geboren?",
        a:"22. Februar 1825",
        b:"12. Februar 1804",
        c:"22. April 1724",
        d:"25 vor Christus",
        correct: "c",
       
    },
    {
        number: "2",
        question: "Frage 2",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "b",
    },
    {
        number: "3",
        question: "Frage 3",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "c",
    },
    {
        number: "4",
        question: "Frage 4",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "d",
    },
    {
        number: "5",
        question: "Frage 5",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "a",
    },
    {
        number: "6",
        question: "6. Welches Buch startete seinen 'durchbruch' ",
        a: "Kritik der reinen Vernunft",
        b: "Gedanken von der wahren Schätzung der lebendigen Kraft.",
        c: "Allgemeine Naturgeschichte und Theorie des Himmels",
        d: "Kritik der praktischen Vernunft",
        correct: "a",
    },
    {
        number: "7",
        question: "Frage 7",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "c",
    },
   {
        number: "8",
        question: "Frage 8",
         a: "Antwort 1",
         b: "Antwort 2",
         c: "Antwort 3",
         d: "Antwort 4",
         correct: "d",
    },
    {
        number: "9",
        question: "Frage 9",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "a",
    },
    {
        number: "10",
        question: "Frage 10",
        a: "Antwort 1",
        b: "Antwort 2",
        c: "Antwort 3",
        d: "Antwort 4",
        correct: "b",
        
                                    },
]

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
let wrongAnswer = []
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

console.log(wrongAnswer)

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }      else {
        wrongAnswer.push(quizData[currentQuiz].number);  
       }

       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        End()
       }
    }
})

function End() {
    if(wrongAnswer.length > 1) {
        quiz.innerHTML = `
   <h2>Du hast ${score} von ${quizData.length} Fragen richtig. GeGe <br>
   Du hast folgende Fragen falsch:
   <ul> <li> ${wrongAnswer} </li>   </ul>   </h2>
   <button onclick="location.reload()">Neustart</button>
   `
    }
        if(wrongAnswer.length === 0) {
            quiz.innerHTML = `
       <h2>Du hast ${score} von ${quizData.length} Fragen richtig. GeGe <br>
       Du hast keine Frage falsch!
       <button onclick="location.reload()">Neustart</button> `
        }

        if(wrongAnswer.length === 1) {
       quiz.innerHTML = `
       <h2>Du hast ${score} von ${quizData.length} Fragen richtig. GeGe <br>
       Du hast eine Frage falsch:
       <ul> <li> ${wrongAnswer} </li>   </ul>   </h2>
       <button onclick="location.reload()">Neustart</button>
       `
        }
}