import { useContext } from "react";
import { Layout } from "../../Layout/Layout.jsx";
import { GlobalContext } from "../../Context/index.jsx";
import { ContCards } from "../../ContCards/index.jsx";
import { InfoCollector } from "../../infoCollector/index.jsx";
import { Balotera } from "../../Balota/Balotera.jsx";

import "./board.css";



const Board = () => {
  const { players } = useContext(GlobalContext);
  return (
    <Layout>
      {players.length <= 0 ? (
        <InfoCollector></InfoCollector>
      ) : (
        <ContCards><Balotera></Balotera></ContCards>
      )}
    </Layout>
  );
};

export { Board };
