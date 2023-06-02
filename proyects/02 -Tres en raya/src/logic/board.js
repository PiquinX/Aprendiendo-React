import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
        }
    }
}

export const checkEndGame = (boardToCheck) => {
    //  revisamos si no hay espacios vacios
    return boardToCheck.every(square => square != null)
}

export const resetStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export const saveGame = (board,turn)=> {
    window.localStorage.setItem('board',JSON.stringify(board));
    window.localStorage.setItem("turn",turn);
}