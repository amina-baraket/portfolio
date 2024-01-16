function myFunction() {
    alert("Message Reçu");
  }
//Question bank
var questionBank= [
  {
      question : 'Que signifie HTML ?',
      option : ['HomeTabulation of Mailing List','XpTdr Mdr Lol','Hyperspace TradeMark Language','HyperText Markup Language'],
      answer : 'HyperText Markup Language'
  },
  {
      question : 'À quoi sert HTML ?',
      option : ["À mettre en forme des pages web"," À structurer du contenu dans une page web"," À créer des pages dynamiques", "À concurrencer Google et Facebook"],
      answer : " À structurer du contenu dans une page web"
  },
  {
      question : "Quel attribut permet d'indiquer la destination d'un lien ?",
      option : ['a','src','link','href'],
      answer : 'href'
  },
  {
      question : 'Comment représenter une liste en HTML ?',
      option : ['ul','li','list','lu'],
      answer : 'ul'
  },
  {
      question : 'Que signifie CSS ?',
      option : ['Cascading Style Sheets', "Create Simple Samples", "C est Super Simple !","Choucroute et Saucisses de Strasbourg"],
      answer : 'Cascading Style Sheets'
  },
  {
      question : 'À quoi sert le langage CSS ?',
      option : ["À réaliser des pages dynamiques"," À ajouter du style aux documents web","À insérer du contenu dans une page internet","À simuler une application en mode avion durant les trajets dans un bus"],
      answer : " À ajouter du style aux documents web"
  },
  {
      question : 'Pourquoi utilise-t-on généralement du CSS ?',
      option : ["Pour se compliquer la vie bien sûr","Pour séparer le contenu et la présentation des documents web","Cela permet de faire de plus jolis dégradés de couleurs","Parce que c'est plus simple à comprendre que JavaScript"],
      answer : 'Pour séparer le contenu et la présentation des documents web'
  },
  {
      question : 'Dans quel élément HTML place-t-on le JavaScript?',
      option : ['scripting','javascript','script','js'],
      answer : 'script'
  },
  {
      question : "Quelle est la syntaxe correcte pour faire référence à un script externe appelé 'xxx.js' ?",
      option : ["script name='xxx.js'","script href='xxx.js'", "link src='xxx.js'","script src='xxx.js'"],
      answer : "script src='xxx.js'"
  },
  {
      question : "Comment créer une fonction en JavaScript ?",
      option : ["function:myFunction()","def myFunction()","function myFunction()","def:myFunction()"],
      answer : "function myFunction()"
  }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();
  

  