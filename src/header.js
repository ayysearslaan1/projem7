export default function Header({theme, setTheme}){
    return(
        <header>
            HEADER <br/>
            Mevcut tema={theme} <br/>
            <button>Temayı değiştir</button>
        </header>
    )
}