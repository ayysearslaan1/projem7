import switchTheme from"./switchTheme";
import switchLanguage from"./switchLanguage";

export default function footer(){
    return(
        <footer>
            footer <br/>

            <switchTheme />
            <switchLanguage/>

        </footer>
    )
}