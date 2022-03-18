import ReactDOM from 'react-dom';
import FirstPage from './contents/FirstPage';

function App(){
    return(
        <>
            <FirstPage />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));