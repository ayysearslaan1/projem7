import{useState} from"react";
import Header from "./header";
import footer from "./footer";
import sitecontext from"./context/sitecontext";
import home from "./home";

function App() {
  const[theme,setTheme]= useState('light')
  const[language,seTheme]= useState('tr')


  const data={
    theme,
    setTheme,
    language,
    setLanguage
  }




  return(
    
    <sitecontext.provider=value{data}>
    
    <home/>
    </sitecontex.provider>

  );
}


  
    

export default App;
