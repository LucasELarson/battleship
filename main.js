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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGame\": () => (/* binding */ startGame),\n/* harmony export */   \"them\": () => (/* binding */ them),\n/* harmony export */   \"you\": () => (/* binding */ you)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nvar you;\nvar them;\nfunction startGame() {\n  you = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n  them = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n  you.board.init();\n  them.board.init();\n  them.randomFleet();\n}\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(board, coords, hitCoords, missedCoords, allsunk) {\n    _classCallCheck(this, Gameboard);\n    this.board = [];\n    this.shipCoords = [];\n    this.hitCoords = [];\n    this.missedCoords = [];\n    this.allsunk = false;\n    this.shipSet = new Set();\n    this.hitSet = new Set();\n    this.missSet = new Set();\n  }\n  _createClass(Gameboard, [{\n    key: \"init\",\n    value: function init() {\n      for (var i = 0; i < 10; i++) {\n        this.board[i] = [];\n        for (var j = 0; j < 10; j++) {\n          this.board[i].push(false);\n        }\n      }\n      return this.board;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(coord1, coord2, length) {\n      if (coord2 >= 10 || this.shipCoords.includes([coord1, coord2])) {\n        console.log(\"ship exceeds bounds\");\n      } else {\n        for (var i = 0; i < length; i++) {\n          if (coord1 + i < 10) {\n            this.shipCoords.push([coord1 + i, coord2]);\n            this.shipSet.add(Number(\"\".concat(coord1).concat(coord2)));\n          } else {\n            this.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), length);\n          }\n        }\n      }\n      return this.shipCoords;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coord1, coord2) {\n      for (var i = 0; i < this.shipCoords.length; i++) {\n        if (this.shipCoords[i][0] === coord1 && this.shipCoords[i][1] === coord2) {\n          this.hitCoords.push([coord1, coord2]);\n          this.hitSet.add(Number(\"\".concat(coord1).concat(coord2)));\n          return this.hitCoords;\n        }\n      }\n      this.missedCoords.push([coord1, coord2]);\n      this.missSet.add(Number(\"\".concat(coord1).concat(coord2)));\n      return this.missedCoords;\n    }\n  }, {\n    key: \"allSunk\",\n    value: function allSunk() {\n      if (this.shipSet.size === this.hitSet.size) {\n        console.log(\"ALL SHIPS SUNK\");\n        this.allsunk = true;\n        return this.allsunk;\n      }\n    }\n  }]);\n  return Gameboard;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n(0,_game__WEBPACK_IMPORTED_MODULE_0__.startGame)();\nconsole.log(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet);\nvar prevSet = new Set();\nvar isStart = false;\n// const previous = [];\n\n// Bot hits a random spot //\n\nfunction aiPlay() {\n  // console.log(previous);\n  var placeHit = [];\n  placeHit = _game__WEBPACK_IMPORTED_MODULE_0__.them.randomPos();\n  var square = document.querySelectorAll(\"td\");\n  var hitInt = Number(\"\".concat(placeHit[0]).concat(placeHit[1]));\n  for (var i = 0; i < prevSet.size; i++) {\n    if (Array.from(prevSet)[i] === hitInt) {\n      console.log(\"that spot has been hit already\");\n      setTimeout(function () {\n        aiPlay();\n      }, 50);\n    }\n  }\n  prevSet.add(Number(\"\".concat(placeHit[0]).concat(placeHit[1])));\n  _game__WEBPACK_IMPORTED_MODULE_0__.them.attack(_game__WEBPACK_IMPORTED_MODULE_0__.you, placeHit[0], placeHit[1]);\n  for (var y = 0; y < _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipCoords.length; y++) {\n    if (_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipCoords[y][0] === placeHit[0] && _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipCoords[y][1] === placeHit[1]) {\n      console.log(\"youve been hit\");\n      for (var z = 0; z < 100; z++) {\n        if (Number(square[z].firstElementChild.id[1]) === placeHit[0] && Number(square[z].firstElementChild.id[2]) === placeHit[1]) {\n          square[z].style.backgroundColor = \"red\";\n          aiPlay();\n          _game__WEBPACK_IMPORTED_MODULE_0__.you.board.allSunk();\n          console.log(\"YOU GOT HIT\");\n        }\n      }\n    } else {\n      for (var _z = 0; _z < 100; _z++) {\n        if (Number(square[_z].firstElementChild.id[1]) === _game__WEBPACK_IMPORTED_MODULE_0__.you.board.missedCoords[_game__WEBPACK_IMPORTED_MODULE_0__.you.board.missedCoords.length - 1][0] && Number(square[_z].firstElementChild.id[2]) === _game__WEBPACK_IMPORTED_MODULE_0__.you.board.missedCoords[_game__WEBPACK_IMPORTED_MODULE_0__.you.board.missedCoords.length - 1][1]) {\n          square[_z].style.backgroundColor = \"yellow\";\n          console.log(\"ENEMY MISS\");\n        }\n      }\n    }\n  }\n}\nsetTimeout(function () {\n  var square = document.querySelectorAll(\"td\");\n  var enemyPlaced = document.getElementById(\"enemyplaced\");\n  var needToPlace = document.getElementById(\"toplace\");\n  enemyPlaced.innerHTML = \"The enemy has placed \".concat(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size, \" ship cells!\");\n  needToPlace.innerHTML = \"You need to place \".concat(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size - _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size, \" more ships\");\n  // Start game //\n  var start = document.getElementById(\"start\");\n  start.addEventListener(\"click\", function (e) {\n    if (_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size < _game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size) {\n      alert(\"Please place \".concat(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size - _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size, \" more ship cells\"));\n    } else {\n      isStart = !isStart;\n      if (isStart === true) {\n        start.textContent = \"THE GAME HAS BEGUN\";\n      } else {\n        start.textContent = \"START\";\n      }\n    }\n  });\n\n  // Place Ship //\n  var _loop = function _loop(i) {\n    square[i].addEventListener(\"click\", function (e) {\n      if (isStart === false) {\n        if (square[i].getAttribute(\"id\") === \"clicked\") {\n          square[i].removeAttribute(\"id\", \"clicked\");\n          for (var p = 0; p <= _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size; p++) {\n            if (Number(String(Array.from(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet)[p]).charAt(0)) === Number(square[i].firstElementChild.id[1]) && Number(String(Array.from(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet)[p]).charAt(1)) === Number(square[i].firstElementChild.id[2])) {\n              _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet[\"delete\"](Number(String(\"\".concat(Number(String(Array.from(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet)[p]).charAt(0))).concat(Number(String(Array.from(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet)[p]).charAt(1))))));\n            }\n          }\n          needToPlace.innerHTML = \"You need to place \".concat(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size - _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size, \" more ships\");\n        } else {\n          if (_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size >= _game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size) {\n            alert(\"Maximum number of ships placed\");\n          } else {\n            square[i].setAttribute(\"id\", \"clicked\");\n            _game__WEBPACK_IMPORTED_MODULE_0__.you.board.placeShip(Number(square[i].firstElementChild.id[1]), Number(square[i].firstElementChild.id[2]), 1);\n            console.log(_game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet);\n            needToPlace.innerHTML = \"You need to place \".concat(_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipSet.size - _game__WEBPACK_IMPORTED_MODULE_0__.you.board.shipSet.size, \" more ships\");\n          }\n        }\n      } else {\n        console.log(\"games started, cant change your board now\");\n      }\n    });\n  };\n  for (var i = 0; i < 100; i++) {\n    _loop(i);\n  }\n\n  // Make the attack on the enemy //\n  var _loop2 = function _loop2(_i) {\n    square[_i].addEventListener(\"click\", function (e) {\n      if (isStart === true) {\n        for (var y = 0; y < _game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipCoords.length; y++) {\n          if (_game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipCoords[y][0] === Number(square[_i].firstElementChild.id[1]) && _game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipCoords[y][1] === Number(square[_i].firstElementChild.id[2])) {\n            square[_i].style.backgroundColor = \"green\";\n            console.log(\"a hit\");\n            _game__WEBPACK_IMPORTED_MODULE_0__.you.attack(_game__WEBPACK_IMPORTED_MODULE_0__.them, Number(square[_i].firstElementChild.id[1]), Number(square[_i].firstElementChild.id[2]));\n            if (_game__WEBPACK_IMPORTED_MODULE_0__.them.board.allSunk() === true) {\n              alert(\"YOU WIN!!!\");\n            } else {\n              return;\n            }\n          } else if (y === _game__WEBPACK_IMPORTED_MODULE_0__.them.board.shipCoords.length - 1) {\n            console.log(\"you missed\");\n            square[_i].setAttribute(\"id\", \"missed\");\n            aiPlay();\n          }\n        }\n      }\n    });\n  };\n  for (var _i = 100; _i < square.length; _i++) {\n    _loop2(_i);\n  }\n}, 1);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.turn = false;\n  }\n  _createClass(Player, [{\n    key: \"isTurn\",\n    value: function isTurn(enemy) {\n      this.turn = true;\n      enemy.turn.set(false);\n    }\n  }, {\n    key: \"attack\",\n    value: function attack(player, coord1, coord2) {\n      return player.board.receiveAttack(coord1, coord2);\n    }\n  }, {\n    key: \"randomPos\",\n    value: function randomPos() {\n      var pos1 = Math.floor(Math.random() * 10);\n      var pos2 = Math.floor(Math.random() * 10);\n      return [pos1, pos2];\n    }\n  }, {\n    key: \"randomShip\",\n    value: function randomShip(length) {\n      var pos1 = Math.floor(Math.random() * 10);\n      var pos2 = Math.floor(Math.random() * 10);\n      if (this.board.placeShip(pos1, pos2, length) === false) return false;\n    }\n  }, {\n    key: \"randomFleet\",\n    value: function randomFleet() {\n      // create 2 ships of length 1\n      for (var i = 0; i < 2;) {\n        if (this.randomShip(1) === false) continue;\n        i++;\n      }\n      // create 2 ships of length 2\n      for (var _i = 0; _i < 2;) {\n        if (this.randomShip(2) === false) continue;\n        _i++;\n      }\n      // create 2 ships of length 3\n      for (var _i2 = 0; _i2 < 2;) {\n        if (this.randomShip(3) === false) continue;\n        _i2++;\n      }\n      // create 1 ship of length 4\n      for (var _i3 = 0; _i3 < 2;) {\n        if (this.randomShip(4) === false) continue;\n        _i3++;\n      }\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#container{\\n   display: grid;\\n   height: 100vh;\\n   width: 100vw;\\n   background-color: rgb(177, 177, 177);\\n   grid-template-rows: 1fr 2fr;\\n}\\nbody{\\n   display: grid;\\n   margin: 0px;\\n   border: 0px;\\n   overflow: hidden;\\n}\\n\\n#header {\\n   display: grid;\\n   width: 100vw;\\n   background-color: hsl(0, 0%, 27%);\\n   align-items: center;\\n   align-content: center;\\n   grid-template-columns: 1fr 1fr;\\n}\\n\\n\\n#startgame {\\n   grid-column: 2;\\n   grid-row: 1/4;\\n   display: grid;\\n   align-items: center;\\n   justify-content: center;\\n}\\n\\n#start {\\n   height: 6vh;\\n   width: 10vw;\\n   border-style: solid;\\n   border-radius: 0px;\\n   border-color: green;\\n   background-color: black;\\n   color: white;\\n}\\n\\n#start:hover{\\n   background-color: rgb(45, 45, 45);\\n}\\n\\n#headertext{\\n   grid-row: 2;\\n   padding-left: 2.5vw;\\n}\\n\\n#boards {\\n   display: grid;\\n   grid-template-columns: 1fr 1fr;\\n   align-items: center;\\n   justify-items: center;\\n}\\n\\n.board-container {\\n   display: grid;\\n   height: 45vw;\\n   width: 45vw;\\n   margin: 5%;\\n   background-color: green;\\n}\\n\\n.board-square{\\n   background-color: black;\\n}\\n\\n.board-square:hover{\\n   background-color: rgb(45,45,45);\\n}\\n\\n#clicked{\\n   background-color: blue;\\n}\\n\\n#hit{\\n   background-color: red;\\n}\\n\\n#missed{\\n   background-color: yellow;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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