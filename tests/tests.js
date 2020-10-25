'use strict';

const animations = require('../animations.js');
const { player, gameBoard } = require('../player.js');

async function runTests() {
    player.name = 'Anonymous';
    player.villainNames = ['Hannibal Lecter', 'Norman Bates', 'Freddy Krueger', 'Annie Wilkes', 'Carrie White', 'Jason Voorhees'];
    player.killer = player.selectKiller(player.villainNames);

    // UPDATE THIS LATER TO INTERACTIVELY CHOOSE WHAT TO TEST
    await testKillVillains();
    return 1;
}

async function testKillVillains() {
    for (let i = 0; i < 5; i++) {
        await animations.killVillain();
    }
    console.log('DONE!')
}

runTests();