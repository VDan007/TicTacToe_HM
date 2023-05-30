


let squares = [
    ["x",0,0],
    [0,"x",2],
    [0,1,"x"],
  ];

  

 // let selectedSquares = [squares[0][0],squares[0][1],squares[0][2]];
 // let selectedSquares = [squares[0][0],squares[0][1],squares[0][2]];





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
      for(let i = lastSelectedSquare[0]; i < SelectedSqulasare[0] + squaresToWin; i++){
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
    //verticalChecker();

   //console.log(squares[1][0]);

   function diagonal_fromLeftDownToRightUp_Checker(){       ///     x
                                                            ///   x
                                                            /// x

       for(let i = lastSelectedSquare[0]; i < lastSelectedSquare[0] + squaresToWin; i++){
        if(squares[i] && squares[i][lastSelectedSquare[1] + lastSelectedSquare[0] -i ] && squares[i][lastSelectedSquare[1] + lastSelectedSquare[0] -i ]===symbol){
          symbolCounter++;
        }else{
          console.log("not included");
          break;
        }
       }
       
       

       for(let i = lastSelectedSquare[0] -1; i > lastSelectedSquare[0] - squaresToWin; i--){
        if(squares[i] && squares[i][lastSelectedSquare[1] + Math.abs(lastSelectedSquare[0] -i) ] && squares[i][lastSelectedSquare[1] + Math.abs(lastSelectedSquare[0] -i) ] ===symbol){
          symbolCounter++;
        }else{
          console.log('not included');
          break;
        }
       }
        console.log( symbolCounter);
       
    }

    function diagonal_fromRightDownToLeftUp_Checker(){      /// x     
                                                            ///   x
                                                            ///     x
      for(let i = lastSelectedSquare[0]; i < lastSelectedSquare[0] + squaresToWin; i++){

        if(squares[i] && squares[i][lastSelectedSquare[1] + Math.abs(lastSelectedSquare[0] -i) ] && squares[i][lastSelectedSquare[1] + Math.abs(lastSelectedSquare[0] -i )]===symbol){

          symbolCounter++;
        }else{
          console.log("not included");
          break;
        }
       }

       console.log(symbolCounter + " lef-to right");
       

       for(let i = lastSelectedSquare[0] -1 ; i > lastSelectedSquare[0] - squaresToWin; i--){
        

        if(squares[i] && squares[i][lastSelectedSquare[1] + i - lastSelectedSquare[0] ] && squares[i][lastSelectedSquare[1] + i - lastSelectedSquare[0]  ] ===symbol){
          symbolCounter++;
        }else{
          console.log('not included');
          break;
        }
       }
       console.log(symbolCounter + " right to left");
       console.log(symbolCounter);



    }

    diagonal_fromRightDownToLeftUp_Checker();

  }

  // winConditonChecker(lastCS,3,"x");

  export {winConditonChecker};