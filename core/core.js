const furrynsfwA = require("../database/furryB.json");
const furrygayA = require("../database/furrC.json");

const furryRandom = () => {
  return {
    furrynsfw: () => furrynsfwA[mathRandom(furrynsfwA.length)],
    furrygay: () => furrygayA[mathRandom(furrygayA.length)]
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = furryRandom();