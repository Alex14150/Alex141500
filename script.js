var questions = [
  {
    question: "Domanda 1: Quale di queste parole e' un avverbio?",
    choices: ["a)  Quick", "b)  Beautiful", "c)  Slowly", "d)  Happy"],
    correctAnswer: 2
  },
  {
    question: "Domanda 2: Qual e'' il superlativo di beautiful in inglese?",
    choices: ["a)  more beautiful", "b)  most beautiful", "c)  beautifulest", ],
    correctAnswer: 1
  }, 
  {
    question: "Domanda 3: Qual e' la forma corretta del verbo to be al presente nella terza persona singolare?",
    choices: ["a)  am", "b)  is", "c)  the", "d)  are"],
    correctAnswer: 1
  }, 
  {
    question: "Domanda 4: Qual e' la forma corretta del verbo to do al futuro nella terza persona ",
    choices: ["a)  do", "b)  does", "c)  will do", ],
    correctAnswer: 2
  },
  {
    question: "Domanda 5: Quale di queste parole e' un aggettivo comparativo?",
    choices: ["a)  Big", "b)  Bigger", "c)  Biggest", "d)  Bigly"],
    correctAnswer: 1
  },
  {
    question: "Domanda 6: Quale di queste parole e' un sinonimo di intelligente?",
    choices: ["a)  Clever", "b)  Funnyoni", "c)  Brave", "d)  Friendly"],
    correctAnswer: 0
  },
  {
    question: "Domanda 7: Quale di queste parole e' un sostantivo collettivo?",
    choices: ["a)  Sing", "b)  Dog", "c)  aJump", "d)  Flock"],
    correctAnswer: 3
  },
  {
    question: "Domanda 8: Qual e' il superlativo di good?",
    choices: ["a)  Goodest", "b)  Better", "c)  Best", "d)  Most good"],
    correctAnswer: 2
  },
  
  {
    question: "Domanda 9: Quale di queste parole e' un avverbio di modo?",
    choices: ["a)  Soon", "b)  Fast", "c)  Suddenly", "d)  Quick"],
    correctAnswer: 2
  },
  {
    question: "Domanda 10: Qual e' l'opposto di happy?",
    choices: ["a)  Tired", "b)  Sad", "c)  Angry", "d)  Excited"],
    correctAnswer: 1
  },
  // Aggiungi altre domande con le rispettive opzioni di risposta e l'indice della risposta corretta
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById('question');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var scoreElement = document.getElementById('score');

function showQuestion() {
  var question = questions[currentQuestion];

  questionElement.textContent = question.question;

  choicesElement.innerHTML = '';
  for (var i = 0; i < question.choices.length; i++) {
    var choice = document.createElement('input');
    choice.type = 'radio';
    choice.name = 'choice';
    choice.value = i;
    choice.required = true;
    choicesElement.appendChild(choice);

    var label = document.createElement('label');
    label.textContent = question.choices[i];
    choicesElement.appendChild(label);

    choicesElement.appendChild(document.createElement('br'));
  }
}

function checkAnswer() {
  var selectedAnswer = document.querySelector('input[name="choice"]:checked');

  if (!selectedAnswer) {
    alert('Sicuro di voler consegnare in bianco?');
    return;
  }

  var selectedChoice = parseInt(selectedAnswer.value);
  var correctAnswer = questions[currentQuestion].correctAnswer;

  if (selectedChoice === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion === questions.length) {
    showScore();
  } else {
    showQuestion();
  }
}

function showScore() {
  questionElement.style.display = 'none';
  choicesElement.style.display = 'none';
  submitButton.style.display = 'none';

  scoreElement.textContent = 'Punteggio: ' + score + '/' + questions.length;
  scoreElement.style.display = 'block';
}

showQuestion();
submitButton.addEventListener('click', checkAnswer);


//timer
function avviaTimer() {
  const tempoLimite = 2 * 60; // 2 minuti
  let tempo = tempoLimite;
  const timerElement = document.getElementById("timer");

  function aggiornaTimer() {
    const minuti = Math.floor(tempo / 60);
    const secondi = tempo % 60;
    timerElement.textContent = ` ${minuti}:${secondi.toString().padStart(2, "0")}`;

    tempo--;

    if (tempo < 0) {
      clearInterval(timerInterval);
      window.location.href = "Game over.html"; // Sostituisci "pagina.html" con l'URL della pagina web desiderata
    }
  }

  // Aggiornamento del timer ogni secondo
  aggiornaTimer();
  const timerInterval = setInterval(aggiornaTimer, 1000);
}

// Chiamare la funzione per avviare il timer quando la pagina è stata caricata
window.onload = avviaTimer;