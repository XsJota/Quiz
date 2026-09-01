// service imports
import { getHighScore } from "../service/storage-service.js";

// render score function
export const renderScore = ($app) => {
    const currentRecord = getHighScore();
    
    $app.html(`
        <div class="container mx-auto mt-10 text-center">
          <h1 class="text-4xl font-bold text-blue-500 mb-4">Recorde do Jogador</h1>
          <div class="bg-white shadow-md rounded-lg p-4 text-center max-w-sm mx-auto">
            <p class="text-lg font-semibold">O seu recorde atual é:</p>
            <p class="text-4xl font-bold text-blue-500" id="recorde">${currentRecord ? currentRecord : 'Nenhum recorde ainda'}</p>
          </div>
          <div data-action="menu" class="mt-4 bg-yellow-500/100 p-2 rounded-md hover:bg-yellow-600 max-w-xs mx-auto">
            <button type="button">Voltar</button>
          </div>
        </div>
    `);
}