import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame, resetStorage, saveGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/board'
import { useEffect } from 'react/cjs/react.production.min'

function App() {
	// el use state un puede estar nunca en un if(deben estar en el cuerpo).
	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board') // leer del local storage es LENTO y sincrono, por eso lo llamamos desde aca para que solo se ejecute cuando cargamos la pagina.
		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ?? TURNS.X
	})

	const [winner, setWinner] = useState(null) // null === no gano termino el match, y false === empate

	const updateBoard = index => {
		//  no actializamos si ya tiene algo
		if (board[index] || winner) return

		//  actualizamos el tablero
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newWinner = checkWinner(newBoard)

		if (newWinner) {
			confetti()
			setWinner(newWinner)
		} else if (checkEndGame(newBoard)) {
			setWinner(false)
		}

		// cambia el turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)

		resetStorage()
	}

	useEffect(() => {
		saveGame(board, turn)
	}, [turn, board])

	return (
		<main className='board'>
			<h1>Tres en raya</h1>
			<button onClick={resetGame}>Reset Game</button>

			<Board board={board} updateBoard={updateBoard} />

			<section className='turn'>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>

				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>
			<WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	)
}

export default App
