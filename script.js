console.log("Hello!")
let gameStart = false;
let buttons = document.getElementsByClassName("solution");
let count = 0;
let points = 0;
let i = 0;

let questions = [
    {
    prompt: "Who is the prime minister of Canada?",
    answers: ["Justin Trudeau", "Wayne Gretski", "Tim Horton", "Mike"],
    correctAnswerIndex: 1
  }, {
    prompt: "Which of the following is a strongly-typed language?",
    answers: ["JavaScript", "Ruby", "Java", "Python"],
    correctAnswerIndex: 2
  },
  {
    prompt: "Where they do that at?",
    answers: ["Here", "There", "Don't talk to me or my son", "Everywhere"],
    correctAnswerIndex: 1
  }];

 console.log(buttons.length)
  const addSolutionListeners = () =>{
      for (i = 0; i < buttons.length; i++){
          buttons[i].textContent = (questions[count].answers[i])
      }
  }

  const removeSolutionListeners = () =>{
      for (i = 0; i< buttons.length; i++){
          buttons[i].removeEventListener('click')
      }
  }
  

  const selectionMade = () =>{
    if(buttons[i] == questions.correctAnswerIndex){
        points ++
        buttons[i].style.color = "green"
    }
    else{
        buttons[i] 
    }
  }

  buttons[i].addEventListener('click', selectionMade)

  const startGame = () =>{
      count = 0;
    $("#question").text(questions[count].prompt);
    addSolutionListeners();
      gameStart = true;
      $("button").remove("#start")
  }

  const next = () =>{
    count ++;
      $("#question").text(questions[count].prompt)
      addSolutionListeners();
      $("button").add("#start")
  }
  
 
  
  $("#start").click(startGame);
  $("#next").click(next);
  checkForTrue = () =>{
      if (questions[0].answers[i] = correctAnswerIndex) {
          $(item).border(green) }
              else {
                  $(item).border(red)
              }
          }
// userAnswer() === questions.correctAnswer
//target
//store user anwser 
//compare the two