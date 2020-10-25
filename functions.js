'use strict';

// General functions not related to animations or questions
module.exports = {
    pickRandom(choiceArray) {
        const index = Math.floor(Math.random() * choiceArray.length);
        return choiceArray[index];
    },
    
    pickRandomChar(str) {
        return str.substr(Math.floor(Math.random() * str.length), 1);
    },

    // Tag for template literals.
    // Allows for similar function to Python's `.format()` 
    format(strings) {
        return function(...vals) {
            return strings.map(function(str, i) {
                return `${str}${vals[i] || ''}`;
            }).join('');
        };
    }
}