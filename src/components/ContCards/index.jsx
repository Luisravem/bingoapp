import { useContext ,useEffect} from "react";
import { GlobalContext } from "../Context";
import { ShowWinner } from "../Winner/ShowWinner.jsx";
import { Card } from "./Card";
import { ItemsCard } from "./ItemsCard";
import "./card.css";

const ContCards = ({ children }) => {
  const { players, validarGanador} = useContext(GlobalContext);

  let indexColor = 0;

  const backgdColor = [
    "#FF7F50",
    "#BC8F8F",
    "#ADFF2F",
    "#FF69B4",
    "#6495ED",
    "#006400",
    "#FF1493",
    "#CD5C5C",
    "#00FA9A",
  ];
  return (
    <div className="game-wrapper">
      {children}
      <div className="cont-cards">
        {validarGanador ?<ShowWinner/>:players.map((e, i) => {
          return (
            
            <Card
              bg={{ backgroundColor: `${backgdColor[indexColor++]}` }}
              key={i}
              namePlayer={e.nombre}
            >
              {e.numbersCard.map((e) => {
                
                return <ItemsCard key={e} item={e}></ItemsCard>;
              })}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export { ContCards };
