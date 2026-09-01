// states imports
import { quizState } from "../state/quiz-states.js";

// questions imports
import { quizQuestions } from "../data/questions.js";

// services imports
import { getHighScore, saveHighScore } from "../service/storage-service.js";

// start function
export const startQuiz = () => {
  quizState.score = 0;
  quizState.currentQuestion = 0;
  quizState.status = 'playing';
};

// restart function
export const restartQuiz = () => {
  quizState.score = 0;
  quizState.currentQuestion = 0;
  quizState.status = 'playing';
};

// finish function
export const finishQuiz = () => {
  quizState.status = 'finished';

  const highScore = getHighScore();
  
  if (quizState.score > highScore) {
    saveHighScore(quizState.score);
    $.alert({
      title: 'Novo recorde!',
      content: `Parabéns! Seu novo recorde é: ${quizState.score}`,
      useBootstrap: false,
      boxWidth: '450px',
    });
  }

};

// reset function
export const resetQuiz = () => {
  $.confirm({
  title: 'Tem certeza que deseja fechar o jogo?',
  content: 'Esta ação não pode ser desfeita. E apenas para diversão, apagará seu recorde.',
  useBootstrap: false,
  boxWidth: '450px',
  backgroundDismiss: false,
  buttons: {
    cancelar: function () {},
    encerrar: {
      text: 'Encerrar',
      btnClass: 'btn-red',
      keys: ['enter', 'shift'],
      action: function(){
        localStorage.removeItem("Pontuação");
          window.close();
          quizState.status = 'menu';
          quizState.score = 0;
          quizState.currentQuestion = 0;
        }
      }
    }
  });
};

// answer question function
export const answerQuestion = (selectedIndex) => {
  const question = quizQuestions[quizState.currentQuestion];

  if (selectedIndex === question.answer){
    quizState.score++;
  }

  quizState.currentQuestion++;

  if (quizState.currentQuestion >= quizQuestions.length) {
    finishQuiz();
  }
};