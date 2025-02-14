import { useContext, useState } from "react";
import { GetNumPlayers } from "./getNumPlayers";
import { CreatePlayers } from "./CreatePlayers";
import { GlobalContext } from "../Context";
import { Layout } from "../Layout/Layout";
import "./infoCollector.css";

function createCollectionRandomNumbers(howManyIterations) {
  let numIter = howManyIterations;
  let tagCollection = [];
  

  while (tagCollection.length < numIter) {
    let randomNum = Math.floor(Math.random(0) * 100);
    let isIt = false;
    for (let i = 0; i < tagCollection.length; i++) {
      if (tagCollection[i] == randomNum) {
        isIt = true;
        break;
      }
    }
    if (!isIt) {
      tagCollection[tagCollection.length] = randomNum;
    }
  }
  
  return tagCollection;
}

export const InfoCollector = () => {
  const {savePlayers ,saveBalotera} = useContext(GlobalContext);
  let [namePlayers, setNamePlayers] = useState(0);
  let tagCreatePlayers = [];
  let playersCollector = [];

  for (let i = 1; i <= namePlayers; i++) {
    tagCreatePlayers.push(i);
  }
  
  return (
    <Layout>
      <form className="container-info-collector" name="infocollector">
        <h1 htmlFor="createPlayers">CREAR CARTONES</h1>
        {!namePlayers ? (
          <GetNumPlayers></GetNumPlayers>
        ) : (
          tagCreatePlayers.map((e) => {
            return (
              <CreatePlayers
                key={e}
                textIni={`${"Nombre jugador "} ${e}`}
              ></CreatePlayers>
            );
          })
        )}
        <input
          type="submit"
          value={"crear"}
          onClick={(e) => {

            if (!namePlayers) {
              e.preventDefault();
              saveBalotera(createCollectionRandomNumbers(100))
              document.querySelector(".get-num-players").value > 0
                ? setNamePlayers(e.target.value)
                : false;
              setNamePlayers(document.querySelector(".get-num-players").value);
            } else {
            
              document.querySelectorAll(".create-players").forEach((e, i) => {
                playersCollector.push({
                  nombre: e.value.slice(0,1).toUpperCase() + e.value.slice(1),
                  id: i,
                  numbersCard: createCollectionRandomNumbers(25),
                  completedCard:NaN
                  
                });

                savePlayers(playersCollector);
              });
            }
          }}
        />
      </form>
    </Layout>
  );
};
