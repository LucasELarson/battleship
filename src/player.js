import { GameBoard } from "./gameboard";

function Player(name) {
   return {
      name,
      board: GameBoard(),
   };
}

export { Player };
