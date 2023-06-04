import { Field } from "./Field";
function GameTable(){
    const array = Array(100).fill("");
    console.log(array);
    const content = array.map((item,index) => <Field 
                                        key={index}/>);
    return(
        <div className="GameTable_container">
          {content}
        </div>
    );
}

export { GameTable };