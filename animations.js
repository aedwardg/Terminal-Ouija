'use strict';

// External packages
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const art = require('./art');
const story = require('./story.js');
const { pickRandom } = require('./functions');
const { player, gameBoard } = require('./player');

// Assorted functions to provide awesome animations

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
  }

async function speak(script, newline = true) {
    for (const line of script) {
        for (const letter of line) {
            process.stdout.write(letter);
            await sleep(50);
        }

        if (newline) { console.log(''); }
        await sleep(2000);
    };
    // add an extra newline after "speaking"
    console.log('');
}

// Same as `speak()`, but with light brown:
// hex: #9e8c5c, rgb: (158, 140, 92)
async function narrate(script) {
    const new_script = [];
    for (const line of script) {
        new_script.push(`${chalk.hex('#9e8c5c')(line)}`);
    }

    await speak(new_script);
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

async function setStage() {
    await speak(story.begin);
    await sleep(1000);
    console.clear();

    await speak(story.ouija);
    await sleep(2000);
    console.clear();

    await narrate(story.room);
    await printGameBoard();
    console.clear();

    await narrate(story.villains);
}

async function touchBoard() {
    await speak(story.goodLuck);
    console.clear();
    await narrate(story.touchBoard);
    console.clear();
    await sleep(3000);
}

async function killVillain() {
    let villain = pickRandom(player.villainNames);

    while (villain === player.killer) {
        villain = pickRandom(player.villainNames);
    }

    const index = player.villainNames.indexOf(villain);
    const entry = player.villainNames.splice(index, 1)
    player.notes = `${entry} was ${chalk.red('MURDERED!')}`;

    if (player.villainNames.length === 1) {
        // Storyline where player knows who killer is.
        const message = story.knownKiller[0];
        const killer = player.killer;
        const firstname = player.killer.split(' ')[0];
        
        await speak([message(villain, `${chalk.red(killer)}`, firstname)]);
        await sleep(2000);
        console.clear();
    } else {
        // Storyline where there is still doubt about who killer is
        const message = pickRandom(story.villainDeath);
        await speak([message(villain, `${chalk.red('blood')}`)]);
        await sleep(2000);
        console.clear();
    }
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

// does this need to be asynchronous?
async function printDeathNote() {
    // speak transition line
    console.log('\n');
    console.log(chalk.red(player.notes));
    console.log('\n');
}

async function finalImage(killer) {
    await speak([`${chalk.hex('#9e8c5c')('...And beside the mysterious note, an image etched into the stone floor in the same red "ink": ')}`,]);
    await sleep(1000);
    console.clear();
    console.log(chalk.red(killer));
}

module.exports = {
    sleep: sleep,
    speak: speak,
    narrate: narrate,
    startIntro: startIntro,
    startGlitch: startGlitch,
    flashlight: flashlight,
    printGameBoard: printGameBoard,
    setStage: setStage,
    touchBoard: touchBoard,
    killVillain:killVillain,
    showFinalChoices: showFinalChoices,
    printDeathNote: printDeathNote,
    finalImage: finalImage,
}