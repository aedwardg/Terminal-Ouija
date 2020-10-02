'use strict';

// External packages
const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const qs = require('./questions');
const { sleep } = require('./animations');

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

        answers.villains.forEach(villain => {
            if (leftSeats.includes(villain)) {
                console.log(`${villain} is on your ${chalk.red('LEFT')}.`);
            } else {
                console.log(`${villain} is on your ${chalk.red('RIGHT')}.`);
            }
        });

        return answers.villains;
    }, 
};