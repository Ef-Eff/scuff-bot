const commando = require("discord.js-commando");
const gachiData = require("./gachiData")
const name = "suction";

class SuctionCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "An important concept for all gay men to learn."
    })
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = SuctionCommand;