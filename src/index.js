import { startGame, you, them } from "./game";

startGame();
const prevSet = new Set();
let isStart = false;
// const previous = [];

// Bot hits a random spot //

function aiPlay() {
   // console.log(previous);
   let placeHit = [];
   placeHit = them.randomPos();
   const square = document.querySelectorAll("td");
   const hitInt = Number(`${placeHit[0]}${placeHit[1]}`);
   for (let i = 0; i < prevSet.size; i++) {
      if (Array.from(prevSet)[i] === hitInt) {
         console.log("that spot has been hit already");
         setTimeout(() => {
            aiPlay();
         }, 50);
      }
   }
   prevSet.add(Number(`${placeHit[0]}${placeHit[1]}`));
   them.attack(you, placeHit[0], placeHit[1]);
   for (let y = 0; y < you.board.shipCoords.length; y++) {
      if (you.board.shipCoords[y][0] === placeHit[0] && you.board.shipCoords[y][1] === placeHit[1]) {
         console.log("youve been hit");
         for (let z = 0; z < 100; z++) {
            if (Number(square[z].firstElementChild.id[1]) === placeHit[0] && Number(square[z].firstElementChild.id[2]) === placeHit[1]) {
               square[z].style.backgroundColor = "red";
               aiPlay();
               you.board.allSunk();
               console.log("YOU GOT HIT");
            }
         }
      } else {
         for (let z = 0; z < 100; z++) {
            if (Number(square[z].firstElementChild.id[1]) === you.board.missedCoords[you.board.missedCoords.length - 1][0] && Number(square[z].firstElementChild.id[2]) === you.board.missedCoords[you.board.missedCoords.length - 1][1]) {
               square[z].style.backgroundColor = "yellow";
               console.log("ENEMY MISS");
            }
         }
      }
   }
}

setTimeout(() => {
   const square = document.querySelectorAll("td");
   // Start game //
   const start = document.getElementById("start");
   start.addEventListener("click", (e) => {
      console.log("started");
      console.log(them.board.shipCoords);
      isStart = !isStart;
      console.log(isStart);
   });

   // Place Ship //
   for (let i = 0; i < 100; i++) {
      square[i].addEventListener("click", (e) => {
         if (isStart === false) {
            if (square[i].getAttribute("id") === "clicked") {
               square[i].removeAttribute("id", "clicked");
            } else {
               square[i].setAttribute("id", "clicked");
               you.board.placeShip(Number(square[i].firstElementChild.id[1]), Number(square[i].firstElementChild.id[2]), 1);
               console.log(you.board.shipCoords);
            }
         } else {
            console.log("games started, cant change your board now");
         }
      });
   }

   // Make the attack on the enemy //
   for (let i = 100; i < square.length; i++) {
      square[i].addEventListener("click", (e) => {
         console.log(them.board.shipCoords[0][0]);
         console.log(them.board.shipCoords[0][1]);
         for (let y = 0; y < them.board.shipCoords.length; y++) {
            if (them.board.shipCoords[y][0] === Number(square[i].firstElementChild.id[1]) && them.board.shipCoords[y][1] === Number(square[i].firstElementChild.id[2])) {
               square[i].style.backgroundColor = "green";
               console.log("a hit");
               you.attack(them, Number(square[i].firstElementChild.id[1]), Number(square[i].firstElementChild.id[2]));
               if (them.board.allSunk() === true) {
                  alert("YOU WIN!!!");
               } else {
                  return;
               }
            } else if (y === them.board.shipCoords.length - 1) {
               console.log("you missed");
               square[i].setAttribute("id", "missed");
               aiPlay();
            }
         }
      });
   }
}, 1);
