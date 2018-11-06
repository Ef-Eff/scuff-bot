const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "penetration";

class PenetrationCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Who knows what you are going to get?"
    });
  }

  async run(message) {
    const roll = String(Math.ceil(Math.random() * 3));
    gachiData.runGachiCommand(message, name + roll);
  }
}

module.exports = PenetrationCommand