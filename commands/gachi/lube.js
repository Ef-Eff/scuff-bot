const commando = require("discord.js-commando");
const gachiData = require("./gachiData")

class LubeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "lube",
      memberName: "lube",
      description: "When the going gets rough."
    })
  }

  async run(message) {
    const url = gachiData.getUrl("lube")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = LubeCommand