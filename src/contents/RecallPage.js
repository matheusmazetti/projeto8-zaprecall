import Footer from "./Footer";
import RecallPageLogo from "./RecallPageLogo";
import RecallQuestions from "./RecallQuestions";


export default function RecallPage(props){
    return(
        <>
            <div className={`${props.classHidden}`}>
                <div className="recall">
                    <RecallPageLogo />
                    <RecallQuestions />
                </div>
                <Footer />
            </div>
        </>
    )
}