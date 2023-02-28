/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGame\": () => (/* binding */ startGame),\n/* harmony export */   \"them\": () => (/* binding */ them),\n/* harmony export */   \"you\": () => (/* binding */ you)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nvar you;\nvar them;\nfunction startGame() {\n  you = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n  them = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n  you.board.init();\n  them.board.init();\n  them.randomFleet();\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(board, coords, hitCoords, missedCoords, allsunk) {\n    _classCallCheck(this, Gameboard);\n    this.board = [];\n    this.shipCoords = [];\n    this.hitCoords = [];\n    this.missedCoords = [];\n    this.allsunk = false;\n  }\n  _createClass(Gameboard, [{\n    key: \"init\",\n    value: function init() {\n      for (var i = 0; i < 10; i++) {\n        this.board[i] = [];\n        for (var j = 0; j < 10; j++) {\n          this.board[i].push(false);\n        }\n      }\n      return this.board;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(coord1, coord2, length) {\n      if (coord2 + length >= 10 || this.shipCoords.includes([coord1, coord2])) {\n        console.log(\"ship exceeds bounds\");\n      } else {\n        for (var i = 0; i < length; i++) {\n          this.shipCoords.push([coord1, coord2 + i]);\n        }\n      }\n      return this.shipCoords;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coord1, coord2) {\n      for (var i = 0; i < this.shipCoords.length; i++) {\n        if (this.shipCoords[i][0] === coord1 && this.shipCoords[i][1] === coord2) {\n          this.hitCoords.push([coord1, coord2]);\n          this.allSunk();\n          return this.hitCoords;\n        }\n      }\n      this.missedCoords.push([coord1, coord2]);\n      return this.missedCoords;\n    }\n  }, {\n    key: \"allSunk\",\n    value: function allSunk() {\n      if (this.shipCoords.length === this.hitCoords.length) {\n        console.log(\"ALL SHIPS SUNK\");\n        this.allsunk = true;\n        return this.allsunk;\n      }\n    }\n  }]);\n  return Gameboard;\n}();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n(0,_game__WEBPACK_IMPORTED_MODULE_0__.startGame)();\nvar previous = [];\nfunction aiPlay() {\n  var attack = _game__WEBPACK_IMPORTED_MODULE_0__.them.randomPos();\n  for (var i = 0; i < previous.length; i++) {\n    if (previous[i][0] === attack[0] && previous[i][1] === attack[1]) {\n      console.log(\"exists\");\n      aiPlay();\n    }\n  }\n  previous.push(attack);\n  _game__WEBPACK_IMPORTED_MODULE_0__.them.attack(_game__WEBPACK_IMPORTED_MODULE_0__.you, attack[0], attack[1]);\n}\n_game__WEBPACK_IMPORTED_MODULE_0__.you.board.placeShip(1, 2, 3);\n_game__WEBPACK_IMPORTED_MODULE_0__.you.board.placeShip(4, 1, 6);\nconsole.log(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipCoords);\naiPlay();\naiPlay();\nconsole.log(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.missedCoords);\nconsole.log(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.hitCoords);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.turn = false;\n  }\n  _createClass(Player, [{\n    key: \"isTurn\",\n    value: function isTurn(enemy) {\n      this.turn = true;\n      enemy.turn.set(false);\n    }\n  }, {\n    key: \"attack\",\n    value: function attack(player, coord1, coord2) {\n      return player.board.receiveAttack(coord1, coord2);\n    }\n  }, {\n    key: \"randomPos\",\n    value: function randomPos() {\n      var pos1 = Math.floor(Math.random() * 10);\n      var pos2 = Math.floor(Math.random() * 10);\n      return [pos1, pos2];\n    }\n  }, {\n    key: \"randomShip\",\n    value: function randomShip(length) {\n      var pos1 = Math.floor(Math.random() * 10);\n      var pos2 = Math.floor(Math.random() * 10);\n      if (this.board.placeShip(pos1, pos2, length) === false) return false;\n    }\n  }, {\n    key: \"randomFleet\",\n    value: function randomFleet() {\n      // create 2 ships of length 1\n      for (var i = 0; i < 2;) {\n        if (this.randomShip(1) === false) continue;\n        i++;\n      }\n      // create 2 ships of length 2\n      for (var _i = 0; _i < 2;) {\n        if (this.randomShip(2) === false) continue;\n        _i++;\n      }\n      // create 2 ships of length 3\n      for (var _i2 = 0; _i2 < 2;) {\n        if (this.randomShip(3) === false) continue;\n        _i2++;\n      }\n      // create 1 ship of length 4\n      for (var _i3 = 0; _i3 < 2;) {\n        if (this.randomShip(4) === false) continue;\n        _i3++;\n      }\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;