import React from 'react';
import Footer from "./Footer";
import RecallPageLogo from "./RecallPageLogo";
import RecallQuestions from "./RecallQuestions";


export default function RecallPage(props){
    const [value, setValue] = React.useState(0);
    return(
        <>
            <div className={`${props.classHidden}`}>
                <div className="recall">
                    <RecallPageLogo />
                    <RecallQuestions callback={(answer) => setValue(value + answer)}/>
                </div>
                <Footer value={value}/>
            </div>
        </>
    )
}