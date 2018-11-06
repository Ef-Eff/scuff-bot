const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "finger";

class FingerCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Put it where the sun don't shine."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = FingerCommand