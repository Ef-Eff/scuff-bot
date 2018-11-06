const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "attention";

class AttentionCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "Sgt Herrington commanding his cum slut soldiers."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = AttentionCommand