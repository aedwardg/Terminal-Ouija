'use strict';

// External packages
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const art = require('./art');
const { pickRandom } = require('./functions');

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
  }

async function speak(script) {
    for (const line of script) {
        for (const letter of line) {
            process.stdout.write(letter);
            await sleep(50);
        }
        await sleep(2000);
    };
    // add an extra newline after "speaking"
    console.log('');
}

async function startIntro() {
    console.clear();
    const introAnimation = chalkAnimation.pulse(art.intro);
    await sleep(6000);
    introAnimation.stop();
}

async function startGlitch(message) {
    console.log('\n\n\n\n');
    const glitch = chalkAnimation.glitch(message);
    await sleep(5000);
    glitch.stop();
    console.clear();
}

async function flashlight(message, ms, speed = 1)  {
    const flashlight = chalkAnimation.radar(message, speed);
    await sleep(ms);
    flashlight.stop();

}

async function printGameBoard() {
    const board1 =`
        YES            NO    
    A B C D E F G H I J K L M
    N O P Q R S T U V W X Y Z
       1 2 3 4 5 6 7 8 9 0   
             GOOD BYE        
    `;

    const board2 = [
        `    YES            NO    `,
        `A B C D E F G H I J K L M`,
        `N O P Q R S T U V W X Y Z`,
        `   1 2 3 4 5 6 7 8 9 0   `,
        `         GOOD BYE        `
    ];

    const boards = [board1, board2];

    const selection = pickRandom(boards);

    if (selection === board1) {
        await flashlight(board1, 3400, 0.5);
    } else {
        for (const line of board2) {
            await flashlight(line, 3000, 0.5);
        }
    }

    console.clear();
    console.log(board1);
}

async function finalImage(killer) {
    console.clear();
    console.log(chalk.red(killer));
}

module.exports = {
    sleep: sleep,
    speak: speak,
    startIntro: startIntro,
    startGlitch: startGlitch,
    flashlight: flashlight,
    printGameBoard: printGameBoard,
    finalImage: finalImage,
}