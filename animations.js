// functions for text and color animations here?

const chalkAnimation = require('chalk-animation');

const story = require('./narrative');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function startIntro() {
    console.clear();
    const introAnimation = chalkAnimation.pulse(story.intro);
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

module.exports = {
    startIntro: startIntro,
    startGlitch: startGlitch,
}