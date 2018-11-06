const commando = require("discord.js-commando");
const gachiData = require("./gachiData")
const name = "swallow";

class SwallowCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Van isn't asking for much, it should be expected."
    })
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = SwallowCommand