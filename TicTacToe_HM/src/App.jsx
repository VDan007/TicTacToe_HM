import { winConditonChecker } from "./winConditionChecker";
import { Overlay } from "./Overlay";
import { GameTable } from "./GameTable";
import { useState } from "react";
import { AlienSVG } from "./AlienSVG";

function App() {

  // state 2Darray for rows and coloumns
  // state array of players
  // state current players move
  // state game started
  // state game won ?
 

  const[ showOverlay, setShowOverlay ] = useState(true);




  let lastCS = [4,0];


  winConditonChecker(lastCS,3,"x");

  return (
    <div>
      {showOverlay && <Overlay/>}
      <GameTable/>
      <AlienSVG
        fill="blue"
      />
    </div>
  );
}

export default App;
 