import { useState } from "react";
import "../css/Tablero.css";

const Tablero = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null)); // celdas vacías 
    const [isNext, setIsNext] = useState(true); //controla X o O
    console.log(board);
    const handleClick = (index) => {
        const newBoard = board.slice(); //Copia el tablero actual
        if (newBoard[index]) return; //si la celda está ocupada no hace nada

        newBoard[index] = isNext ? "X" : "O";
        setBoard(newBoard); //Actualiza estado del tablero
        setIsNext(!isNext) // cambia de turno entre X y O
    }

    const resetBoard = () => {
        setBoard(Array(9).fill(null))
    }

    return <>
        <ul className="tablero">
            {board.map((value, index) => (
                <li key={index} onClick={() => handleClick(index)} className="cell">
                    {value}
                </li>
            ))}
        </ul>
        <button onClick={resetBoard}>RESET</button>
    </>
};
export default Tablero;
