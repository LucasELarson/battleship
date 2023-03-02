class Gameboard {
   constructor(board, coords, hitCoords, missedCoords, allsunk) {
      this.board = [];
      this.shipCoords = [];
      this.hitCoords = [];
      this.missedCoords = [];
      this.allsunk = false;
      this.shipSet = new Set();
      this.hitSet = new Set();
      this.missSet = new Set();
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
      if (coord2 >= 9 || this.shipCoords.includes([coord1, coord2])) {
         console.log("ship exceeds bounds");
      } else {
         for (let i = 0; i < length; i++) {
            if (coord1 + i < 10) {
               this.shipCoords.push([coord1 + i, coord2]);
               this.shipSet.add(Number(`${coord1}${coord2}`));
            } else {
               this.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), length);
            }
         }
      }

      return this.shipCoords;
   }

   receiveAttack(coord1, coord2) {
      for (let i = 0; i < this.shipCoords.length; i++) {
         if (this.shipCoords[i][0] === coord1 && this.shipCoords[i][1] === coord2) {
            this.hitCoords.push([coord1, coord2]);
            this.hitSet.add(Number(`${coord1}${coord2}`));
            return this.hitCoords;
         }
      }
      this.missedCoords.push([coord1, coord2]);
      this.missSet.add(Number(`${coord1}${coord2}`));
      return this.missedCoords;
   }

   allSunk() {
      if (this.shipSet.size === this.hitSet.size) {
         console.log("ALL SHIPS SUNK");
         this.allsunk = true;
         alert("ALL SUNK");
         return this.allsunk;
      }
   }
}

export { Gameboard };
