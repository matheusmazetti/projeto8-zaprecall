import ReactDOM from 'react-dom';
import React from 'react';
import FirstPage from './contents/FirstPage';
import RecallPage from './contents/RecallPage';

function App(){
    const [hidden, setHidden] = React.useState('');
    
    return(
        <>
            <FirstPage classHidden={hidden} callback={() => setHidden('hidden')}/>
            <RecallPage classHidden={(hidden === 'hidden')?'':'hidden'}/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));