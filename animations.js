'use strict';

// External packages
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// External Files
const art = require('./art');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function speak(script) {
  for (const line of script) {
    console.log(line);
    await sleep(2500);
  };
}

async function startIntro() {
    console.clear();
    const introAnimation = chalkAnimation.pulse(art.intro);
    await sleep(6000);
    introAnimation.stop();
}

async function startGlitch(message) {
    console.log('\n\n\n\n');
    const glitch = chalkAnimation.glitch(message);
    await sleep(5000);
    glitch.stop();
    console.clear();
}

async function finalImage(killer) {
  console.clear();
  console.log(chalk.red(killer));
}

module.exports = {
    sleep: sleep,
    speak: speak,
    startIntro: startIntro,
    startGlitch: startGlitch,
    finalImage: finalImage,
}