// Renderizando Div
/*
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


    $("").click(function(){ // Evento de clique
        
        
        alert("The paragraph was clicked.");


    });

*/


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
  