'use strict';

// External packages
const chalk = require('chalk');
const inquirer = require('inquirer');
const chalkAnimation = require('chalk-animation');
const { Subject } = require('rxjs');

// External files
const ask = require('./ask-functions');
const animations = require('./animations');
const qs = require('./questions');
const art = require('./art');

async function run() {
    // Opening Animation
    await animations.startIntro();

    // Ask User if they want to play
    const willPlay = await ask.play();
    if (!willPlay) { return 0; }
    
    // Ask for and save player name
    const playerName = await ask.playerName();

    // TODO: save friend names in array or dictionary
    let friendNames = await ask.friendNames();
    

    // Death Animation
    await animations.startGlitch(`${chalk.red('You are dead')}`);
    
    // Reveal the killer;
    let killer = art.carrie;
    await animations.finalImage(killer);
  };
  
  run();

// Example of using Rx.Subject() and adding new
// questions to prompt:

  // let prompts = new Subject();
  // inquirer.prompt(prompts)
  // .then(answer => {
  //     if (answer.play.lower === 'y') {
  //         console.log('Very well. Good luck.')
  //     }
  // });
  // prompts.next(
  //     qs.playQ[0]
  // );