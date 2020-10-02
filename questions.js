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
                message = `
                You cannot use a Ouija board alone!
                Take a closer look...who else is sitting at the table?
                `;
                return message;
            }
            return true;
        }
    }
];