import { createContext,useState } from "react";
import { data } from './data.js'

const CardContext =createContext();

export function CardProvider({children}){
    const [dataInfo, setDataInfo] = useState(data)
    const updateData=(info)=>{
        setDataInfo(info);
    }
 
    return(
        <CardContext.Provider value={{dataInfo ,updateData}}>{children}</CardContext.Provider>
    )
}

export default CardContext;
