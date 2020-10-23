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

    // Ask User if they want to play
    player.willPlay = await ask.play();
    if (!player.willPlay) { return 0; }

    // Ask for and save player name
    player.name = await ask.playerName();

    // Set the stage
    await speak(story.begin);
    await sleep(1000);
    console.clear();
    await speak(story.ouija);
    await sleep(2000);
    console.clear();
    await narrate(story.room);

    // Ask player who else is playing
    player.villainNames = await ask.villainNames();
    
    // set random killer
    player.killer = player.selectKiller(player.villainNames);

    // while not all letters in name have been picked:
    const splitName = player.name.toUpperCase().split('');

    while (!splitName.every(e => player.choices.includes(e))) {
        // Choose 2 letters
        for (let i=0; i < 2; i++) {
            await animations.printGameBoard();
            player.choices = await ask.chooseLetter();
        }
    
        // Choose number
        await animations.printGameBoard();
        player.choices = await ask.chooseNumber();

        // Check and break
        if (splitName.every(e => player.choices.includes(e))) break;
        
        // Choose 2 more letters
        for (let i=0; i < 2; i++) {
            await animations.printGameBoard();
            player.choices = await ask.chooseLetter();
        }
            
        // Yes/No question
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
            animations.killVillain();
        }
        
        gameBoard.lettersUsed = [];
    }

    // Final choices spell user's name       
    await animations.showFinalChoices();
    
    // Death Animation
    await animations.startGlitch(`${chalk.red('You are dead')}`);

    await narrate(story.ending);

    animations.printDeathNote();


    // Reveal the killer;
    await animations.finalImage(player.killerArt);
};
  
run();