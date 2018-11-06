const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "see";

class SeeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Are you intrigued by your current line of sight?",
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = SeeCommand