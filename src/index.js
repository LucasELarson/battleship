import { startGame, you, them } from "./game";
import "./STYLES/style.css";

startGame();
console.log(them.board.shipSet);
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
   const needToPlace = document.getElementById("toplace");
   needToPlace.innerHTML = ` Place ${them.board.shipSet.size - you.board.shipSet.size}`;

   // Start game //
   const start = document.getElementById("start");
   start.addEventListener("click", (e) => {
      if (you.board.shipSet.size < them.board.shipSet.size) {
         alert(`Please place ${them.board.shipSet.size - you.board.shipSet.size} more ship cells`);
      } else {
         isStart = !isStart;
         if (isStart === true) {
            start.textContent = "THE GAME HAS BEGUN";
         } else {
            start.textContent = "START";
         }
      }
   });

   // Place Ship //
   for (let i = 0; i < 100; i++) {
      square[i].addEventListener("click", (e) => {
         if (isStart === false) {
            if (square[i].getAttribute("id") === "clicked") {
               square[i].removeAttribute("id", "clicked");
               for (let p = 0; p <= you.board.shipSet.size; p++) {
                  if (Number(String(Array.from(you.board.shipSet)[p]).charAt(0)) === Number(square[i].firstElementChild.id[1]) && Number(String(Array.from(you.board.shipSet)[p]).charAt(1)) === Number(square[i].firstElementChild.id[2])) {
                     you.board.shipSet.delete(Number(String(`${Number(String(Array.from(you.board.shipSet)[p]).charAt(0))}${Number(String(Array.from(you.board.shipSet)[p]).charAt(1))}`)));
                  }
               }
               needToPlace.innerHTML = ` Place ${them.board.shipSet.size - you.board.shipSet.size}`;
            } else {
               if (you.board.shipSet.size >= them.board.shipSet.size) {
                  alert("Maximum number of ships placed");
               } else {
                  square[i].setAttribute("id", "clicked");
                  you.board.placeShip(Number(square[i].firstElementChild.id[1]), Number(square[i].firstElementChild.id[2]), 1);
                  console.log(you.board.shipSet);
                  if (you.board.shipSet.size === them.board.shipSet.size) {
                     needToPlace.innerHTML = `READY TO START`;
                  } else {
                     needToPlace.innerHTML = ` Place ${them.board.shipSet.size - you.board.shipSet.size}`;
                  }
               }
            }
         } else {
            console.log("games started, cant change your board now");
         }
      });
   }

   // Make the attack on the enemy //
   for (let i = 100; i < square.length; i++) {
      square[i].addEventListener("click", (e) => {
         if (isStart === true) {
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
         }
      });
   }
}, 1);
