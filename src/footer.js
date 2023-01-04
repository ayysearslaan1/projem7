import switchTheme from"./switchTheme";
import switchLanguage from"./switchLanguage";

export default function footer({theme,seTheme,language,setLanguage}){
    return(
        <footer>
            footer <br/>

            <switchTheme theme={theme} seTheme={seTheme}/>
            <switchLanguage language={language} setLanguage={setLanguage}/>

        </footer>
    )
}