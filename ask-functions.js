// External packages
const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const qs = require('./questions');
const { sleep } = require('./animations');

module.exports = {
    play: async () => {
        const answer = await inquirer.prompt(qs.playQ);
        
        if (answer.play) {
            console.log('Very well. Good luck.');
            await sleep(2000);
            console.clear();
        } else {
            console.log('Wise Choice.')
        }
        return answer.play;
    },
    playerName: async () => {
        
        const answer = await inquirer.prompt(qs.nameQ);
        console.clear();
        console.log(`Hello, ${answer.name}`);
        return answer.name;

    },
    friendNames: async () => {
        let answers = await inquirer.prompt(qs.friendsQ);
        console.clear();
        console.log('So...');
        answers.friends.forEach(friend => {
            if (['Hannibal Lecter', 'Norman Bates'].includes(friend)) {
                console.log(`${friend} is on your ${chalk.red('left')}`);
            } else {
                console.log(chalk.redBright(`${friend} is on your right.`));
            }
        });
        return answers.friends
    }
};