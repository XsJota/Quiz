// questions imports
import { quizQuestions } from "../data/questions.js";

// render result function
export const renderResult = ($app, state) => {
    $app.html(`
        <div class="flex justify-center items-center h-screen">
            <div class="container w-full max-w-xl">
              <div class="p-12 pb-10 mb-10 flex flex-col items-center justify-center">
                <div class="bg-white p-8 rounded shadow-md w-96 shadow-lg shadow-gray-500/50">
                  <div class="text-center">
                    <h2 class="text-xl font-semibold">Quiz Completo</h2>
                    <p>Sua pontuação: ${state.score} de ${quizQuestions.length}</p>
                    <div data-action="restart" class="mt-4">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-red-600">Jogar novamente</button>
                    </div>
                    <div data-action="menu" class="mt-5">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-red-600">Ir ao menu</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
    `);
}