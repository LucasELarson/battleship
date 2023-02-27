/* eslint-disable no-undef */
const Gameboard = require("../gameboard");

test("creates gameboard of 10x10", () => {
   const g = new Gameboard();
   g.init();
   expect(g.board.length && g.board[0].length).toBe(10);
});

test("places ship and checks to see if a coord exist", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   expect(g.shipCoords[0]).toEqual([2, 2]);
});

test("places ship and checks to see if all coords exist", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   expect(g.shipCoords).toEqual([
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
   ]);
});

test("hits a ship correctly", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   g.receiveAttack(2, 5);
   expect(g.hitCoords).toEqual([[2, 5]]);
});

test("misses a ship correctly", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   g.receiveAttack(4, 6);
   expect(g.missedCoords).toEqual([[4, 6]]);
});

test("sinks a ship correctly", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   g.receiveAttack(2, 3);
   g.receiveAttack(2, 4);
   g.receiveAttack(2, 5);
   g.receiveAttack(2, 2);
   expect(g.shipCoords.length).toEqual(g.hitCoords.length);
});

test("sinks a ship correctly with misses", () => {
   const g = new Gameboard();
   g.init();
   g.placeShip(2, 2, 4);
   g.receiveAttack(2, 3);
   g.receiveAttack(7, 7);
   g.receiveAttack(2, 4);
   g.receiveAttack(2, 5);
   g.receiveAttack(2, 2);
   g.receiveAttack(6, 6);
   expect(g.shipCoords.length).toEqual(g.hitCoords.length);
});
