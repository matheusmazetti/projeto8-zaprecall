function Icons(props){
    const {icons} = props;
    return(
        <div className={icons}>
            <ion-icon name={icons}></ion-icon>
        </div>
    )
}
export default function Footer(props){
    const { value, footerIcons } = props
    return(
        <footer className={(value === 8)?'big-footer':'footer'}>
            <h1>{`${value}/8 concluídos`}</h1>
            <div class='icons'>
                {footerIcons.map((icons) => 
                    <Icons icons={icons}/>
                )}
            </div>
        </footer>
    )
}