const commando = require("discord.js-commando");
const gachiData = require("./gachiData")

class SuctionCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "suction",
      memberName: "suction",
      description: "An important concept for all gay men to learn."
    })
  }

  async run(message) {
    const url = gachiData.getUrl("suction")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = SuctionCommand;