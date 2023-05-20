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
        
        <div className="login__playerCard clicked" onClick={test}>
            <input type="text" />
            <input type="color" />
            <input type="image" />

        </div>

        :
        <div className="login__playerCard" onClick={test}>
                        <img className="playerDefaultImg" src="/user.svg" alt="" />
                        <p>{name}</p>
        </div>
    );
}

export { PlayerCard };