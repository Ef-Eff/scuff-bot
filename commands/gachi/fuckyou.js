const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "fuckyou";

class FuckYouCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Describes itself."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = FuckYouCommand