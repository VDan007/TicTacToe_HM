import { winConditonChecker } from "./HelperFunctions/winConditionChecker";
import { Login } from "./Components/Login";
import { GameTable } from "./Components/GameTable";
import { useState } from "react";


function App() {

  // state 2Darray for rows and coloumns
  // state array of players
  // state current players move
  // state game started
  // state game won ?
 

  const[ showLogin, setShowLogin ] = useState(true);
  const[ showGameTable, setShowGAmeTable ] = useState(false);




  

  return (
    <div className="app">
      {showLogin && <Login/>}
      {showGameTable&&<GameTable/>}
      
    </div>
  );
} 

export default App;
 