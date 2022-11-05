/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
const app = document.querySelector(".app");

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (window.application.screens[screenName] === undefined) {
            return;
        }

        app.textContent = "";

        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, content, className) {
        if (window.application.blocks[blockName] === undefined) {
            console.log("Такой блок не существует");
        }

        window.application.blocks[blockName](container, content, className);
    },
    time: "00.00",

    level: null,

    gameStatus: null,

    gameCards: [],

    choiceCards: null,
};

window.addEventListener("load", () => {
    window.application.renderScreen("choose-level");
});


/***/ }),

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderActiveBtnBlock": () => (/* binding */ renderActiveBtnBlock),
/* harmony export */   "renderCardBlock": () => (/* binding */ renderCardBlock),
/* harmony export */   "renderCardsBlock": () => (/* binding */ renderCardsBlock),
/* harmony export */   "renderGameBarBlock": () => (/* binding */ renderGameBarBlock),
/* harmony export */   "renderHeaderBlock": () => (/* binding */ renderHeaderBlock),
/* harmony export */   "renderChooseBtnBlock": () => (/* binding */ renderChooseBtnBlock),
/* harmony export */   "renderChooseLevelBlock": () => (/* binding */ renderChooseLevelBlock),
/* harmony export */   "renderTimerBlock": () => (/* binding */ renderTimerBlock)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");


const allCards = [
    "static/cards/sa.png",
    "static/cards/sk.png",
    "static/cards/sq.png",
    "static/cards/sj.png",
    "static/cards/s10.png",
    "static/cards/s9.png",
    "static/cards/s8.png",
    "static/cards/s7.png",
    "static/cards/s6.png",
    "static/cards/ha.png",
    "static/cards/hk.png",
    "static/cards/hq.png",
    "static/cards/hj.png",
    "static/cards/h10.png",
    "static/cards/h9.png",
    "static/cards/h8.png",
    "static/cards/h7.png",
    "static/cards/h6.png",
    "static/cards/da.png",
    "static/cards/dk.png",
    "static/cards/dq.png",
    "static/cards/dj.png",
    "static/cards/d10.png",
    "static/cards/d9.png",
    "static/cards/d8.png",
    "static/cards/d7.png",
    "static/cards/d6.png",
    "static/cards/ca.png",
    "static/cards/ck.png",
    "static/cards/cq.png",
    "static/cards/cj.png",
    "static/cards/c10.png",
    "static/cards/c9.png",
    "static/cards/c8.png",
    "static/cards/c7.png",
    "static/cards/c6.png",
];

const renderHeaderBlock = (container, content, className) => {
    const header = document.createElement("h1");
    header.classList.add(className);
    header.textContent = content;

    container.appendChild(header);
};

window.application.blocks["header"] = renderHeaderBlock;

const renderChooseLevelBlock = (container) => {
    const chooseLevel = document.createElement("div");
    chooseLevel.classList.add("level-popup__choose-level");

    window.application.renderBlock("choose-btn", chooseLevel, 1);
    window.application.renderBlock("choose-btn", chooseLevel, 2);
    window.application.renderBlock("choose-btn", chooseLevel, 3);

    container.appendChild(chooseLevel);
};

window.application.blocks["choose-level"] = renderChooseLevelBlock;

const renderChooseBtnBlock = (container, content) => {
    const chooseBtn = document.createElement("button");
    chooseBtn.classList.add("level-popup__choose-btn");
    chooseBtn.textContent = content;

    chooseBtn.addEventListener("click", () => {
        window.application.level = content;

        const chooseButtons = container.getElementsByClassName(
            "level-popup__choose-btn"
        );

        for (let element of chooseButtons) {
            element.classList.remove("level-popup__choose-btn_active");
        }

        chooseBtn.classList.add("level-popup__choose-btn_active");
    });

    container.appendChild(chooseBtn);
};

window.application.blocks["choose-btn"] = renderChooseBtnBlock;

const renderActiveBtnBlock = (container, content, className) => {
    const activeBtn = document.createElement("button");
    activeBtn.classList.add(className);
    activeBtn.textContent = content;

    activeBtn.addEventListener("click", () => {
        if (content === "Старт") {
            switch (window.application.level) {
                case null: {
                    const error = document.createElement("div");
                    _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(error);
                    error.textContent = "Сложность не выбрана";
                    error.classList.add("error");
                    setTimeout(() => {
                        _app__WEBPACK_IMPORTED_MODULE_0__.app.removeChild(error);
                    }, 1500);

                    break;
                }
                case 1: {
                    console.log("level 1");
                    window.application.level = 6;
                    window.application.renderScreen("game");
                    break;
                }
                case 2: {
                    console.log("level 2");
                    window.application.level = 12;
                    window.application.renderScreen("game");
                    break;
                }
                case 3: {
                    console.log("level 3");
                    window.application.level = 18;
                    window.application.renderScreen("game");
                    break;
                }
            }
        }
    });

    container.appendChild(activeBtn);
};

