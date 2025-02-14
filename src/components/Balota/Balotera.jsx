import { useContext } from "react";
import { GlobalContext } from "../Context/index.jsx";
import { Balota } from "./Balota.jsx";

import "./balotera.css" 



const Balotera = ()=>{
    
    
   const {balotas} = useContext(GlobalContext);
   

    return <div className="balotera-container">
        <Balota></Balota>
        {balotas.map((e,i)=>{
    return <div key={i} className="balotilla">{e}</div>
   })}
        
    </div>
}
export {Balotera}