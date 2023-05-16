


function App() {

  let squares = [
    ["x","x","x","x"],
    [0,1,2],
    [0,1,2],
    
  ];

  

  let selectedSquares = [squares[0][0],squares[0][1],squares[0][2]];

  console.log(squares);

  let lastCS = [0,2];


  function winConditonChecker(lastSelectedSquare,squaresToWin,symbol){


    let symbolCounter = 0;

    function horizontalChecker(){
      for(let i = lastSelectedSquare[1]; i < lastSelectedSquare[1] + squaresToWin; i++){
        console.log("ran right" + " " + i);
        if(squares[lastSelectedSquare[0]][i] && squares[lastSelectedSquare[0]][i] === symbol){
          symbolCounter++;
        }else{
          console.log("not included");
        }
      }
      for(let i = lastSelectedSquare[ 1 - 1 ]; i > lastSelectedSquare[1] - squaresToWin; i--){
        console.log("ran left" + " " + i);
        if(squares[lastSelectedSquare[0]][i] && squares[lastSelectedSquare[0]][i] === symbol){
          symbolCounter++;
        }else{
          console.log("not included");
        }
      }
      console.log(symbolCounter);
    }

    horizontalChecker();

  }

  winConditonChecker(lastCS,3,"x");

  return (
    <div>app</div>
  )
}

export default App
 