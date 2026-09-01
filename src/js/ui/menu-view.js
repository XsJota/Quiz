export const renderMenu = ($app) => {
    $app.html(`
        <div class="flex justify-center items-center h-screen">
            <div class="container w-full max-w-xl ">
            <div class="px-32 pt-6 pb-8 mb-4 ">
                <div class="logo mr-5 max-w-xs max-w-xs">
                <img src="../../public/assets/images/quiz.png" alt="Logo Quiz" srcset="">
                </div>
                <div>
                <div data-action="start" class="p-2 text-center bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                    <button type="button" onclick="">Iniciar</button>
                </div>
                <div data-action="score" class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                    <button type="button" onclick="">Recordes</button>
                </div>
                <div data-action="close" class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                    <button type="button" onclick="">Encerrar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    `);
};