const inquirer = require('inquirer');

const q = module.exports;
q.question1 = [
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

q.question2 = [
    {
        type: 'checkbox',
        name: 'friends',
        message: 'Who is with you?',
        choices: [
            new inquirer.Separator(' = On your left = '),
            {
                name: 'Hannibal Lecter',
                checked: true
            },
            {
                name: 'Norman Bates',
            },
            new inquirer.Separator(' = On your right = '),
            {
                name: 'Annie Wilkes',
                checked: true
            },
            {
                name: 'Carrie White'
            }
        ],
        validate: function (answer) {
            if (answer.length < 1) {
                return 'You cannot use a Ouija board alone! Which friend will you invite to join you?';
            }
            return true;
        }
    }
];