import React from 'react'

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

export default function RecallQuestions(props){
    const { callback } = props
    if(zapShuffle.length < 8){
        shuffle();
    }
    const [sinal, setSinal] = React.useState([]);
    let questions = zapShuffle.map((zap, index) => 
        <div className="question" >
            <div className={`front ${(sinal[1] === index)?((sinal[0] === 'front')?'':'hidden'):''}`}>
                <h1>{`Pergunta ${index + 1}`}</h1>
                <button onClick={() => setSinal(['open', index])}><img src="assets/Vector.png"/></button>
            </div>
            <div className={`open ${(sinal[1] === index)?((sinal[0] === 'open')?'':'hidden'):'hidden'}`}>
                <h1>{zap.question}</h1>
                <button onClick={() => setSinal(['back', index])}><img src="assets/setinha.png"/></button>
            </div>
            <div className={`back ${(sinal[1] === index)?((sinal[0] === 'back')?'':'hidden'):'hidden'}`}>
                <h1>{zap.answer}</h1>
                <div className="buttons">
                    <button onClick={() => callback(1)} className="amnesia">Não lembrei</button>
                    <button onClick={() => callback(1)} className="almost">Quase não lembrei</button>
                    <button onClick={() => callback(1)} className="zap">Zap!</button>
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