const htmlATag = document.querySelector('#html-a-tag')
const cssATag = document.querySelector('#css-a-tag')
const jsATag = document.querySelector('#js-a-tag')
const quizContainerMain = document.querySelector('.quiz-container')


// CSS QUESTIONS //


const cssQuestions = [
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;", "&lt;link&gt;"],
    correct: "&lt;style&gt;"
  },
  {
    question: "How do you change the text color of an element in CSS?",
    answers: ["text-color:", "color:", "font-color:", "text-style:"],
    correct: "color:"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: ["bgcolor", "color", "background-color", "background"],
    correct: "background-color"
  },
  {
    question: "How do you add a comment in CSS?",
    answers: ["// this is a comment", "&lt;!-- this is a comment --&gt;", "/* this is a comment */", "# this is a comment"],
    correct: "/* this is a comment */"
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["font-weight", "font-style", "font-family", "font-type"],
    correct: "font-family"
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    answers: [".header", "#header", "*header", "header"],
    correct: "#header"
  },
  {
    question: "Which property is used to create space between the element's border and its content?",
    answers: ["padding", "margin", "border-spacing", "spacing"],
    correct: "padding"
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    answers: ["absolute", "relative", "static", "fixed"],
    correct: "static"
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["font-style", "text-size", "font-size", "text-style"],
    correct: "font-size"
  }
];

  
// HTML QUESTIONS //

const htmlQuestions = [
  {
    question: "What is HTML?",
    answers: ["Hyper Text Markup Language", "Hyper Tool Marked-up Language", "Hyper Test Made Language", "Hyperlinking Text Marking Language"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["&ltbreak&gt", "&ltbr&gt", "&ltlb&gt", "&lthr&gt"],
    correct: "&ltbr&gt"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    answers: ["&ltheading&gt", "&lth6&gt", "&lth1&gt", "&lthead&gt"],
    correct: "&lth1&gt"
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    answers: ["&ltitalic&gt", "&ltem&gt", "&lti&gt", "&lte&gt"],
    correct: "&ltem&gt"
  },
  {
    question: "Which character is used to indicate an end tag?",
    answers: ["/", "*", "<", "^"],
    correct: "/"
  },
  {
    question: "How can you make a numbered list?",
    answers: ["&ltol&gt", "&ltul&gt", "&ltdl&gt", "&ltlist&gt"],
    correct: "&ltol&gt"
  },
  {
    question: "How can you make a bulleted list?",
    answers: ["&ltul&gt", "&ltol&gt", "&ltlist&gt", "&ltdl&gt"],
    correct: "&ltul&gt"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    answers: ["&lta url=\"http://www.example.com\"&gtExample&lt/a&gt", "&lta href=\"http://www.example.com\"&gtExample&lt/a&gt", "&lta name=\"http://www.example.com\"&gtExample&lt/a&gt", "&lta&gthttp://www.example.com&lt/a&gt"],
    correct: "&lta href=\"http://www.example.com\"&gtExample&lt/a&gt"
  },
  {
    question: "Which HTML element defines the title of a document?",
    answers: ["&lttitle&gt", "&ltmeta&gt", "&lthead&gt", "&ltheading&gt"],
    correct: "&lttitle&gt"
  },
  {
    question: "What is the correct HTML element to define important text?",
    answers: ["&ltstrong&gt", "&ltimportant&gt", "&lti&gt", "&ltb&gt"],
    correct: "&ltstrong&gt"
  }
];



// JAVASCRIPT QUESTIONS //

const jsQuestions = [
  {
    question: "Which language is used for web development?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: "JavaScript"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["#", "//", "/*", ";;"],
    correct: "//"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: ["&ltscript href='script.js&gt", "&ltscript src='script.js&gt", "&ltscript name='script.js&gt", "&ltscript file='script.js&gt"],
    correct: "&ltscript src='script.js&gt"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: ["function myFunction()", "function:myFunction()", "create myFunction()", "function = myFunction()"],
    correct: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "myFunction.call()", "myFunction()", "execute myFunction()"],
    correct: "myFunction()"
  },
  {
    question: "Which operator is used to compare values in JavaScript?",
    answers: ["==", "=", "===", "<>"],
    correct: "=="
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: ["var myVariable", "variable myVariable", "v myVariable", "define myVariable"],
    correct: "var myVariable"
  },
  {
    question: "What is the output of 'console.log(typeof NaN)'?",
    answers: ["'number'", "'string'", "'undefined'", "'object'"],
    correct: "'number'"
  },
  {
    question: "Which method is used to remove the last element from an array?",
    answers: ["pop()", "shift()", "push()", "remove()"],
    correct: "pop()"
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    answers: ["if (condition) {}", "if condition {};", "if condition then {}", "if (condition) then {}"],
    correct: "if (condition) {}"
  }
];



