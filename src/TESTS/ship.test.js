/* eslint-disable no-undef */
const Ship = require("../ship");

test("has length property", () => {
   const ship1 = new Ship(4, 0, false);
   expect(ship1.length).toBe(4);
});

test("can be hit", () => {
   const ship1 = new Ship(4, 0, false);
   ship1.hit();
   expect(ship1.hits).toBe(1);
});

test("can be hit 2 times", () => {
   const ship1 = new Ship(4, 0, false);
   ship1.hit();
   ship1.hit();
   expect(ship1.hits).toBe(2);
});

test("can be sunk", () => {
   const ship1 = new Ship(4, 0, false);
   ship1.hit();
   ship1.hit();
   ship1.hit();
   ship1.hit();
   expect(ship1.sunk).toBe(true);
});
