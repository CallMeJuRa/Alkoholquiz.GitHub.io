const quizData = [
    {   number: "1",
        question: " 1. Wo liegt die Promillegrenze in Deutschland (ohne Ordnungswidrigkeit)", // Wer das sieht hat smoll PP
        a:"< 0,15",
        b:"< 1,1",
        c:"< 0,5",
        d:"< 0,7",
        correct: "c",
       
    },
    {
        number: "2",
        question: "2. Unter welchen Bedingungen darf man mit mehr als 0,5‰ fahren?",
        a: "Polizei nicht in der Nähe",
        b: "Unter keinen Ausfallerscheinungen",
        c: "Man trank nur Bier oder Wein",
        d: "Keine Schäden kommen zur Stande",
        correct: "b",
    },
    {
        number: "3",
        question: "3. Welche Strafe erhält man beim 2. Mal Verstoß der 0,5‰ Grenze??",
        a: "528,50€ Bußgeld; 1 Monat Fahrverbot",
        b: "Entziehung des Führerscheins; 1200€ Bußgeld ",
        c: "1500€ Bußgeld; 3 Monate Fahrverbot",
        d: "3 Monate Fahrverbot; 1053,50€ Bußgeld",
        correct: "d",
    },
    {
        number: "4",
        question: "4. Bei Gefährdung des Straßenverkehrs erhält man...",
        a: "ein Bußgeld und entzogenen Führerschein (3 Monate)",
        b: "eine Freiheitsstrafe",
        c: "ein Bußgeld von 10 Tagesverdiensten und Fahrverbot",
        d: "Eine Freiheits- oder Geldstrafe und entziehung des Führerscheins für min. 6 Monate",
        correct: "d",
    },
    {
        number: "5",
        question: "5. Welche Länder haben die Gleichen Strafen für Verstoß der Grenze wie Deutschland?",
        a: "Österreich, Frankreich",
        b: "Kein Land",
        c: "Polen, Niederlande",
        d: "Spanien, Kroatien",
        correct: "b",
    },
    {
        number: "6",
        question: "6. Welchen Wert für die Promillegrenze findet man häufiger in den EU-Staaten? ",
        a: "0,5‰",
        b: "0,19‰",
        c: "0,2 ‰",
        d: "0,8‰",
        correct: "a",
    },
    {
        number: "7",
        question: "7. Was geschieht wenn man den Atemtest verweigert?",
        a: "Man darf nicht weiter fahren, jedoch wird man in Ruhe gelassen",
        b: "Man muss auf der Wache einen vom Artz durchgeführten Bluttest vollziehen",
        c: "Man erhält eine Freiheitsstrafe von 2 Monaten",
        d: "Gerichtlicher Prozess wird eingeleitet und führt zu einer Geldstrafe",
        correct: "b",
    },
   {
        number: "8",
        question: "8. Die Promille-Grenze war schon immer bei 0,5‰",
         a: "Wahr",
         b: "Falsch",
         c: "/////",
         d: "/////",
         correct: "a",
    },
    {
        number: "9",
        question: "9. Man unterscheidet nicht zwischen absoluter und relativer Fahruntüchtigkeit.",
         a: "Wahr",
         b: "Falsch",
         c: "/////",
         d: "/////",
         correct: "b",
    },
    {
        number: "10",
        question: "10.Gesetzlich wird der Alkhol nur im Blut, Urin und in den Haaren kontrolliert.",
         a: "Wahr",
         b: "Falsch",
         c: "/////",
         d: "/////",
         correct: "a",
    }
    

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
       if(quizData[currentQuiz].number === "7") {
        DeleteAnswers()
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
   <h2>Glückwunsch, du hast ${score} von ${quizData.length} Fragen richtig! <br>
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

    function DeleteAnswers() {
        let AnswerC = document.getElementById('c') // Answer und Circle müssten eig den anderen Tag nehmen
        let AnswerD = document.getElementById('d')
        let CircleC = document.getElementById('c_text')
        let CircleD = document.getElementById('d_text')
        AnswerC.remove()
        AnswerD.remove()
        CircleC.remove()
        CircleD.remove()
    }
