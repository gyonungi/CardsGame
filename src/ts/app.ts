export const app: HTMLElement | null = document.querySelector(".app");

declare global {
    interface Window {
        application: {
            blocks: addFunction;

            screens: addScreen;

            renderScreen: (screenName: string) => void;
            renderBlock: (
                blockName: string,
                container: HTMLElement,
                content?: number | string,
                className?: string,
                numberOfCards?: number,
                cardsId?: number,
                cardsFront?: string
            ) => void;
            time: string;

            timers: NodeJS.Timeout[];

            level: number | null;

            gameCards: string[];

            choiceCards: {
                id: null | number;
                src: null | string;
            };
        };
    }

    type renderFunction = (
        container: HTMLElement,
        content?: number | string,
        className?: string,
        numberOfCards?: number,
        cardsId?: number,
        cardsFront?: string
    ) => void;

    type addFunction = {
        [index: string]: renderFunction;
    };

    type addScreen = {
        [index: string]: Function;
    };
}

window.application = window.application || {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        for (let timer of window.application.timers) {
            clearTimeout(timer);
            timer === undefined;
        }
        window.application.timers = [];

        if (window.application.screens[screenName] === undefined) {
            return;
        }
        if (app != null) {
            app.textContent = "";
        }

        window.application.screens[screenName]();
    },
    renderBlock: function (
        blockName,
        container,
        content,
        className,
        numberOfCards,
        cardsId,
        cardsFront
    ) {
        

        window.application.blocks[blockName](
            container,
            content,
            className,
            numberOfCards,
            cardsId,
            cardsFront
        );
    },
    time: "00.00",

    timers: [],

    level: null,

    gameCards: [],

    choiceCards: {
        id: null,
        src: null,
    },
};

window.addEventListener("load", () => {
    window.application.renderScreen("choose-level");
});
