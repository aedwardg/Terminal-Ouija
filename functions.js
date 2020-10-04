'use strict';

module.exports = {
    pickRandom(choiceArray) {
        const index = Math.floor(Math.random() * choiceArray.length);
        return choiceArray[index];
    },

    pickRandomChar(str) {
        return str.substr(Math.floor(Math.random() * str.length), 1);
    },
    
}