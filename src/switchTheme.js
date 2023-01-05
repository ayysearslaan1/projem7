import { useContext } from "react";
import sitecontext from"./context/sitecontext";

export default function switchTheme() {
    
    const data= useContext(sitecontext)

    Consele.log(data)
    
    return(
        <>test
        </>
    )
}