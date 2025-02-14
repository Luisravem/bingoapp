import {createContext, useEffect, useState } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [players, savePlayers] = useLocalStorage("BINGO_V1", []);
  const [balotas, saveBalotas] = useLocalStorage("BALOTAS", []);
  const [balotera, saveBalotera] = useLocalStorage("BALOTERA", []);
  const [updatedContext, setUpdatedContext] = useState(0);
  const [validarGanador, setValidarGanador] = useState(false);
  useEffect(()=>{
    for(let value of players){
      if(value.completedCard === 0){
        setValidarGanador(true);
      }
    }
  },[updatedContext])
  return (
    <GlobalContext.Provider
      value={{
        players,
        savePlayers,
        balotas,
        saveBalotas,
        balotera,
        saveBalotera,
        validarGanador,
        setUpdatedContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