let currentQuestionIndex = 0;
let score = 0;
let questions=[];

document.addEventListener('DOMContentLoaded', function() {
  const quizContainer = document.getElementById('quiz-container');
  const urlParams = new URLSearchParams(window.location.search);
  const choice = urlParams.get('choice');

  if (choice === 'HTML') {
    console.log(choice)
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen HTML Quiz";
    document.body.appendChild(h3);
   
  }
  if (choice === 'CSS') {
    console.log(choice);
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen CSS Quiz";
    document.body.appendChild(h3);
    
  }
   if(choice === 'JS'){
    console.log(choice)
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen JS Quiz";
    document.body.appendChild(h3);
  }
  if (htmlATag) {
    htmlATag.addEventListener('click', function(event) {
      event.preventDefault();
      const nextPageHtmlUrl = 'quiz.html?choice=HTML';
      window.location.href = nextPageHtmlUrl;
    });
  } 
   if(cssATag){
     cssATag.addEventListener('click',function(event){
      event.preventDefault()
      const nextPageCssUrl = 'quiz.html?choice=CSS'
      window.location.href = nextPageCssUrl;
    })
  
  }
   if(jsATag){
   jsATag.addEventListener('click',function(event){
   event.preventDefault() 
   const nextPageJsUrl = 'quiz.html?choice=JS'
   window.location.href = nextPageJsUrl;
  })
  }
  //edited


  if (choice) {
    switch (choice) {
      case 'HTML':
        questions = htmlQuestions;
        break;
      case 'CSS':
        questions = cssQuestions;
        break;
      case 'JS':
        questions = jsQuestions;
        break;
    }
    loadQuestion();
  }

  function decodeHtmlEntities(text) { // to decode the <> entities to compare 
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    console.log(text)
    console.log(textarea.value)
    return textarea.value;
    
  }
  function loadQuestion() {
    disableBackArrow(); // calling the disablebackArrow function()
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    const questionData = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">
            <h4 class = "question-head">${questionData.question}</h4>
            ${questionData.answers.map(answer => `
                <label class = "answer-label">
                    <input class = "answer-input" type="radio" name="answer" value="${answer}">
                    ${answer}
                </label><br>
            `).join('')}
        </div>
        <button id="submit-button">Submit</button>
    `;
    document.getElementById('submit-button').addEventListener('click', checkAnswer);
}
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
      alert('Please select an answer!');
      return;
  }
  const correctAnswer = decodeHtmlEntities(questions[currentQuestionIndex].correct);
  if (decodeHtmlEntities(selectedAnswer.value) === correctAnswer) {
      score++;
      console.log(score)
  }else{
    const label = document.createElement('label');
  label.textContent = 'Wrong Answer'
  
  }
  currentQuestionIndex++;
  loadQuestion();
}

function showResults() {

  lastScoreRecorded();// calling the lastScoreRecorded function

  quizContainer.innerHTML = `
      <h3>Quiz Complete!</h3>
      <p>Your score is ${score} out of ${questions.length}</p>
      <button id="try-again" onclick="window.location.href='index.html'";">Try Again</button>
  `;
  localStorage.setItem('quizScore', score); // storing score in localStorage 
}
 
// A function to print the last score
function lastScoreRecorded(){
  let lastScore = localStorage.getItem('quizScore');
  console.log(quizContainerMain)
 quizContainerMain.insertAdjacentHTML('beforeend',`<label>Last Score was ${lastScore}</label>`)
  console.log(`Last score ${lastScore}`)
}

  
});

//function to disable the browser back arrow when in quiz.html page
function disableBackArrow(){
  history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
}




