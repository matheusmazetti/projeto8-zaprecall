export default function FirstPage(props){
    let {classHidden, callback} = props;
    return( 
        <header className={classHidden}>
            <img src="assets/logo.png" className="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={callback}>Iniciar Recall!</button>
        </header>
    )
}