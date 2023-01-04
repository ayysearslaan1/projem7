import{useState} from"react";
import Header from "./header";
import footer from "./footer";

function App() {
  const[theme,setTheme]= useState('light')
  const[language,seTheme]= useState('tr')
  return(
    <div clasname="app">
    
      <header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      app
      <footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
    </div>

  );
}


  
    

export default App;
