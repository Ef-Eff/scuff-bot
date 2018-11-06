const commando = require("discord.js-commando");
const gachiData = require("./gachiData")
const name = "night";

class TheOtherNightCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Billy confiding in a friend about a guilty experience."
    })
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = TheOtherNightCommand