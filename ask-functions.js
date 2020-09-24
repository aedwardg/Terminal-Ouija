const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const qs = require('./questions');

module.exports = {
    play: async () => {
        const answer = await inquirer.prompt(qs.playQ);
        
        if (answer.play) {
            console.log('Very well. Good luck.');
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
        await inquirer.prompt(qs.friendsQ)
            .then(answers => {
                console.clear();
                console.log('So...');
                answers.friends.forEach(friend => {
                    if (['Hannibal Lecter', 'Norman Bates'].includes(friend)) {
                        console.log(`${friend} is on your ${chalk.red('left')}`);
                    } else {
                        console.log(chalk.redBright(`${friend} is on your right.`));
                    }
                });
            });
    }
};