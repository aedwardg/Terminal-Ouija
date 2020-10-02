'use strict';

// External Packages
const inquirer = require('inquirer');

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
            }
            return true;
        }
    }
];

q.letterQ = [
    {
        type: 'checkbox',
        name: 'letter',
        // IDEA: maybe assign this to different messages at runtime
        message: 'You feel the planchette begin to move beneath your hand. Where does it go?',
        choices: [],
        pageSize: 4,
        validate: function (answer) {
            if (answer.length < 1) {
                let message = `
                Until the spirits tell you "GOOD BYE", they will always give you a letter.
                Concentrate harder.  What letter are you guided to?
                `;
                return message;
            }
            if (answer.length > 1) {
                let message = `
                The spirits will never give you more than one letter at a time.
                Give in and let them guide you to a single letter.
                `;
                return message;
            }
            return true;
        }
    }
]