import { startMessage, lifeBlocks, numbers, alienBlocks, playerBlocks, ufoBlocks, gameOverBlocks } from "./shapes.js";

const screen = document.querySelector('.screen');
const [width, height] = [120, 110];
const blocks = width * height;
let playerPosition = blocks - (width/2) - ((width * 6) + 6);
let lcdLifeBlocks= [];
let scoreBlocks = [];
let ufoPosition = 1559;
let lcdUfoBlocks = [];
let lcdAlienBlocks = [];
let lcdPlayerBlocks = [];
let lcdGameOverBlocks = [];
let timePassed = 0;
let lastTime = 0;
let alienFireBlock, alienFiring, alienOffsets, alienPosition, alienPattern, allBlocks, changeDirection, countSinceDrop,
direction, dropped, gameOver, interval, landed, lifeCount, lifeLost, playerFireBlock, playerFiring, playing, score, ufo;

const lifeBlocksPosition = lifePos => lifeBlocks.map(block => block + lifePos);

const setLifeBLocks = () => {
    let livesPosition = 245;

    lcdLifeBlocks= [];

    [...Array(lifeCount -1).keys()].forEach(() => {
        lcdLifeBlocks = [...lcdLifeBlocks, ...lifeBlocksPosition(livesPosition)];

        livesPosition += 12;
    });
};

const scoreBlocksPosition = (digit, scorePos) => digit.map(block => block + scorePos);

const setScoreBlocks = () => {
    const digits = score.toString().split('').reverse();
    let scorePosition = 590;

    scoreBlocks = [];

    for (const digit of digits) {
        scoreBlocks = [...scoreBlocks, ...scoreBlocksPosition(numbers[digit], scorePosition)];

        scorePosition -= 4;
    }
};

const ufoBlocksPosition = ufoPos => ufoBlocks.map(block => block + ufoPos);

const alienBlocksPosition = (pattern, alienPos) =>  pattern.map(block => block + alienPos);

const playerBlocksPosition = playerPos => playerBlocks.map(block => block + playerPos);

const resetPlayerFiring = () => {
    playerFireBlock = null;
    playerFiring = false;
};

const resetAlienFiring = () => {
    alienFireBlock = null;
    alienFiring = false;
};

const hasLostLife = () => {
    lifeLost = true;
    lifeCount -= 1;
    ufo = false;
    ufoPosition = 1559;
    lcdUfoBlocks = [];

    resetPlayerFiring();
    resetAlienFiring();

    if (lifeCount === 0) {
        gameOver = true;
    }
}

const aliensSetUp = () => {
    alienOffsets = [0,1,2,3,4,60,61,62,63,64,120,121,122,123,124];
    alienPosition = 2654;
    alienPattern = 0;
    direction = 'right';
    interval = 250;
    landed = false;
};

