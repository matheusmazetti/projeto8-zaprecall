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

function Questions(props){
    const { index, question, answer, callback } = props;
    const [selected, setSelected] = React.useState('front');
    const [result, setResult] = React.useState('');
    
    return(
        <div className='question'>
            <div className={`front ${(selected === 'front')?'':'hidden'} ${result}`}>
                <h1>{`Pergunta ${index+1}`}</h1>
                <button onClick={() => setSelected('open')}><img src='assets/Vector.png' /></button>
            </div>
            <div className={`open ${(selected === 'open')?'':'hidden'}`}>
                <h1>{question}</h1>
                <button onClick={() => setSelected('back')}><img src="assets/setinha.png"/></button>
            </div>
            <div className={`back ${(selected === 'back')?'':'hidden'}`}>
                <h1>{answer}</h1>
                <div className='buttons'>
                    <button className='amnesia' onClick={() => {
                        setSelected('front')
                        setResult('incorrect')
                        callback(1)}}>Não lembrei</button>
                    <button className='almost' onClick={() => {
                        setSelected('front')
                        setResult('almost-correct')
                        callback(1)}}>Quase não lembrei</button>
                    <button className='zap' onClick={() => {
                        setSelected('front')
                        setResult('correct')
                        callback(1)}}>Zap!</button>
                </div>
            </div>
        </div>
    )
}

export default function RecallQuestions(props){
    const { callback } = props
    if(zapShuffle.length < 8){
        shuffle();
    }
    //const [sinal, setSinal] = React.useState([]);
    //const [classe, setClasse] = React.useState([]);
    
    return(
        <div className="questions">
            {zapShuffle.map((zap, index) => {
                const { question, answer } = zap;
                return(
                    <Questions 
                        question={question}
                        answer={answer}
                        index={index}
                        callback={callback}
                    />
                )
            })}
        </div>
    )
}