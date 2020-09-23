const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const qs = require('./questions');

module.exports = {
    play: async () => {
        await inquirer.prompt(qs.playQ)
            .then(answer => {
                if (answer.play.lower === 'y') {
                    console.log('Very well. Good luck.')
                }
            });
    },
    playerName: async () => {
        
        await inquirer.prompt(qs.nameQ)
            .then(answer => {
                console.clear();
                console.log(`Hello, ${answer.name}`);
                // module.exports.friendNames();
            })
            .then(() => {
                return this.name;
            });
        
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