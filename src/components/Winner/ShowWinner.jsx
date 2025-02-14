import { useContext } from "react"
import { GlobalContext } from "../Context"
import {Layout} from "../Layout/Layout"

import "./showWinner.css"


function ShowWinner(){
    
    const {players} = useContext(GlobalContext);
    let winner = {}
players.filter((e)=>{
    if(e.completedCard == 0){
        winner.nombre = e.nombre
    }
})
    return <Layout><div className="window-winner"><h1>GANADOR <br /><span>{winner.nombre}</span></h1>
    </div></Layout>
}

export {ShowWinner}