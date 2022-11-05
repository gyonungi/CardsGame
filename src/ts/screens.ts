import { app } from "./app";

export const renderChooseLevelScreen = () => {
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

    if (app != null) {
        app.appendChild(levelPopup);
    }
};

window.application.screens["choose-level"] = renderChooseLevelScreen;

export const renderGameScreen = () => {
    const gameScreen = document.createElement("div");
    gameScreen.classList.add("game-screen");

    window.application.time = "00.00";

    window.application.renderBlock("game-bar", gameScreen);

    window.application.renderBlock("cards", gameScreen);

    setTimeout(() => {
        Array.from(document.getElementsByClassName("card")).forEach((card) => {
            card.attributes[0].value = "static/card_back.png";
        });
    }, 5000);

    if (app != null) {
        app.appendChild(gameScreen);
    }
};

window.application.screens["game"] = renderGameScreen;

export const renderWinScreen = () => {
    const winPopup = document.createElement("div");
    winPopup.classList.add("win-popup");

    const imgWin = document.createElement("img");
    imgWin.src = "static/celebration.png";
    imgWin.classList.add("win-popup__img");
    winPopup.appendChild(imgWin);

    window.application.renderBlock(
        "header",
        winPopup,
        "Вы выиграли!",
        "win-popup__header"
    );

    window.application.renderBlock("current-time", winPopup, "win-popup");

    window.application.renderBlock(
        "active-btn",
        winPopup,
        "Играть снова",
        "win-popup__restart-btn"
    );

    if (app != null) {
        app.appendChild(winPopup);
    }
};

window.application.screens["win"] = renderWinScreen;

export const renderLoseScreen = () => {
    const losePopup = document.createElement("div");
    losePopup.classList.add("lose-popup");

    const imgLose = document.createElement("img");
    imgLose.src = "static/dead.png";
    imgLose.classList.add("lose-popup__img");
    losePopup.appendChild(imgLose);

    window.application.renderBlock(
        "header",
        losePopup,
        "Вы проиграли!",
        "lose-popup__header"
    );

    window.application.renderBlock("current-time", losePopup, "lose-popup");

    window.application.renderBlock(
        "active-btn",
        losePopup,
        "Играть снова",
        "lose-popup__restart-btn"
    );

    if (app != null) {
        app.appendChild(losePopup);
    }
};

window.application.screens["lose"] = renderLoseScreen;
