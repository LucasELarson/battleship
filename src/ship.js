class Ship {
   constructor(length, hits, sunk) {
      this.length = length;
      this.hits = hits;
      this.sunk = sunk;
   }

   hit() {
      if (!this.sunk) {
         this.hits++;
         console.log(this.hits);
         this.isSunk();
         return this.hits;
      } else {
         console.log("this this is already sunk, no sense shooting again");
      }
   }

   isSunk() {
      if (this.hits >= this.length) {
         this.sunk = true;
      }
      console.log(this.sunk);
      return this.sunk;
   }
}

module.exports = Ship;
