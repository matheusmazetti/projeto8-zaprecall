export default function Footer(props){
    const { value } = props
    return(
        <footer className={(value === 8)?'big-footer':'footer'}>
            <h1>{`${value}/8 concluídos`}</h1>
        </footer>
    )
}