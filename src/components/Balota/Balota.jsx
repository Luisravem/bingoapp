import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context";
import "./balotera.css";

const Balota = () => {
  const { balotas, saveBalotas, balotera, setUpdatedContext, players } =
    useContext(GlobalContext);
  let card = document.querySelectorAll(".card");
  useEffect(() => {
    card.forEach((e, i) => {
        (players[i].completedCard = e.querySelectorAll(".card-number").length)
    });
  }, [card]);
  let numberCreated = "tirar";

  return (
    <div
      className="balota"
      onClick={(element) => {
        numberCreated = element.target.innerHTML = balotera.pop();

        if (numberCreated == undefined) {
          element.target.innerHTML = "fin";
        }

        for (let i = 0; i < balotera.length; i++) {
          switch (!balotas.includes(numberCreated)) {
            case true:
              balotas.unshift(numberCreated);
              setUpdatedContext(element);
              saveBalotas(balotas);

              continue;
          }
        }
      }}
    >
      <div className="balota__num">{numberCreated}</div>
    </div>
  );
};
export { Balota };
