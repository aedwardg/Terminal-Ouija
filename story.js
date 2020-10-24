'use strict';

// External packages
const chalk = require('chalk');

// Arrays containing story elements to be dynamically added in
const s = module.exports;
s.intro = [
    `Welcome to my shop, ${chalk.bold.red('Terminal Gifts and Antiquities')}.`,  
    'You must be in the market for something dreadfully special.',
    'Perhaps...',
    `...a ${chalk.red('killer')} deal?`
];

// Intro and info about Ouija Board
s.begin = [
    'As you can see, I have all manner of treasures here — treasures from every era:',
    'A brazen bull from Ancient Greece, Egyptian amulets...even a sacrificial knife from the early Maya.',
    'The most peculiar and extraordinary of my wares, however, is quite...modern...by comparison.',
    `Perhaps you have heard of a ${chalk.red('Ouija board')} before?`,
    'Yes, yes, of course you have.',
    'Though, I doubt you know the true history of it....',
];

s.ouija = [
    'You have probably heard that the first Ouija board named itself.',
    'According to legend, in 1890 a Medium asked the first board what they should call it...',
    `...and the board spelled out a single word: ${chalk.red('OUIJA')}.`,
    `When asked what that meant, the board responded simply with...${chalk.red('GOOD LUCK')}.\n`,
    'Now, I love a good legend as much as the next historian, but I must warn you:',
    'there is far more to the story than that.',
    'Ouija boards were used by the spiritually inclined long before that incident.',
    'In fact, I own one of the oldest surviving "talking boards"...', 
    'and it appears to be at least 200 years older than that account.\n',
    'As you will see, even though it looks like its modern counterparts...', 
    'there is something dreadfully unique about this piece.',
    "It won't spell out any answers for you.",
    'Instead, it will direct you to a seemingly random set of answers...', 
    'and you must determine the meaning.',
    'So, pay attention! What is that saying everyone uses these days?',
    `Ah yes, ${chalk.red("The devil is in the details.")}\n`,
    'Well, here we are! Have a seat in that empty chair.',  
    "I hope you don't mind that I invited some company.",
    "After all, you can't use a Ouija board alone, can you?"
];

s.room = [
    'Stepping into the dimly lit room, you see an old wooden table — bare, aside from a single rectangular item at its center.',
    'At first glance, the item looks to be a typical Ouija board:', 
    'letters, numbers, a couple of words, and a triangular planchette with a hole in the middle.',
    'There is something strange about the board, however.',
    'It almost seems to shy away the light, preferring to remain in a shroud of darkness.',
    "Yet, from time to time, as though momentarily coming to life, the board's characters begin to glow...",
    'a faint pulsing from within, so minute you question whether you see it at all.',
];

s.villains = [
    'As your eyes adjust to the sudden gloom, you notice you are not alone.',
    'Lurking just out of sight stand shadowy figures to either side of your empty chair.',
    'You realize they must be the "company" the proprietor had mentioned and ease into your seat.\n',
    'Finally settled, you look about and feel your breath catch in your throat...', 
    'as one by one the other occupants seat themselves around the table.',
]

// FILLER SENTENCES FOR MIDDLE OF STORY

// STORY FOR VILLAIN DYING

// Messages prompting user to select letter/number
s.letterMessages = [
    'You feel the planchette begin to move beneath your hand. Where does it go?',
    'A sense of dread fills your stomach as the planchette inches forward. Where will it land this time?',
    'Your hand feels glued to the planchette as it floats across the board. What letter does the board choose?'
];

s.numberMessages = [
    'Out of nowhere, the planchette jerks down toward the row of numbers. Where does it go?',
    'Drifting away from the letters, the planchette appears to slide toward a number. Where does it go?'
];

// TODO: add more letterSelect messages
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

// Ending to tie into death note and final image
s.ending = [
    'The following morning, there was nothing left to suggest Terminal Gifts and Antiquities ever existed.',
    'In its place stood a small abandoned building, its interior in a tattered state of disarray.',
    'To look at it, one would never guess what took place the night before.',
    "In fact, from a passerby's perspective, it appeared no living creature—save perhaps the rats—had set foot on the premises for well over 50 years.",
    'And yet, if one would venture further into the crumbling interior, they would come across something quite out of place amid the ruins...',
    'In the back of the building stood an empty room.  Empty, save for a single sheet of paper written, unmistakably, in blood...',
];