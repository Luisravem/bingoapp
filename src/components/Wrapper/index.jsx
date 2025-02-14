import { BrowserRouter, useRoutes } from "react-router-dom";
import { Header } from "../Header/index.jsx";
import { Board } from "../pages/Board/Board.jsx";
import { Instructions } from "../pages/Instructions/Instructions.jsx";
import "./wrapper.css";

const WeaperrRouters = () => {
  let router = useRoutes([
    { path: "/", element: <Board /> },
    { path: "/instructions", element: <Instructions /> },
  ]);
  return router;
};

const Wrapper = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header></Header>

        <WeaperrRouters />
      </BrowserRouter>
    </div>
  );
};

export default Wrapper;
