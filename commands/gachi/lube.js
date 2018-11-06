const commando = require("discord.js-commando");
const gachiData = require("./gachiData")
const name = "lube";

class LubeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "When the going gets rough."
    })
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = LubeCommand