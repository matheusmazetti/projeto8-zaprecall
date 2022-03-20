import RecallPageLogo from "./RecallPageLogo";
import RecallQuestions from "./RecallQuestions";


export default function RecallPage(props){
    return(
        <div className={`${props.classHidden}`}>
            <RecallPageLogo />
            <RecallQuestions />
        </div>
    )
}