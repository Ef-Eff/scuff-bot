const commando = require("discord.js-commando");
const gachiData = require("./gachiData");

class FuckYouCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name: "fuckyou",
      memberName: "fuckyou",
      description: "Describes itself."
    });
  }

  async run(message) {
    const url = gachiData.getUrl("fuck you")
    gachiData.runGachiCommand(message, url);
  }
}

module.exports = FuckYouCommand