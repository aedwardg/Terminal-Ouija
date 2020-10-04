'use strict';

// External packages
const chalk = require('chalk');
const inquirer = require('inquirer');
const chalkAnimation = require('chalk-animation');
const { Subject } = require('rxjs');

// External files
const ask = require('./ask-functions');
const animations = require('./animations');
const { speak } = require('./animations');
const qs = require('./questions');
const art = require('./art');
const story = require('./story.js');
const { player, gameBoard } = require('./player');

async function run() {
    // Opening Animation
    await animations.startIntro();
      
    await speak(story.intro);

    // Ask User if they want to play
    player.willPlay = await ask.play();
    if (!player.willPlay) { return 0; }

    // Ask for and save player name
    player.name = await ask.playerName();

    // Ask player who else is playing
    player.villainNames = await ask.villainNames();
    
    // set random killer
    player.killer = player.selectKiller(player.villainNames);

    // while not all letters in name have been picked:
    for (let i=0; i < 2; i++) {
        await animations.printGameBoard();
        player.choices = await ask.chooseLetter();
    }

    // CHOOSE NUMBER HERE
    await animations.printGameBoard();
    player.choices = await ask.chooseNumber();
    
    for (let i=0; i < 2; i++) {
        await animations.printGameBoard();
        player.choices = await ask.chooseLetter();
    }
        
    // YES/NO QUESTION HERE
    await animations.printGameBoard();
    player.choices = await ask.chooseYesNo();
    
    for (let i=0; i < 2; i++) {
        await animations.printGameBoard();
        player.choices = await ask.chooseLetter();
    }
        
    // KILL VILLAIN HERE?
    // RESET gameBoard.lettersUsed
    // end while loop
        
    animations.showFinalChoices();

    // Death Animation
    //await animations.startGlitch(`${chalk.red('You are dead')}`);

    // Reveal the killer;
    //await animations.finalImage(player.killerArt);
};
  
run();

// Example of using Rx.Subject() and adding new
// questions to prompt:

//     let prompts = new Subject();
//     inquirer.prompt(prompts)
//     .then(answer => {
//         if (answer.play.lower === 'y') {
//             console.log('Very well. Good luck.')
//         }
//     });
//     prompts.next(
//         qs.playQ[0]
//     );