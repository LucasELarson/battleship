import { Gameboard } from "./gameboard";

class Player {
   constructor() {
      this.board = new Gameboard();
      this.turn = false;
   }

   isTurn(enemy) {
      this.turn = true;
      enemy.turn.set(false);
   }

   attack(player, coord1, coord2) {
      return player.board.receiveAttack(coord1, coord2);
   }

   randomPos() {
      const pos1 = Math.floor(Math.random() * 10);
      const pos2 = Math.floor(Math.random() * 10);
      return [pos1, pos2];
   }

   randomShip(length) {
      const pos1 = Math.floor(Math.random() * 10);
      const pos2 = Math.floor(Math.random() * 10);

      if (this.board.placeShip(pos1, pos2, length) === false) return false;
   }

   randomFleet() {
      // create 2 ships of length 1
      for (let i = 0; i < 2; ) {
         if (this.randomShip(1) === false) continue;
         i++;
      }
      // create 2 ships of length 2
      for (let i = 0; i < 2; ) {
         if (this.randomShip(2) === false) continue;
         i++;
      }
      // create 2 ships of length 3
      for (let i = 0; i < 2; ) {
         if (this.randomShip(3) === false) continue;
         i++;
      }
      // create 1 ship of length 4
      for (let i = 0; i < 2; ) {
         if (this.randomShip(4) === false) continue;
         i++;
      }
   }
}
export { Player };
