'use strict';

// External files
const art = require('./art');

// Base player and gameBoard objects
const player = {
    name: null,
    willPlay: null,
    _choices: [],
    _notes: [],

    _villains: {
        names: [],
        killer: null,
        art: {
            'Hannibal Lecter': art.hannibal,
            'Norman Bates': art.norman,
            'Freddy Krueger': art.freddy,
            'Annie Wilkes': art.annie,
            'Carrie White': art.carrie,
            'Jason Voorhees': art.jason
        }
    },

    selectKiller(suspectList) {
        const index = Math.floor(Math.random() * suspectList.length);
        return suspectList[index];
    },

    get killer() {
        return this._villains.killer;
    },

    set killer(killerName) {
        this._villains.killer = killerName;
    },

    get villainNames() {
        return this._villains.names;
    },

    set villainNames(namesList) {
        this._villains.names = namesList;
    },

    get killerArt() {
        return this._villains.art[this.killer];
    },

    get choices() {
        return this._choices;
    },

    set choices(choice) {
        this._choices.push(choice);
        this._notes.push(choice);
    },

    get notes() {
        return this._notes.toString().replace(/,/g, ' ');
    },

    set notes(note) {
        this._notes.push(note);
    },

}

const gameBoard = {
    boards: {
        board1: `
        YES            NO    
    A B C D E F G H I J K L M
    N O P Q R S T U V W X Y Z
       1 2 3 4 5 6 7 8 9 0   
             GOOD BYE        
        `,
        board2: [
            `    YES            NO    `,
            `A B C D E F G H I J K L M`,
            `N O P Q R S T U V W X Y Z`,
            `   1 2 3 4 5 6 7 8 9 0   `,
            `         GOOD BYE        `
        ]
    },
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    yesNo: ['YES', 'NO'],
    goodBye: 'GOOD BYE',
    lettersUsed: []
}

module.exports = {
    player: player,
    gameBoard: gameBoard
}