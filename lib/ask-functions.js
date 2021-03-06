'use strict';

// External packages
const inquirer = require('inquirer');
const chalk = require('chalk');

// External Files
const qs = require('./questions');
const fn = require('./functions');
const story = require('./story.js');
const { sleep, speak } = require('./animations');
const { player, gameBoard } = require('./player');

// Functions to ask user the questions in `questions.js`
module.exports = {
    async play() {
        const answer = await inquirer.prompt(qs.playQ);
        
        if (answer.play) {
            await speak(['Very well. Follow me.']);
            await sleep(2000);
            console.clear();
        } else {
            await speak(['Wise Choice.']);
        }

        return answer.play;
    },
    async playerName() {
        const answer = await inquirer.prompt(qs.nameQ);
        console.clear();
        await speak([`Welcome, ${answer.name}.`]);
        return answer.name;
    },
    async villainNames() {
        const leftSeats = ['Hannibal Lecter', 'Norman Bates', 'Freddy Krueger']
        const answers = await inquirer.prompt(qs.villainsQ);
        console.clear();
        console.log('So...');

        for (const villain of answers.villains) {
            if (leftSeats.includes(villain)) {
                let message = `${villain} is on your ${chalk.red('LEFT')}.`;
                await speak([message], false);
            } else {
                let message = `${villain} is on your ${chalk.red('RIGHT')}.`
                await speak([message], false);
            }
        }

        await sleep(3000);
        console.clear()

        return answers.villains;
    },
    async chooseLetter() {
        const chosen = [];
        const name = player.name;
        const charList = gameBoard.letters;
        const message = fn.pickRandom(story.letterMessages);

        // Select one letter from name
        let nameLetter = fn.pickRandomChar(name);

        while (chosen.includes(nameLetter)) {
            nameLetter = fn.pickRandomChar(name);
        }

        chosen.push(nameLetter.toUpperCase());

        // Select 3 letters from gameboard
        let letter = fn.pickRandomChar(charList);

        for (let i = 0; i < 3; i++) {

            while (chosen.includes(letter) || gameBoard.lettersUsed.includes(letter)) {
                letter = fn.pickRandomChar(charList);
            }
    
            chosen.push(letter);
            gameBoard.lettersUsed.push(letter);
        }

        const currentChoices = [];

        chosen.forEach(choice => {
            currentChoices.push({ name: choice });
        });

        // Send choices and randomly selected message to Inquirer question
        qs.letterQ[0].choices = currentChoices;
        qs.letterQ[0].message = message;

        const answer = await inquirer.prompt(qs.letterQ);
        console.clear();
        await sleep(1000);
        
        const line = fn.pickRandom(story.letterSelect);
        await speak([line + `${chalk.red(answer.letter)}`]);
        console.clear();

        // answer.letter is a one-element array, so string interpolation works,
        // but we need to return the first element here.
        return answer.letter[0];
    },

    async chooseNumber() {
        const chosen = [];
        const numList = gameBoard.numbers;
        const message = fn.pickRandom(story.numberMessages);

        // Select 3 numbers
        let num = fn.pickRandomChar(numList);

        for (let i = 0; i < 3; i++) {

            while (chosen.includes(num)) {
                num = fn.pickRandomChar(numList);
            }
    
            chosen.push(num);
        }

        const currentChoices = [];

        chosen.forEach(choice => {
            currentChoices.push({ name: choice });
        });

        // Send choices and randomly selected message to Inquirer question
        qs.numberQ[0].choices = currentChoices;
        qs.numberQ[0].message = message;

        const answer = await inquirer.prompt(qs.numberQ);
        console.clear();
        await sleep(1000);
        
        const line = fn.pickRandom(story.numberSelect);
        await speak([line + `${chalk.red(answer.number)}`]);
        console.clear();

        // answer.number is a one-element array, so string interpolation works,
        // but we need to return the first element here.
        return answer.number[0];
    },

    async chooseYesNo() {
        const yesNoList = gameBoard.yesNo;

        const currentChoices = [];

        yesNoList.forEach(choice => {
            currentChoices.push({ name: choice });
        });

        qs.yesNoQ[0].choices = currentChoices;

        const answer = await inquirer.prompt(qs.yesNoQ);
        console.clear();
        await sleep(1000);
        
        const line = fn.pickRandom(story.yesNoSelect);
        await speak([line + `${chalk.red(answer.yesNo)}`]);
        console.clear();

        // answer.yesNo is a one-element array, so string interpolation works,
        // but we need to return the first element here.
        return answer.yesNo[0];
    }
};