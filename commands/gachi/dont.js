const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "dont";

class DontCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Anal is off the menu for Mr Van."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = DontCommand