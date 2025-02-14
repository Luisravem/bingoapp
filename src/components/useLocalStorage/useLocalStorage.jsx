import { useState } from "react"


const useLocalStorage = (itemName,initialValue)=>{
    
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item,setItem] = useState(parsedItem); //aqui se guarda y se actializa lo que viene para useContext
    const saveItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem);
    };
   
    
    return [item,saveItem]
}

export default useLocalStorage