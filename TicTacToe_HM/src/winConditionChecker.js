


let squares = [
    ["x","p","p",],
    [0,1,2],
    [0,1,2],
    
  ];

  

  let selectedSquares = [squares[0][0],squares[0][1],squares[0][2]];

  console.log(squares);




  function winConditonChecker(lastSelectedSquare,squaresToWin,symbol){


    let symbolCounter = 0;

    function horizontalChecker(){
      for(let i = lastSelectedSquare[1]; i < lastSelectedSquare[1] + squaresToWin; i++){
        console.log("ran right" + " " + i);
        if(squares[lastSelectedSquare[0]][i] && squares[lastSelectedSquare[0]][i] === symbol){
          symbolCounter++;
        }else{
          console.log("not included");
          break;
        }
      }
      for(let y = lastSelectedSquare[1] -1; y > lastSelectedSquare[1] - squaresToWin; y--){
        console.log("ran left" + " " + y);
        if(squares[lastSelectedSquare[0]][y] && squares[lastSelectedSquare[0]][y] === symbol){
          symbolCounter++;
        }else{
          console.log("not included");
          break;
        }
      }
      console.log(symbolCounter);
    }

    horizontalChecker();

  }

  // winConditonChecker(lastCS,3,"x");

  export {winConditonChecker};