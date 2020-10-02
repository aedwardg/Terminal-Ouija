'use strict';

// External packages
const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const qs = require('./questions');
const { sleep, speak } = require('./animations');
const { player, gameBoard } = require('./player');

module.exports = {
    async play() {
        const answer = await inquirer.prompt(qs.playQ);
        
        if (answer.play) {
            console.log('Very well. Good luck.');
            await sleep(2000);
            console.clear();
        } else {
            console.log('Wise Choice.');
        }

        return answer.play;
    },
    async playerName() {
        const answer = await inquirer.prompt(qs.nameQ);
        console.clear();
        console.log(`Welcome, ${answer.name}`);
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
                await speak([message]);
            } else {
                let message = `${villain} is on your ${chalk.red('RIGHT')}.`
                await speak([message]);
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

        let nameLetter = name.substr(Math.floor(Math.random() * name.length), 1);

        while (chosen.includes(nameLetter)) {
            nameLetter = name.substr(Math.floor(Math.random() * name.length), 1);
        }

        chosen.push(nameLetter.toUpperCase());

        let letter = charList.substr(Math.floor(Math.random() * charList.length), 1);

        for (let i = 0; i < 3; i++) {

            while (chosen.includes(letter) || gameBoard.lettersUsed.includes(letter)) {
                letter = charList.substr(Math.floor(Math.random() * charList.length), 1);
            }
    
            chosen.push(letter);
            gameBoard.lettersUsed.push(letter);
        }

        const currentChoices = [];

        chosen.forEach(choice => {
            currentChoices.push({ name: choice });
        });

        qs.letterQ[0].choices = currentChoices;

        const answer = await inquirer.prompt(qs.letterQ);
        console.clear();
        await sleep(1000);
        
        // TODO: make this have multiple messages
        await speak([`As if by magic, the planchette slowly glides to the letter ${chalk.red(answer.letter)}`]);
        console.clear();

        // answer.letter is a one-element array, so string interpolation works,
        // but we need to return the first element here.
        return answer.letter[0];
    }
};