window.application.blocks["active-btn"] = renderActiveBtnBlock;

const renderGameBarBlock = (container) => {
    const gameBar = document.createElement("div");
    gameBar.classList.add("game-bar");

    window.application.renderBlock("timer", gameBar);

    window.application.renderBlock(
        "active-btn",
        gameBar,
        "Начать заново",
        "game-bar__restart-btn"
    );

    container.appendChild(gameBar);
};

window.application.blocks["game-bar"] = renderGameBarBlock;

const renderTimerBlock = (container) => {
    const timer = document.createElement("div");
    timer.classList.add("game-bar__timer");

    const timerDesc = document.createElement("div");
    timerDesc.classList.add("game-bar__timer-description");
    timer.appendChild(timerDesc);

    const min = document.createElement("p");
    min.textContent = "min";
    timerDesc.appendChild(min);

    const sec = document.createElement("p");
    sec.textContent = "sec";
    timerDesc.appendChild(sec);

    const time = document.createElement("p");
    time.classList.add("game-bar__timer-time");
    time.textContent = window.application.time;
    timer.appendChild(time);
    container.appendChild(timer);
};

window.application.blocks["timer"] = renderTimerBlock;

const renderCardsBlock = (container) => {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    let cardsId = 0;
    let cardsFront;

    const getRandCard = () => {
        let rand = Math.floor(Math.random() * allCards.length);
        window.application.gameCards.push(allCards[rand]);
        window.application.gameCards.push(allCards[rand]);
    };

    while (window.application.gameCards.length !== window.application.level) {
        getRandCard();
    }

    window.application.gameCards = window.application.gameCards.sort(
        () => Math.random() - 0.5
    );

    while (cardsId !== window.application.level) {
        cardsFront = window.application.gameCards[cardsId];
        window.application.renderBlock("card", cards, cardsId, cardsFront);
        cardsId++;
    }

    cards.addEventListener("click", (card) => {
        if (card.target.id === "") {
            return;
        }

        card.target.src = window.application.gameCards[card.target.id];

        switch (window.application.choiceCards) {
            case null:
                window.application.choiceCards = card.target.src;
                break;

            case card.target.src:
                alert("You win!");
                window.application.choiceCards = null;
                break;

            default:
                alert("You lose!");
                break;
        }
    });

    container.appendChild(cards);
};

window.application.blocks["cards"] = renderCardsBlock;

const renderCardBlock = (container, cardsId, cardsFront) => {
    const card = document.createElement("img");
    card.src = cardsFront;
    card.classList.add("card");
    card.id = cardsId;

    container.appendChild(card);
};

window.application.blocks["card"] = renderCardBlock;


/***/ }),

/***/ "./src/js/screens.js":
/*!***************************!*\
  !*** ./src/js/screens.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGameScreen": () => (/* binding */ renderGameScreen),
/* harmony export */   "renderChooseLevelScreen": () => (/* binding */ renderChooseLevelScreen)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");


const renderChooseLevelScreen = () => {
    const levelPopup = document.createElement("div");
    levelPopup.classList.add("level-popup");

    window.application.renderBlock(
        "header",
        levelPopup,
        "Выбери сложность",
        "level-popup__header"
    );

    window.application.renderBlock("choose-level", levelPopup);

    window.application.renderBlock(
        "active-btn",
        levelPopup,
        "Старт",
        "level-popup__start-btn"
    );

    _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(levelPopup);
};

window.application.screens["choose-level"] = renderChooseLevelScreen;

const renderGameScreen = () => {
    const gameScreen = document.createElement("div");
    gameScreen.classList.add("game-screen");

    window.application.renderBlock("game-bar", gameScreen);

    window.application.renderBlock("cards", gameScreen);

    setTimeout(() => {
        const cards = document.getElementsByClassName("card");

        for (const card of cards) {
            card.src = "static/card_back.png";
        }
    }, 5000);

    _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(gameScreen);
};

window.application.screens["game"] = renderGameScreen;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./src/js/blocks.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens */ "./src/js/screens.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* eslint-disable prettier/prettier */





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map