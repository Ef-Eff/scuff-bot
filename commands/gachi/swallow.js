const commando = require("discord.js-commando");
const gachiData = require("./gachiData")

class SwallowCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "swallow",
      memberName: "swallow",
      description: "Van asking for a basic action."
    })
  }

  async run(message) {
    const url = gachiData.getUrl("swallow")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = SwallowCommand