'use strict';

// External packages
const chalk = require('chalk');

// Arrays containing story elements to be dynamically added in
const s = module.exports;
s.intro = [
    `Welcome to my shop, ${chalk.bold.red('Terminal Gifts and Antiquities')}.\n`,  
    'You must be in the market for something dreadfully special.\n',
    'Perhaps...\n',
    `...a ${chalk.red('killer')} deal?\n`
];

// INFO ABOUT OUIJA BOARD
s.begin = [
    ``
]

// FILLER SENTENCES FOR MIDDLE OF STORY

// STORY FOR VILLAIN DYING

// TODO: Messages prompting user to select letter/number
s.letterMessages = [
    
];

s.numberMessages = [

];

// Narratives for after user makes selections
s.letterSelect = [
    'As if by magic, the planchette slowly glides to the letter...',
    'You feel a tug under your hand as the planchette moves with a will of its own, coming to rest on the letter...',

];

s.numberSelect = [
    'As if by magic, the planchette slowly glides to the number...',
    'You feel a tug under your hand as the planchette moves with a will of its own, coming to rest on the number...',
];

s.yesNoSelect = [
    'After what seems like a lifetime, the planchette drifts to...',
];

// ENDING TO TIE INTO DEATH NOTE AND FINAL IMAGE
// light brown: hex=#9e8c5c, rgb=(158, 140, 92)
s.ending = [
    `${chalk.hex('#9e8c5c')('The following morning, there was nothing left to suggest Terminal Gifts and Antiquities ever existed.')}\n`,
    `${chalk.hex('#9e8c5c')('In its place stood a small abandoned building, its interior in a tattered state of disarray.')}\n`,
    `${chalk.hex('#9e8c5c')('To look at it, one would never guess what took place the night before.')}\n`,
    `${chalk.hex('#9e8c5c')("In fact, from a passerby's perspective, it appeared no living creature—save perhaps the rats—had set foot on the premises for well over 50 years.")}\n`,
    `${chalk.hex('#9e8c5c')('And yet, if one would venture further into the crumbling interior, they would come across something quite out of place amid the ruins...')}\n`,
    `${chalk.hex('#9e8c5c')('In the back of the building stood an empty room.  Empty, save for a single sheet of paper written, unmistakably, in blood...')}\n`,
]