function GameBoard() {
   const coordinates = [];
   const ships = [];
   const missedAttacks = [];
   const hitAttacks = [];
   const targets = [];
   function setCoords(ship, x, y, isHorizontal) {
      ship.coordinates.push([x, y]);
      for (let i = 1; i < ship.length; i++) {
         if (isHorizontal) {
            x = x + 1;
         } else {
            y = y + 1;
         }
         ship.coordinates.push([x, y]);
         coordinates.push([x, y]);
      }
      ships.push(ship);
   }
   function recieveAttack(coords) {
      let hitShip = false;
      for (let i = 0; i < ships.length; i++) {
         if (JSON.stringify(ships[i].coordinates).includes(JSON.stringify(coords))) {
            ships[i].hit();
            hitShip = true;
            hitAttacks.push(coords);
            targets.push([coords[0], coords[1] - 1], [coords[0], coords[1] + 1], [coords[0] + 1, coords[1]], [coords[0] - 1, coords[1]]);
         }
      }
      if (!hitShip) {
         missedAttacks.push(coords);
         return false;
      }
   }
   function shipsSunk(){
      if
   }
}

export { GameBoard };
