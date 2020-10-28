'use strict';

const animations = require('../animations.js');
const { sleep, narrate } = require('../animations.js');
const story = require('../story.js');
const { player, gameBoard } = require('../player.js');

async function runTests() {
    player.name = 'Anonymous';
    player.villainNames = ['Hannibal Lecter', 'Norman Bates', 'Freddy Krueger', 'Annie Wilkes', 'Carrie White', 'Jason Voorhees'];
    player.killer = player.selectKiller(player.villainNames);

    // UPDATE THIS LATER TO INTERACTIVELY CHOOSE WHAT TO TEST
    await testKillVillains();
    await testFillStory();
    await testSurvive();
    return 1;
}

async function testKillVillains() {
    for (let i = 0; i < 5; i++) {
        await animations.killVillain();
    }
    console.log('DONE!');
}

async function testFillStory() {
    for (const line of story.fillerMaterial){
        await narrate([line]);
        await sleep(2000);
        console.clear();
    }

    for (const line of story.fillerMaterial2){
        await narrate([line]);
        await sleep(2000);
        console.clear();
    }
    console.log('DONE!');
}

async function testSurvive() {
    await animations.survive();
    console.log('DONE!');
}

runTests();