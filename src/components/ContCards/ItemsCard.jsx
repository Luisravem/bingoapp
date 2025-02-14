import { useContext, useState } from "react";
import { GlobalContext } from "../Context";
import "./card.css"; 


const ItemsCard = ({ item }) => {
 const {balotas,players} = useContext(GlobalContext);
 

 let num = false;
balotas.map((e,i)=>{
  
  if(e === item){
    
    num = true
  }else{
    num === false
  }
})

  return (
    <div key={item} className={!num?"card-number":"card-number-descarded"}>
      
     <b>{item}</b>
     
    </div>
  );
};

export { ItemsCard };
