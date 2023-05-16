import { winConditonChecker } from "./winConditionChecker";
import { Overlay } from "./Overlay";
import { GameTable } from "./GameTable";
import { useState } from "react";

function App() {

  // state 2Darray for rows and coloumns
  // state array of players
  // state current players move
  // state game started
  // state game won ?
 

  const[ showOverlay, setShowOverlay ] = useState(false);




  let lastCS = [0,0];


  winConditonChecker(lastCS,3,"x");

  return (
    <div>
      {showOverlay && <Overlay/>}
      <GameTable/>
    </div>
  );
}

export default App;
 