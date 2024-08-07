const htmlATag = document.querySelector('#html-a-tag')
const cssATag = document.querySelector('#css-a-tag')
const jsATag = document.querySelector('#js-a-tag')


const cssQuestions = [
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
},
  
  
]; //css questions

const htmlQuestions = [
  {
    question: "What is html?",
    answers: ["Hyper Text MarkUp Language", "Hyper Tool Markedup Language", "Hyper Test Made Language ","Hyperlinking Text Marking Language"],
    correct: "Hyper Text MarkUp Language"
},
{
  question: "What is the correct HTML element for inserting a line break <>?",
  answers: ["&ltbreak&gt", "&ltbr&gt", "&ltlb&gt", "&lthr&gt"],
  correct: "&ltbr&gt"
},
{
  question: "Choose the correct HTML element for the largest headeing ",
  answers: ["&ltheading&gt", "&lth6&gt", "&lth1&gt", "&lthead&gt"],
  correct: "&lth1&gt"
},
  {  question: "Choose the correct HTML element to define emphasized text:",
    answers: ["&ltitalic&gt","&ltem&gt","&lti&gt","&lte&gt"],
    correct: "&ltem&gt"
  },
  {
    question: "Which character is used to indicate an end tag?",
    answers: [ "/","*","<","^"],
    correct: "/"
},
{
  question: "How can you make a numbered list?",
  answers: ["&ltol&gt","&ltul&gt","&ltdl&gt","&ltlist&gt"],
  correct: "&ltol&gt"
},
{
  question: "How can you make a bulleted list?",
  answers: ["&ltul&gt","&ltol&gt","&ltlist&gt","&ltdl&gt"],
  correct: "&ltul&gt"
},
{
  question: "What is the correct HTML for creating a hyperlink?",
  answers: ["&lta url=\"http://www.example.com\"&gtExample&lt/a&gt","&lta href=\"http://www.example.com\"&gtExample&lt/a&gt","&lta name=\"http://www.example.com\"&gtExample&lt/a&gt","&lta&gthttp://www.example.com&lt/a&gt"],
  correct: "&lta href=\"http://www.example.com\"&gtExample&lt/a&gt"
},
{
  question: "Which HTML element defines the title of a document?",
  answers: ["&lttitle&gt","&ltmeta&gt","&lthead&gt","&ltheading&gt"],
  correct: "&lttitle&gt"
},
]; // html questions
const jsQuestions = [
  
  {
      question: "Which language is used for web development?",
      answers: ["Python", "Java", "JavaScript", "C++"],
      correct: "JavaScript"
  }
]; // js questions

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
  }
  currentQuestionIndex++;
  loadQuestion();
}

function showResults() {
  quizContainer.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your score is ${score} out of ${questions.length}</p>
      <button id="try-again" onclick="window.location.href='index.html'";">Try Again</button>
  `;
  localStorage.setItem('quizScore', score); // storing score in localStorage 
}

// loadQuestion();
 //edited
  
  
});




// document.addEventListener('DOMContentLoaded', function() {
  

  
//   console.log(choice)
  
  
// });

