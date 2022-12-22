import React from 'react';
import { useState } from "react";
import * as ReactDOM from 'react-dom';
import './GamePlay.css'
import image from '../../assets/images/back.png';


const GamePlay = () => {

  function Square({ onClick, value }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
  
  function Board () {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
  
    const handleClick = (i) => {
      if (calculateWinner(squares) || squares[i]) {
        return
      }
      
      squares[i] = isX ? 'X' : 'O';
      setSquares(squares)
      setIsX(!isX)
    }
  
    const winner = calculateWinner(squares)
    let status
    
    if (winner) {
      status = `Winner:  ${winner}`;
    } else {
      status = (isX ? 'Your move' : 'Their move');
    }
    
    const handleRestart = () => {
      setIsX(true)
      setSquares(Array(9).fill(null))
    }
  
    const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }
    
    return (
      <div className='flex justify-center mt-8'>
        <div>
        <a href='/newgame'><img className='w-8 md:ml-8' src={image} alt="" /></a>
        <h1 className='md:ml-8 mt-2 text-3xl font-bold'>Game with Tanmay</h1>
         <p className='md:ml-8 mt-2 text-sm'>Your piece</p>
         <p className='icon md:ml-14 ml-3 mt-2 text-5xl text-[#2C8DFF] font-bold'>X</p>
      
      <div className='md:w-96 w-full md:h-[600px] h-fit flex justify-center'>
      <div className="board">
      <p className='bg-[#FFE79E] h-14 w-full mt-4 text-center py-5 font-medium'> {status}</p>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg" onClick={handleRestart}>Restart Game!</button>
      </div>
      </div>
      </div>
      </div>
    )
  }
  
  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
};

export default GamePlay;