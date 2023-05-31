import { useState } from 'react';
import confetti from "canvas-confetti" ; 
import { Square } from './components/square';


const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null) // null === no gano termino el match, y false === empate

  const checkWinner = (boardToCheck)=> {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
  }

  const checkEndGame = (boardToCheck)=> {
    //revisamos si no hay espacios vacios
    return boardToCheck.every(square => square != null)
  }

  const updateBoard = (index)=> {
    //no actializamos si ya tiene algo
    if(board[index] || winner) return

    //actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard)

    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    // cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O :TURNS.X;
    setTurn(newTurn);
  }

  const resetGame = ()=> {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
                <h2>
                  {
                  winner === false
                  ? 'Empate'
                  : 'Gano : '
                  }
                </h2>

                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Reset Game</button>
                </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App