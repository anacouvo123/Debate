const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Dê que forma a adoção de energia eólica pode impactara gestão de resíduos e a conservação de água em uma comunidade?",
        alternativas: [
            {
                texto: "A comunidade adota energia eólica como principal fonte de energia.",
                afirmacao: "Reduz a produção de resíduos tóxicos ao diminuir a depêndencia de combustiveis fósseis. "
            },
            {
                texto: "A comunidade continua a utilizar fontes tradicionais de energia, como carvão e gás natural.",
                afirmacao: "Infelizmente se a comunidade onsome grandes quantidades de água, exacerbando a escassez hídrica, não haverá conservação de água."
            }
        ]
    },
    {
        enunciado: "Para promover a sustentabilidade ambiental qual das seguintes ações é mais eficaz?",
        alternativas: [
            {
                texto: "Gerenciar resíduos de forma eficiente para reduzir a poluição e conservar recursos.",
                afirmacao: "O gerenciamento de resíduos minimiza o desperdício, reduz a poluição e preserva recursos."
            },
            {
                texto: "Investir em energia eólica para gerar eletricidade e reduzir a depêndencia de combustivel fossil.",
                afirmacao: "A energia eólica é uma fonte renovavel e limpa que ajuda a reduzir a emissão de gases."
            }
        ]
    },
    {
        enunciado: "Como a implementação de energia eólica pode impactar o gerenciamento de resíduos e a conservação de água em uma região?",
        alternativas: [
            {
                texto: "A energia eólica, ao substituir fontes de energia baseadas em combustíveis fósseis, reduz a produção de resíduos tóxicos e a poluição da água.",
                afirmacao: "A energia eólica melhora o gerenciamento de resíduos e conserva a água, promovendo um ambiente mais limpo."
            },
            {
                texto: "A produção e a manutenção de turbinas eólicas podem gerar resíduos industriais específicos e, em algumas fases, demandar uso intenssivo de água.",
                afirmacao: "É crucial adotar práticas de reciclagem e gestão de resíduos e minimizar ouso de água para maximizar a sustentabilidade da energia eólica."
            }
        ]
    },
    {
        enunciado: "De que maneira a conservação da água pode ser afetada pela expansão de parques de energia eólica?",
        alternativas: [
            {
                texto: "A energia eólica requer pouca água para operação, ao contrário de outras energias.",
                afirmacao: "A expansão de parques eólicos contribui para a conservação de recursos hídricos, levando mais água para outros usos essenciais na comunidade."
            },
            {
                texto: "A construção de parques eólicos pode afetar o uso do solo, importando os recursos hídricos.",
                afirmacao: "Apesar da operação de parques eólicos conservar água é crucial planejar e emitir impactos durante a construção para protejer os recursos hídricos."
            }
        ]
    },
    {
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();