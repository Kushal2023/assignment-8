import { useState, useEffect } from "react";
import "./App.css";
import Square from "./components/Square";
import winPattern from "./util.js";

function App() {
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  let [player, setPlayer] = useState("O");
  let [result, setResult] = useState({ winner: "None", state: "None" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "None") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const changePlayer = (index) => {
    setBoard((prevBoard) =>
      prevBoard.map((val, idx) => {
        if (idx === index && val === "") {
          return player;
        } else {
          return val;
        }
      })
    );
  };

  const checkWin = () => {
    winPattern.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      pattern.forEach((index) => {
        if (firstPlayer !== board[index]) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  console.log(result);

  return (
    <div className="App">
      <div className="game-container">
        <div className="row-1">
          <Square value={board[0]} changePlayer={() => changePlayer(0)} />
          <Square value={board[1]} changePlayer={() => changePlayer(1)} />
          <Square value={board[2]} changePlayer={() => changePlayer(2)} />
        </div>
        <div className="row-2">
          <Square value={board[3]} changePlayer={() => changePlayer(3)} />
          <Square value={board[4]} changePlayer={() => changePlayer(4)} />
          <Square value={board[5]} changePlayer={() => changePlayer(5)} />
        </div>
        <div className="row-3">
          <Square value={board[6]} changePlayer={() => changePlayer(6)} />
          <Square value={board[7]} changePlayer={() => changePlayer(7)} />
          <Square value={board[8]} changePlayer={() => changePlayer(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
