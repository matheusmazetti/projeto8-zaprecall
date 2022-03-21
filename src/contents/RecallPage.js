import React from 'react';
import Footer from "./Footer";
import RecallPageLogo from "./RecallPageLogo";
import RecallQuestions from "./RecallQuestions";


export default function RecallPage(props){
    const [value, setValue] = React.useState(0);
    const [footerIcons, setFooterIcons] = React.useState([]); 
    return(
        <>
            <div className={`${props.classHidden}`}>
                <div className="recall">
                    <RecallPageLogo />
                    <RecallQuestions callback={(answer) => setValue(value + answer)} iconsCallback={(newIcon) => setFooterIcons([...footerIcons, newIcon])}/>
                </div>
                <Footer value={value} footerIcons={footerIcons}/>
            </div>
        </>
    )
}