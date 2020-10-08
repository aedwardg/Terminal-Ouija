'use strict';

// External packages
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const art = require('./art');
const { pickRandom } = require('./functions');
const { player, gameBoard } = require('./player');

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
    const board1 = gameBoard.boards.board1;
    const board2 = gameBoard.boards.board2;
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

async function killVillain() {
    let villain = pickRandom(player.villainNames);

    while (villain === player.killer) {
        villain = pickRandom(player.villainNames);
    }

    const index = player.villainNames.indexOf(villain);
    const entry = player.villainNames.splice(index, 1)
    player.notes = `${entry} was ${chalk.red('MURDERED!')}`;

    // STORY SECTION HERE
}

async function showFinalChoices() {
    const name = player.name.toUpperCase();
    const choices = player.choices;
    const notName = [];

    for (let i = 0; i < choices.length; i++) {
        if (name.includes(choices[i])) {
            choices[i] = `${chalk.red(choices[i])}`;
        } else {
            notName.push(i);
        }
    }

    let choiceString = choices.toString().replace(/,/g, ' ');
    await speak([choiceString]);
    await speak(['And then it finally clicks...']);

    for (const i of notName) {
        choices[i] = `${chalk.black(choices[i])}`;
    }

    choiceString = choices.toString().replace(/,/g, ' ');
    await speak([choiceString]);
    await sleep(1000);
    console.log(chalk.red(name));
    await sleep(1000);
    await speak([`...and the last thing you see is ${chalk.red('RED')}.`]);

    let time = 1000;
    for (let i = 0; i < 50; i++) {
        console.log(chalk.red(name));
        await (sleep(time));
        time /= 1.2;
    }

    console.clear();
    await sleep(1000);
}

// does this need to be async?
async function printDeathNote() {
    console.log('\n');
    console.log(chalk.red(player.notes));
    console.log('\n');
}

// does this need to be async?
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
    killVillain:killVillain,
    showFinalChoices: showFinalChoices,
    printDeathNote: printDeathNote,
    finalImage: finalImage,
}