'use strict';

// External packages
const chalk = require('chalk');

// External files
const ask = require('./ask-functions');
const animations = require('./animations');
const { speak, narrate, sleep } = require('./animations');
const story = require('./story.js');
const { player, gameBoard } = require('./player');

// Main function to run game
async function run() {
    // Opening Animation
    await animations.startIntro();
    await speak(story.intro);

    // Ask User to play and for their name
    player.willPlay = await ask.play();
    if (!player.willPlay) { return 0; }

    player.name = await ask.playerName();

    // Set the stage
    await animations.setStage();

    // Ask player who else is playing and set random killer
    player.villainNames = await ask.villainNames();
    player.killer = player.selectKiller(player.villainNames);

    // Touch the board
    await animations.touchBoard();

    const splitName = player.name.toUpperCase().split('');
    
    // while not all letters in name have been picked:
    while (!splitName.every(e => player.choices.includes(e))) {
        // Choose 2 letters and a number
        for (let i=0; i < 2; i++) {
            await animations.printGameBoard();
            player.choices = await ask.chooseLetter();
        }
    
        await animations.printGameBoard();
        player.choices = await ask.chooseNumber();

        // Check and break
        if (splitName.every(e => player.choices.includes(e))) break;
        
        // Choose 2 more letters and yes/no question
        for (let i=0; i < 2; i++) {
            await animations.printGameBoard();
            player.choices = await ask.chooseLetter();
        }
            
        await animations.printGameBoard();
        player.choices = await ask.chooseYesNo();

        // Check and break
        if (splitName.every(e => player.choices.includes(e))) break;
        
        // Choose two final letters
        for (let i=0; i < 2; i++) {
            await animations.printGameBoard();
            player.choices = await ask.chooseLetter();
        }
            
        // Kill villain and add to notes
        if (player.villainNames.length >= 2){
            await animations.killVillain();
        }
        
        gameBoard.lettersUsed = [];
    }

    // Final animations       
    await animations.showFinalChoices();
    await animations.startGlitch(`${chalk.red('You are dead')}`);
    await narrate(story.ending);
    animations.printDeathNote();

    // Reveal the killer's image;
    await animations.finalImage(player.killerArt);
};
  
run();