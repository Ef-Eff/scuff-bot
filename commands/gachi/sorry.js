const commando = require("discord.js-commando");
const gachiData = require("./gachiData")
const name = "sorry";

class SorryCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "When you walk in on some dude with a fat cock with his dick hanging."
    })
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = SorryCommand