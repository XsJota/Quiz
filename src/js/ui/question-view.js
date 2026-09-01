// questions imports
import { quizQuestions } from "../data/questions.js";

// render question function
export const renderQuestion = ($app, state) => {
    const question = quizQuestions[state.currentQuestion];

    const progress = (state.currentQuestion + 1) / quizQuestions.length * 100;
    
    const options = question.options.map((option, index) => `
        <div data-action="answer" data-index="${index}" class="mb-4">
            <button  class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">${option}</button>
        </div>
    `).join('');

    $app.html(`
        <div class="flex justify-center items-center h-screen">
            <div class="container w-full max-w-xl ">
              <div class="p-12 pb-10 mb-10 flex flex-col items-center justify-center">
                <div class="logo mr-5 max-w-xs max-w-xs">
                    <img src="../../public/assets/images/quiz.png" alt="Logo Quiz" style="max-width: 150px; max-height: 150px;">
                </div>
                <div class="bg-white p-8 rounded shadow-md w-96 shadow-lg shadow-gray-500/50">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-lg font-semibold">Questão ${(state.currentQuestion + 1)} de ${quizQuestions.length}</div>
                        <div class="text-lg font-semibold">Score: ${state.score}</div>
                    </div>
                    <div class="mb-6">
                        <h2 id='question' class="text-xl font-semibold">${question.question}</h2>
                    </div>
                    ${options}
                    <div class="h-4 relative w-full bg-gray-300 rounded">
                        <div class="h-full bg-yellow-500 rounded" style="width:${progress}%;"></div>
                    </div>
                    <div data-action="restart" class="mt-4">
                      <button class="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600">Reiniciar</button>
                    </div>
                    <div data-action="menu" class="mt-6">
                      <button class="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600">Encerrar</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    `);
};