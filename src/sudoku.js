
export function checkRow(sudokuBoard) {
  var counter = 0;
  for ( var j = 0; j < sudokuBoard.length; j++ )
  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum = sudokuBoard[j].reduce(reducer);
    if(sum === 45)
    {
      counter += 1;
    } else
    {
      counter += 0;
    }
  }
  if(counter===9){
    return true;
  }
  else {
    return false;
  }

}

export function checkColumn(sudokuBoard){
  var counter = 0;
  for(var i=0; i<sudokuBoard.length; i++)
  {
    var sum = 0;
    for(var j=0; j<sudokuBoard.length; j++)
    {
      sum += sudokuBoard[i][j];
    }
    if(sum === 45)
    {
      counter += 1;
    }
    else
    {
      counter += 0;
    }

  }
  if(counter === 9){
    return true;
  } else {
    return false;
  }
}

export function checkBox(sudokuBoard)
{
  var counter = 0;
  for(var j=0; j<sudokuBoard.length; j+=3)
  {
    for(var i=0; i<sudokuBoard.length; i+=3)
    {
      var tempArray = [
        sudokuBoard[j][i], sudokuBoard[j][i+1], sudokuBoard[j][i+2], sudokuBoard[j+1][i], sudokuBoard[j+1][i+1], sudokuBoard[j+1][i+2], sudokuBoard[j+2][i], sudokuBoard[j+2][i+1], sudokuBoard[j+2][i+2],
      ];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      var sum = tempArray.reduce(reducer);
      if(sum === 45)
      {
        counter += 1;
      }else {
        counter +=0;
      }
    }
  }
  if(counter === 9){
    return true;
  }else {
    return false;
  }
}
