import { startGame, you, them } from "./game";

startGame();

const previous = [];

function aiPlay() {
   const attack = them.randomPos();
   for (let i = 0; i < previous.length; i++) {
      if (previous[i][0] === attack[0] && previous[i][1] === attack[1]) {
         console.log("exists");
         aiPlay();
      }
   }
   previous.push(attack);
   them.attack(you, attack[0], attack[1]);
}

you.board.placeShip(1, 2, 3);
you.board.placeShip(4, 1, 6);
console.log(you.board.shipCoords);
aiPlay();
aiPlay();

console.log(you.board.missedCoords);
console.log(you.board.hitCoords);