const updateScreen = time => {
    lcdPlayerBlocks = playerBlocksPosition(playerPosition);

    if (lifeLost === true) {
        playing = false;
        lcdPlayerBlocks = [];

        if (lifeCount > 0) {
            setTimeout(() => {
                landed && aliensSetUp();

                lifeLost = false;
                playing = true;
                setLifeBLocks();
                window.requestAnimationFrame(updateScreen);
            }, 1000);
        }
    }

    if (lcdUfoBlocks.includes(playerFireBlock)) {
        score += 50;

        ufo = false;
        lcdUfoBlocks = [];
        ufoPosition = 1559;

        setScoreBlocks();
        resetPlayerFiring();
    }

    if (lcdAlienBlocks.includes(playerFireBlock)) {
        alienOffsets.splice(Math.ceil(lcdAlienBlocks.indexOf(playerFireBlock) / 46) - 1, 1);

        score += 10;

        switch (alienOffsets.length) {
            case 5:
                interval = 100
                break;
            case 1:
                interval = 50
                break;
            case 0:
                lcdAlienBlocks = [];
                setTimeout(() => {
                    aliensSetUp();
                    resetAlienFiring();

                    window.requestAnimationFrame(updateScreen);
                }, 1000);
                break;
        }

        setScoreBlocks();
        resetPlayerFiring();
    }

    (lcdPlayerBlocks.includes(alienFireBlock) && !lifeLost) && hasLostLife();

    playerFiring && (playerFireBlock -= 480);
    playerFireBlock < 1 && resetPlayerFiring();

    alienFiring && (alienFireBlock += 480);
    alienFireBlock > 13200 && resetAlienFiring();

    if (Math.floor(time / 1000) % 3 === 0) {
        const randomAlien = Math.floor(Math.random() * (alienOffsets.length - 1));

        alienFireBlock = lcdAlienBlocks[randomAlien * 46] + 603;
        alienFiring = true;
    }

    if (!ufo && time > 1000 && Math.floor(time / 1000) % 15 === 0) {
        ufo = true;
    }

    if(ufo) {
        lcdUfoBlocks = [...ufoBlocksPosition(ufoPosition)];
        ufoPosition += 1;

        if (ufoPosition > 1664) {
            ufo = false;
            ufoPosition = 1559;
            lcdUfoBlocks = [];
        }
    }

    timePassed += time - lastTime;

    if (timePassed > interval) {
        lcdAlienBlocks = [];

        for (const alien of alienOffsets) {
            lcdAlienBlocks = [...lcdAlienBlocks, ...alienBlocksPosition(alienBlocks[alienPattern], alienPosition + (alien * 20))];
        }

        direction === 'right' ? alienPosition++  : alienPosition--;

        if (changeDirection && !dropped) {
            alienPosition += (10 * width);

            dropped = true;
            countSinceDrop = 1;

            direction === 'right' ? direction = 'left'  : direction = 'right';
        }

        countSinceDrop >= 1 && countSinceDrop++;

        if (countSinceDrop === 10) {
            dropped = false;
            changeDirection = false;
        }

        timePassed = 0;
        alienPattern === 0 ? alienPattern = 1 : alienPattern = 0;
    }

    if (gameOver) {
        lcdGameOverBlocks = gameOverBlocks.map(block => block + 521);
        lcdPlayerBlocks = [];
    }

    const allLcdBlocks = [...lcdLifeBlocks, ...scoreBlocks, ...lcdUfoBlocks, ...lcdAlienBlocks, alienFireBlock && alienFireBlock, playerFireBlock && playerFireBlock, ...lcdPlayerBlocks, ...lcdGameOverBlocks];

    for (const [index, block] of allBlocks.entries()) {
        allLcdBlocks.includes(index) ? block.style.background = '#333'
            : block.style.background = '#dce6d6';

        if (lcdAlienBlocks.includes(index)) {
            (!dropped && (index % 120 === 114 || index % 120 === 6)) && (changeDirection = true);

            if (!lifeLost && index > 13080) {
                landed = true;

                hasLostLife();
            }
        }
    }

    gameOver && (playing = false);

    lastTime = time;
    playing && window.requestAnimationFrame(updateScreen);
};

const drawScreen = () => {
    const lcdStartMessage = startMessage.map(block => block + 3392);

    for (let block = 1; block <= blocks; block++ ) {
        const screenBlock = document.createElement('div');

        screenBlock.className = 'block';

        lcdStartMessage.includes(block) && (screenBlock.style.background = '#333');
        screen.append(screenBlock);
    }

    allBlocks = document.querySelectorAll('.block');
};

const init = () => {
    document.addEventListener('keydown',  e => {
        switch (e.code) {
            case 'ArrowLeft':
                playerPosition > 12360 && (playerPosition -= 2);
                break;
            case 'ArrowRight':
                playerPosition < 12470 && (playerPosition += 2);
                break;
            case 'Space':
                if (playing) {
                    !playerFiring && (playerFireBlock = lcdPlayerBlocks[0]);
                    (!lifeLost && alienOffsets.length > 0) && (playerFiring = true);
                }
                break;
            case 'KeyS':
                if (!playing) {
                    gameOver = false;
                    playing = true;
                    lifeCount = 3;
                    lifeLost = false;
                    score = 0;
                    window.requestAnimationFrame(updateScreen);
                    setLifeBLocks();
                    setScoreBlocks();
                    aliensSetUp();
                }
        }
    });

    drawScreen();
};

window.addEventListener('load', init);