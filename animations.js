// functions for text and color animations here?

const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

const art = require('./art');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
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

async function finalImage() {
  console.clear();
  console.log(chalk.red(art.freddy));
}

module.exports = {
    sleep: sleep,
    startIntro: startIntro,
    startGlitch: startGlitch,
    finalImage: finalImage,
}