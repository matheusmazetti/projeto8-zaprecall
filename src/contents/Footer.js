function Icons(props){
    const {icons} = props;
    return(
        <div className={icons}>
            <ion-icon name={icons}></ion-icon>
        </div>
    )
}

function Result(props){
    const{ footerIcons, value } = props
    if(footerIcons.includes('close-circle')){
        return(
            <div className={(value === 8)?'result':'result hidden'}>
                <div className="result-logo">
                    <img src="assets/sad.png" />
                    <h1>Putz...</h1>
                </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>
        )
    } else {
        return(
            <div className={(value === 8)?'result':'result hidden'}>
                <div className="result-logo">
                    <img src="assets/party.png" />
                    <h1>Parabéns</h1>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
        )
    }
}
export default function Footer(props){
    const { value, footerIcons } = props
    return(
        <footer className={(value === 8)?'big-footer':'footer'}>
            <Result value={value} footerIcons={footerIcons} />
            <h1>{`${value}/8 concluídos`}</h1>
            <div class='icons'>
                {footerIcons.map((icons) => 
                    <Icons icons={icons}/>
                )}
            </div>
        </footer>
    )
}