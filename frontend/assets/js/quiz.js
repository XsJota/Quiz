$(document).ready(function(){
  var score = 0;
  var currentQuestion = 0;
  const quizQuestions = [
    {
      question: "Qual a capital da França?",
      options: ["Paris", "Madrid", "London", "Roma"],
      answer: 0,
    },
    {
      question: "Quem foi Leonardo da Vinci?",
      options: ["Ator", "Programador", "Roteirista", "Cientista"],
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
      answer: 0,
    },
    {
      question: "Quantos planetas existem no sistema solar?",
      options: ["5", "7", "8", "9"],
      answer: 2,
    },
    {
      question: "Qual o maior planeta em nosso Sistema Solar?",
      options: ["Marte", "Jupiter", "Vênus", "Saturno"],
      answer: 1,
    },
    {
      question: "Quem escreveu a obra 'Dom Quixote'?",
      options: ["William Shakespeare", "Charles Dickens", "Miguel de Cervantes", "Friedrich Nietzsche"],
      answer: 2,
    },
    {
      question: "Qual a tradução da palvavra 'worse'? ",
      options: ["O pior", "Ruim", "Bom", "Pior que"],
      answer: 3,
    },
    {
      question: "Qual seleção nacional venceu a Copa do Mundo de 2002?",
      options: ["Brasil", "Alemanha", "Argentina", "França"],
      answer: 0
    },
    {
      question: "Qual é a capital do Brasil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      answer: 2,
    },
  ];

  const playGame = () => {
    $("body").empty();
    $("body").append(`
    <div class="flex justify-center items-center h-screen">
      <div class="container w-full max-w-xl ">
        <div class="px-32 pt-6 pb-8 mb-4 ">
    
          <div class="logo mr-5 max-w-xs max-w-xs">
            <img src="./frontend/assets/img/quiz2.png" alt="Logo Quiz" srcset="">
          </div>
    
        <div>
        <div id='start' class="p-2 text-center bg-yellow-500/100 rounded-md hover:bg-yellow-600">
          <button type="button" onclick="">Iniciar</button>
        </div>
    
        <div id='score' class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
          <button type="button" onclick="">Recordes</button>
        </div>
    
        <div id='close' class="my-7 text-center p-2 bg-yellow-500/100 rounded-md hover:bg-yellow-600">
          <button type="button" onclick="">Encerrar</button>
        </div>
      </div>
    </div>
    `);
  
  const loadQuestion = () => {
    $("body").empty();
    $("body").append(`
      <div class="flex justify-center items-center h-screen">
        <div class="container w-full max-w-xl ">
          <div class="p-12 pb-10 mb-10 flex flex-col items-center justify-center">
            <div class="logo mr-5 max-w-xs max-w-xs">
                <img src="./frontend/assets/img/quiz2.png" alt="Logo Quiz" style="max-width: 150px; max-height: 150px;">
            </div>
            <div class="bg-white p-8 rounded shadow-md w-96 shadow-lg shadow-gray-500/50">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-lg font-semibold">Questão ${(currentQuestion + 1)} de ${quizQuestions.length}</div>
                    <div class="text-lg font-semibold">Score: ${score}</div>
                </div>
                <div class="mb-6">
                    <h2 id='question' class="text-xl font-semibold">${quizQuestions[currentQuestion].question}</h2>
                </div>
            </div>
        </div>
    </div>
</div>

    `)
    for (i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
      $(".bg-white").append(`
      <div class="mb-4">
      <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-600">${quizQuestions[currentQuestion].options[i]}</button>
      </div>
      `);
    }
    $(".bg-white").append(`
    <div class="h-4 relative w-full bg-gray-300 rounded">
    <div class="h-full bg-yellow-500 rounded" style="width:${(currentQuestion + 1) / quizQuestions.length * 100}%;"></div>
    </div>
    `)
    $(".bg-white").append(`
    <div class="mt-4">
    <button class="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600">Reiniciar</button>
    </div>
    `)
    $(".bg-white").append(`
    <div class="mt-6">
    <button class="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600">Encerrar</button>
    </div>
    `)
    $(".mt-6").click(function() {
      $("body").empty();
      score = 0;
      currentQuestion = 0;
      playGame();
    });
    $(".mb-4").click(submitButton);
    $(".mt-4").click(function() {
      $("body").empty();
      currentQuestion = 0;
      score = 0;
      loadQuestion();
    });
  };
  
  const submitButton = (event) => {
    let selectedAnswer = $(event.target).text();
    if (selectedAnswer === quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].answer]){
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      loadQuestion();
      return;
    }else{
      $("body").empty();
      $("body").append(`
      <div class="flex justify-center items-center h-screen">
        <div class="container w-full max-w-xl">
           <div class="p-12 pb-10 mb-10 flex flex-col items-center justify-center">
              <div class="bg-white p-8 rounded shadow-md w-96 shadow-lg shadow-gray-500/50">
                <div class="text-center">
                  <h2 class="text-xl font-semibold">Quiz Completed</h2>
                  <p>Your Score: ${score} out of ${quizQuestions.length}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      `);
    }
      $(".text-center").append(`
          <div class="mt-4">
            <button class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-red-600">Reiniciar</button>
          </div>
      `)
           
      $(".text-center").append(`
        <div class="mt-5">
          <button id='end' class="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-red-600">Ir ao menu</button>
        </div>
      `)

      saveScore(score);

      $("#end").click(function() {
        $("body").empty();
        score = 0;
        currentQuestion = 0;
        playGame();
      });
  
      $(".mt-4").click(function() {
      $("body").empty();
        currentQuestion = 0;
        score = 0;
        loadQuestion();
      });
  };
  const saveScore = (score) => {
    const currentRecord = localStorage.getItem("Pontuação");
    const currentRecordNumber = parseInt(currentRecord);

    if (!currentRecordNumber || score > currentRecordNumber) {
        localStorage.setItem("Pontuação", score);
        alert("Novo recorde!");
    }
    return;
}

  const showScore = () => {
    const currentRecord = localStorage.getItem("Pontuação");
    $("body").empty();
    $("body").append(`
      <div class="container mx-auto mt-10 text-center">
        <h1 class="text-4xl font-bold text-blue-500 mb-4">Recorde do Jogador</h1>
        <div class="bg-white shadow-md rounded-lg p-4 text-center max-w-sm mx-auto">
          <p class="text-lg font-semibold">O seu recorde atual é:</p>
          <p class="text-4xl font-bold text-blue-500" id="recorde">${currentRecord}</p>
        </div>
        <div id="back" class="mt-4 bg-yellow-500/100 p-2 rounded-md hover:bg-yellow-600 max-w-xs mx-auto">
          <button type="button">Voltar</button>
        </div>
      </div>
    `)
    $("#back").click(function () {
      playGame();
    });
  }
  
  
    $("#start").click(function () {
      loadQuestion();
    });

    $("#score").click(function () {
      showScore();
    });

    $("#close").click(function () {
      const confirmation = confirm("Tem certeza que deseja fechar o jogo?");
      confirmation && window.close();
    });
  }
  playGame();
});