const quizData = [
    {   number: "1",
        question: " 1. Wann wurde Immanuel Kant geboren?", // Wer das sieht hat smoll PP
        a:"22. Februar 1825",
        b:"12. Februar 1804",
        c:"22. April 1724",
        d:"25 vor Christus",
        correct: "c",
       
    },
    {
        number: "2",
        question: "2. Mit wie vielen Jahren wechselte Kant aufs Gymnasium?",
        a: "16",
        b: "8",
        c: "18",
        d: "10",
        correct: "b",
    },
    {
        number: "3",
        question: "3. Welche 4 Schwerpunktsfächer wählte Kant?",
        a: "Deustch, Mathe, Englisch, Naturwissenschaften",
        b: "Philosophie, Französisch, Mathe, Physik",
        c: "Philosophie, Latein, Mathe, Englisch",
        d: "Philosophie, Latein, Mathe, Naturwissenschaften",
        correct: "d",
    },
    {
        number: "4",
        question: "4. Was ist kurz gesagt seine Sicht auf die Philosophie?",
        a: "Man hört auf Vorschriften",
        b: "Die Bibel ist richtig und man höre auf die Bibel",
        c: "Jeder Mensch ist frei",
        d: "Der Mensch entscheidet selber von Recht und Unrecht",
        correct: "d",
    },
    {
        number: "5",
        question: "5. In welchem Jahr kehrte Kant in seine Heimat zurück?",
        a: "1746",
        b: "1754",
        c: "1724",
        d: "1763",
        correct: "b",
    },
    {
        number: "6",
        question: "6. Welches Buch startete seinen Philosophischen 'durchbruch'? ",
        a: "Kritik der reinen Vernunft",
        b: "Gedanken von der wahren Schätzung der lebendigen Kraft.",
        c: "Allgemeine Naturgeschichte und Theorie des Himmels",
        d: "Kritik der praktischen Vernunft",
        correct: "a",
    },
    {
        number: "7",
        question: "7. Was ist die 'Erkenntnistheorie'?",
        a: "Wie man die Wekt sieht",
        b: "Antworten seiner Fragen im Buch der reinen Vernunft",
        c: "Antworten seiner Fragen im Buch der praktischen Vernunft",
        d: "Antworten der Fragen in der Bibel und dem alten Testament",
        correct: "b",
    },
   {
        number: "8",
        question: "8. Welcher Spruch ist nicht von Kant?",
         a: "Was du nicht willst, das man dir tu' das füg auch keinem anderem zu",
         b: "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetzt werde",
         c: "Die Fähigkeit, mit ihrer Vernunft zwischen Recht und Unrecht zu unterscheiden, ist allen Menschen angeboren",
         d: "Zwei Dinge erfüllen das Gemüt mit Ehrfurcht: der bestirnte Himmel über mir und das moralische Gesetz in mir.",
         correct: "a",
    },
    {
        number: "9",
        question: "9. Wieso erhielt Kant 1793 Lehr- und Publikationsverbot über das Thema Religion?",
        a: "Der Regierung passte seine Ansicht nicht",
        b: "Er veränderte die Bibel",
        c: "Er beinflusste extra Kinder nicht gläubig zu sein",
        d: "Der Regierung wollte Streit",
        correct: "a",
    },
    {
        number: "10",
        question: "10. Was ist seine Definition von Aufklärung?",
        a: "Die entstehung des Menschen",
        b: "Es sei der Ausweg aus dem eigenem Schweigen",
        c: "Gott sei nicht echt",
        d: "Wie Kinder entstehen",
        correct: "b",
        
    },
    {
        number:"11",
        question:"11. Er schrieb das Buch 'Allgemeine Naturgeschichte und Theorie des Himmels'",
        a:"Wahr",
        b:"Falsch",
         c:"///",
        d:"///",
        correct:"a",
    },
    {
        number:"12",
        question:"12. Er war Atheistisch (War unreligiös)",
        a:"Wahr",
        b:"Falsch",
         c:"///",
        d:"///",
        correct:"a",
    },
    {
        number:"13",
        question:"13. Der Kategorischer Imperativ ist aufgelistet in der 'Kritik der reinen Vernunft'",
        a:"Wahr",
        b:"Falsch",
         c:"///",
        d:"///",
        correct:"b",
    },
    {
        number:"14",
        question:"14. Er zog nicht aus Königsberg aus",
        a:"Wahr",
        b:"Falsch",
         c:"///",
        d:"///",
        correct:"b",
    },
    {
        number:"15",
        question:"15. 'Die Allgemeine Naturgeschichte und Theorie des Himmels' war sein erstes Buch",
        a:"Wahr",
        b:"Falsch",
         c:"///",
        d:"///",
        correct:"b",
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
