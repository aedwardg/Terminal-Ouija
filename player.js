'use strict';

// External files
const art = require('./art');

// Base player object
const player = {
    
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
    }

}

module.exports = {
    player: player
}