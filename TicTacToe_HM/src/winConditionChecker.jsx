


let squares = [
    ["x","x","p",],
    ["x",1,2],
    ["x",1,2],
    
  ];

  

 // let selectedSquares = [squares[0][0],squares[0][1],squares[0][2]];

  //console.log(squares);




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
      console.log("symbolCounter after horizontal check " + symbolCounter);
    }

  //  horizontalChecker();

    function verticalChecker(){
      console.log(symbol);
      for(let i = lastSelectedSquare[0]; i < lastSelectedSquare[0] + squaresToWin; i++){
        console.log("ran down" + " " + i);
        if(squares[i] && squares[i][lastSelectedSquare[1]] && squares[i][lastSelectedSquare[1]] === symbol){
          symbolCounter++;
          console.log(squares[i][lastSelectedSquare[1]] + "squares actual");
        }else{
          console.log("not included");
          break;
        }
      }
      for(let y = lastSelectedSquare[0] -1; y > lastSelectedSquare[0] - squaresToWin; y--){
        console.log("ran up" + " " + y);
        if(squares[y] && squares[y][lastSelectedSquare[1]] && squares[y][lastSelectedSquare[1]] === symbol){
          symbolCounter++;
        }else{
          console.log("not included");
          break;
        }
      }
      console.log("symbolCounter after vertical check " + symbolCounter);
    }
    verticalChecker();

   //console.log(squares[1][0]);

  }

  // winConditonChecker(lastCS,3,"x");

  export {winConditonChecker};