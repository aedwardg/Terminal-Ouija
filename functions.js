const inquirer = require('inquirer');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const q = require('./questions');

module.exports = {
    questionOne: () => {
        inquirer.prompt(q.question1)
            .then(answer => {
                console.clear();
                console.log(`Hello, ${answer.name}`);
                module.exports.questionTwo();
            });
    },
    questionTwo: () => {
        inquirer.prompt(q.question2)
            .then(answers => {
                console.clear();
                console.log('So...');
                answers.friends.forEach(friend => {
                    if (['Jerry', 'George'].includes(friend)) {
                        console.log(`${friend} is on your ${chalk.red('left')}`);
                    } else {
                        console.log(chalk.redBright(`${friend} is on your right.`));
                    }
                });
                console.log('\n\n\n\n');
                const glitch = chalkAnimation.glitch(`${chalk.red('You are dead')}`);
                setTimeout(() => {
                    glitch.stop();
                    console.clear();
                    console.log('test');
                }, 5000);
            });
    }
};