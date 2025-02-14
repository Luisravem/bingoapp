import { NavBar } from "../NavBar";
import "./header.css"



const Header = () => {
  return (
    <header className="header">
      <NavBar></NavBar>
    
    <form><button onClick={()=>{
           localStorage.removeItem("BINGO_V1");
           localStorage.removeItem("BALOTAS");
           localStorage.removeItem("BALOTERA")
       }}>reset</button></form>
 </header>
  
);
};

export {Header}