import { Player } from "./player";
let you;
let them;

function startGame() {
   you = new Player();
   them = new Player();
   you.board.init();
   them.board.init();
   them.randomFleet();
}

export { startGame, you, them };
