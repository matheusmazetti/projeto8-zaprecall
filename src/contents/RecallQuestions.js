const zapObj =[{question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript'},
{question:'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces'},
{question:'Componentes devem iniciar com __', answer:'letra maiúscula'},
{question:'Podemos colocar __ dentro do JSX', answer:'expressões'},
{question:'O ReactDOM nos ajuda __', answer:'interagindo com a DOM para colocar componentes React na mesma'},
{question:'Usamos o npm para __', answer:'gerenciar os pacotes necessários e suas dependências'},
{question:'Usamos props para __', answer:'passar diferentes informações para componentes'},
{question:' Usamos estado (state) para __', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}];
const zapShuffle =[]
function shuffle(){
    zapObj.sort(comparador);
    for(let i = 0; i < zapObj.length; i++){
        zapShuffle.push(zapObj[i]);
    }
}

function comparador(){
    return Math.random() - 0.5;
}

export default function RecallQuestions(){
    shuffle();
    let i = 1;
    let questions = zapShuffle.map(zap => 
        <div className="question">
            <div className="front">
                <h1>{`Pergunta ${i}`}</h1>
                <button><img src="assets/Vector.png"/></button>
            </div>
            <div className="open">
                <h1>{zap.question}</h1>
                <button><img src="assets/setinha.png"/></button>
            </div>
            <div className="back">
                <h1>{zap.answer}</h1>
                <div className="buttons">
                    <button className="amnesia">Não lembrei</button>
                    <button className="almost">Quase não lembrei</button>
                    <button className="zap">Zap!</button>
                </div>
            </div>
        </div>
        )
    return(
        <div className="questions">
            {questions}
        </div>
    )
}