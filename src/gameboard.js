class Gameboard {
   constructor(board, coords, hitCoords, missedCoords, allsunk) {
      this.board = [];
      this.shipCoords = [];
      this.hitCoords = [];
      this.missedCoords = [];
      this.allsunk = false;
   }

   init() {
      for (let i = 0; i < 10; i++) {
         this.board[i] = [];
         for (let j = 0; j < 10; j++) {
            this.board[i].push(false);
         }
      }
      return this.board;
   }

   placeShip(coord1, coord2, length) {
      if (coord2 + length >= 10) {
         console.log("ship exceeds bounds");
      } else {
         for (let i = 0; i < length; i++) {
            this.shipCoords.push([coord1, coord2 + i]);
         }
      }
      return this.shipCoords;
   }

   receiveAttack(coord1, coord2) {
      for (let i = 0; i < this.shipCoords.length; i++) {
         if (this.shipCoords[i].includes(coord1) && this.shipCoords[i].includes(coord2)) {
            this.hitCoords.push([coord1, coord2]);
            this.allSunk();
            return this.hitCoords;
         }
      }
      this.missedCoords.push([coord1, coord2]);
      return this.missedCoords;
   }

   allSunk() {
      if (this.shipCoords.length === this.hitCoords.length) {
         console.log("ALL SHIPS SUNK");
         this.allsunk = true;
         return this.allsunk;
      }
   }
}

module.exports = Gameboard;
