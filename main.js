'use strict';

const ask = require('./functions');

function run() {
    console.clear()
    ask.questionOne();
};

run();


// const inquirer = require('inquirer');
// const chalk = require('chalk');
// const chalkAnimation = require('chalk-animation');


// // let ui = new inquirer.ui.BottomBar()

// const question1 = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//         default: function () {
//             return 'Stranger';
//         },
//         validate: function (value) {
//             const pass = value.match(/^[A-Za-z]+$/i);
//             if (pass) {
//                 return true;
//             }
//             return 'Please enter a name using only letters of the Alphabet.';
//         }
//     }
// ];

// const question2 = [
//     {
//         type: 'checkbox',
//         name: 'friends',
//         message: 'Who is with you?',
//         choices: [
//             new inquirer.Separator(' = On your left = '),
//             {
//                 name: 'Jerry',
//                 checked: true
//             },
//             {
//                 name: 'George',
//             },
//             new inquirer.Separator(' = On your right = '),
//             {
//                 name: 'Elaine',
//                 checked: true
//             },
//             {
//                 name: 'Kramer'
//             }
//         ],
//         validate: function (answer) {
//             if (answer.length < 1) {
//                 return 'You cannot use a Ouija board alone! Which friend will you invite to join you?';
//             }
//             return true;
//         }
//     }
// ];

// function askQuestionOne () {
//     inquirer.prompt(question1)
//         .then(answer => {
//             console.clear();
//             console.log(`Hello, ${answer.name}`);
//             askQuestionTwo();
//         });
// }

// function askQuestionTwo () {
//     inquirer.prompt(question2)
//         .then(answers => {
//             console.clear();
//             console.log('So...')
//             answers.friends.forEach(friend => {
//                 if (['Jerry', 'George'].includes(friend)) {
//                     console.log(`${friend} is on your ${chalk.red('left')}`);
//                 } else {
//                     console.log(chalk.redBright(`${friend} is on your right.`))
//                 }
//             });
//             console.log('\n\n\n\n');
//             const glitch = chalkAnimation.glitch(`${chalk.red('You are dead')}`);
//             setTimeout(() => {
//                 glitch.stop();
//                 console.clear();
//                 console.log('test');
//             }, 5000);
//         });
// }




// //askQuestionOne();



//chalkAnimation.pulse('Lorem ipsum dolor sit amet');