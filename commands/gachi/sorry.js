const commando = require("discord.js-commando");
const gachiData = require("./gachiData")

class SorryCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "sorry",
      memberName: "sorry",
      description: "When you walk in on some dude with a fat cock with his dick hanging."
    })
  }

  async run(message) {
    const url = gachiData.getUrl("sorry")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = SorryCommand