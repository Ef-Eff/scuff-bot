const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "turn";

class TurnCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "MRW I see a Nissan GTR."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = TurnCommand