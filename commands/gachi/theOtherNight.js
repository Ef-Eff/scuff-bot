const commando = require("discord.js-commando");
const gachiData = require("./gachiData")

class TheOtherNightCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "night",
      memberName: "night",
      description: "Billy confiding in a friend about a guilty experience."
    })
  }

  async run(message) {
    const url = gachiData.getUrl("the other night")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = TheOtherNightCommand