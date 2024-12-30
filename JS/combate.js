
const combatePerguntas = [
    {
        pergunta: "Qual é a principal forma de transmissão de doenças transmissíveis?",
        opcoes: ["Contato físico", "Ar", "Água contaminada", "Alimentos não cozidos"],
        resposta: "Contato físico"
    },
    {
        pergunta: "Quais são os sintomas comuns das doenças transmitidas por vírus?",
        opcoes: ["Febre alta", "Erupções cutâneas", "Dor de cabeça", "Todos os anteriores"],
        resposta: "Todos os anteriores"
    },

];

function combateExibirPerguntas() {
    const combateQuizContent = document.getElementById("combate-quiz-content");

    combatePerguntas.forEach((pergunta, index) => {
        const combateDivPergunta = document.createElement("div");
        combateDivPergunta.innerHTML = `<p>${index + 1}. ${pergunta.pergunta}</p>`;
        
        pergunta.opcoes.forEach(opcao => {
            const combateRadio = document.createElement("input");
            combateRadio.type = "radio";
            combateRadio.name = `combate-pergunta${index}`;
            combateRadio.value = opcao;
            combateDivPergunta.appendChild(combateRadio);
            combateDivPergunta.innerHTML += `<label>${opcao}</label><br>`;
        });

        combateQuizContent.appendChild(combateDivPergunta);
    });
}


function combateVerificarRespostas() {
    const combateResultado = document.getElementById("combate-resultado");
    let acertos = 0;

    combatePerguntas.forEach((pergunta, index) => {
        const selecionado = document.querySelector(`input[name='combate-pergunta${index}']:checked`);
        if (selecionado && selecionado.value === pergunta.resposta) {
            acertos++;
        }
    });


    const resultadoAnterior = document.getElementById("combate-resultado");
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }


    const novoResultado = document.createElement("p");
    novoResultado.id = "combate-resultado";
    novoResultado.className = "combate-resultado";
    novoResultado.innerHTML = `Você acertou ${acertos} de ${combatePerguntas.length} perguntas.`;

    const contenedorQuiz = document.querySelector(".combate-quiz-container");
    contenedorQuiz.appendChild(novoResultado);
}


window.onload = combateExibirPerguntas;


