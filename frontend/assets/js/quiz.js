// Renderizando Div

    $("body").append(`
        <div class="flex justify-center items-center h-screen">
        <div class="container w-full max-w-xl ">


            <div class="px-32 pt-6 pb-8 mb-4 ">

                <div class="logo mr-5 max-w-xs max-w-xs">
                    <img src="assets/img/quiz2.png" alt="Logo Quiz" srcset="">
                </div>
                
                <div>
                    <div class="p-2 text-center bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                        <button id='start' type="button" onclick="">Iniciar</button>
                    </div>

                    <div class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                        <button type="button" onclick="">Recordes</button>
                    </div>

                    <div class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
                        <button type="button" onclick="">Encerrar</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    `);


    $("#start").click(function(quizQuestions){ // Evento de clique
        
        $("body").append(`
        <div class="flex justify-center items-center h-screen">
        <div class="container w-full max-w-xl ">
            <div class="p-12 pb-10 mb-10 flex flex-col items-center justify-center">

                <div class="logo mr-5 max-w-xs max-w-xs">
                    <img src="assets/img/quiz2.png" alt="Logo Quiz" srcset="">
                </div>
                
                <div class="bg-white p-8 rounded shadow-md w-96 shadow-lg shadow-gray-500/50">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-lg font-semibold">Questão 1 de 5</div>
                        <div class="text-lg font-semibold">Score: 0</div>
                    </div>
                    <div class="mb-6">
                        <h2 class="text-xl font-semibold">Qual é a capital da França</h2>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">Paris</button>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">Berlin</button>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">Madrid</button>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">Rio de Janeiro</button>
                    </div>

                    <div class="h-4 relative w-full bg-gray-300 rounded">
                        <div class="h-full bg-yellow-500 rounded" style="width: 10%;"></div>
                    </div>

                    <div class="mt-4">
                        <button class="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600">Reiniciar</button>
                    </div>
                    

                </div>

            </div>
        </div>
    </div>
    `);
        alert("The paragraph was clicked.");


    });




const quizQuestions = [

    {
      question: "Qual o maior planeta em nosso Sistema Solar?",
      options: ["Marte", "Jupiter", "Vênus", "Saturno"],
      answer: 1,
    },
    {
      question: "Qual a capital da França?",
      options: ["Paris", "Madrid", "London", "Rome"],
      answer: 0,
    },
    {
      question: "Quem foi Leonardo da Vint?",
      options: ["Ator", "Programador", "Roteirista", "Engenheiro"],
      answer: 3,
    },
    {
      question: "Qual o símbolo do Ouro na Tabela Periódica?",
      options: ["Go", "Gd", "Au", "Ag"],
      answer: 2,
    },
    {
      question: "Qual o maior animal terrestre do mundo?",
      options: ["Elefante", "Girafa", "Hipopótamo", "Rinoceronte"],
      answer: 1,
    }
    
  ];
  