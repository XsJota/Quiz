// states imports
import { quizState } from "./state/quiz-states.js";

// actions imports
import { startQuiz, restartQuiz, answerQuestion, resetQuiz } from "./actions/quiz-actions.js";

// views imports
import { renderMenu } from "./ui/menu-view.js";
import { renderQuestion } from "./ui/question-view.js";
import { renderResult } from "./ui/result-view.js";
import { renderScore } from "./ui/score-view.js";

$(document).ready(function() {

  const $app = $("#app");

  const showMenu = () => {
    quizState.status = 'menu';
    
    renderMenu($app);
  }

  const showQuestion = () => {
    renderQuestion($app, quizState);
  };

  const showResult = () => {
    renderResult($app, quizState);
  };

  const showScore = () => {
    renderScore($app);
  };
  
  $app.on('click', '[data-action="start"]', () => {
    startQuiz();
    showQuestion()
  });

  $app.on('click', '[data-action="answer"]', (event) => {
    const e = $(event.currentTarget);

    const selectedIndex = Number(e.data('index'));

    answerQuestion(selectedIndex);

    if (quizState.status === 'finished') {
      showResult();
      return;
    }

    showQuestion();
  });

  $app.on('click', '[data-action="restart"]', () => {
    restartQuiz();
    showQuestion();
  });

  $app.on('click', '[data-action="menu"]', () => {
    showMenu();
  });

  $app.on('click', '[data-action="score"]', () => {
    showScore();
  });

  $app.on('click', '[data-action="close"]', () => {
    resetQuiz();
  });

  showMenu();
});