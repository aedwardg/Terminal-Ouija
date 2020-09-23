'use strict';

const chalk = require('chalk');
const inquirer = require('inquirer');
const chalkAnimation = require('chalk-animation');
const { Subject } = require('rxjs');

const ask = require('./ask-functions');
const animations = require('./animations');
const qs = require('./questions');
const story = require('./narrative');


// let name = '';

let friends = {};

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function run() {
    // console.clear();
    // const introAnimation = chalkAnimation.pulse(story.intro);
    // await sleep(6000);
    // introAnimation.stop();
    await animations.startIntro();
    await ask.play();
    await ask.playerName();
    await ask.friendNames();
    await animations.startGlitch(`${chalk.red('You are dead')}`);

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
    
    console.log('testing...')
};

run();