'use strict';

// External Packages
const inquirer = require('inquirer');

// Questions to ask user, formatted for Inquirer.js
const q = module.exports;
q.playQ = [
    {
        type: 'confirm',
        name: 'play',
        message: 'Ouija boards are not toys. Are you sure you want to continue?'
    }
];

q.nameQ = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: function () {
            return 'Anonymous';
        },
        validate: function (value) {
            const pass = value.match(/^[A-Za-z]+$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a name using only letters of the Alphabet.';
        }
    }
];

q.villainsQ = [
    {
        type: 'checkbox',
        name: 'villains',
        message: 'Who is sitting at the table with you?',
        choices: [
            new inquirer.Separator(' = On your left = '),
            {
                name: 'Hannibal Lecter',
            },
            {
                name: 'Norman Bates',
            },
            {
                name: 'Freddy Krueger'
            },
            new inquirer.Separator(' = On your right = '),
            {
                name: 'Annie Wilkes',
            },
            {
                name: 'Carrie White'
            },
            {
                name: 'Jason Voorhees'
            }
        ],
        pageSize: 8,
        // loop: false,
        validate: function (answer) {
            if (answer.length < 1) {
                let message = `
                You cannot use a Ouija board alone!
                Take a closer look...who else is sitting at the table?
                `;
                return message;
            } else if (answer.length === 1) {
                let message = `
                You must be mistaken - there are people on either side of you.
                Take a closer look...who else is sitting at the table?
                `;
                return message;
            } else {
                return true;
            }
        }
    }
];

q.letterQ = [
    {
        type: 'checkbox',
        name: 'letter',
        message: 'You feel the planchette begin to move beneath your hand. Where does it go?',
        choices: [],
        pageSize: 4,
        validate: function (answer) {
            if (answer.length < 1) {
                let message = `
                Until the spirits tell you "GOOD BYE", they will always give you a number or letter.
                Concentrate harder.  What letter are you guided to?
                `;
                return message;
            } else if (answer.length > 1) {
                let message = `
                The spirits will never give you more than one number or letter at a time.
                Give in and let them guide you to a single letter.
                `;
                return message;
            } else {
                return true;
            }
        }
    }
];

q.numberQ = [
    {
        type: 'checkbox',
        name: 'number',
        message: 'Out of nowhere, the planchette jerks down toward the row of numbers. Where does it go?',
        choices: [],
        pageSize: 3,
        validate: function (answer) {
            if (answer.length < 1) {
                let message = `
                Until the spirits tell you "GOOD BYE", they will always give you a number or letter.
                Concentrate harder.  What number are you guided to?
                `;
                return message;
            } else if (answer.length > 1) {
                let message = `
                The spirits will never give you more than one number or letter at a time.
                Give in and let them guide you to a single number.
                `;
                return message;
            } else {
                return true;
            }
        }
    }
];

q.yesNoQ = [
    {
        type: 'checkbox',
        name: 'yesNo',
        // IDEA: maybe assign this to different messages at runtime
        message: 'The planchette hovers briefly between YES and NO. Where does it go?',
        choices: [],
        pageSize: 2,
        validate: function (answer) {
            if (answer.length < 1) {
                let message = `
                Until the spirits tell you "GOOD BYE", they will always give you an answer.
                Concentrate harder.  Which word are you guided to?
                `;
                return message;
            } else if (answer.length > 1) {
                let message = `
                The spirits will never give you more than one answer at a time.
                Give in and let them guide you to a single word.
                `;
                return message;
            } else {
                return true;
            }
        }
    }
];