import Header from "./header";
import footer from "./footer";

export default function home() {
    return(
        <>
     <header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      app
      <footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
        </>
    )
}