import { useEffect } from "react";
import { PlayerCard } from "./PlayerCard";

function Login(){


    


    return(
        <div className="login">
            <div className="login__playerContainer">
               
                    <PlayerCard
                        key = "p01"
                        name = "player1"
                        clicked = {false}
                    />
                    <PlayerCard
                        key = "p02"
                        name = "player2"
                        clicked = {false}
                    />
                    <PlayerCard
                        key = "p03"
                        name = "player3"
                        clicked = {false}
                    />
                    <PlayerCard
                        key = "p04"
                        name = "player4"
                        clicked = {false}
                    />
                    
                
            </div>
            <div>
                <h1>table size setup</h1>
            </div>

        </div>
    );
}


export { Login };