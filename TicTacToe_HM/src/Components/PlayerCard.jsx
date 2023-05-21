import { useEffect, useState } from "react";


function PlayerCard(props){

    const [ selected, setSelected ] = useState(false);
    const [ name, setName ] = useState(props.name);
    const [ clicked, setClicked ] = useState(props.clicked);

    function test(){
        setClicked(prev=>!prev);
    }


    return(

        clicked ? 
        
        <div className="login__playerCard clicked" >
            <input 
                type="text"
                placeholder="enter player name"
            />
            <input type="color" />
            <label htmlFor="ai">AI player
                <input type="checkbox" id="ai" />
            </label>

            <button>OK</button>

            <button onClick={test}
                >cancel
            </button>

        </div>

        :
        <div className="login__playerCard" onClick={test}>
                        <img className="playerDefaultImg" src="/user.svg" alt="" />
                        <p>{name}</p>
        </div>
    );
}

export { PlayerCard };