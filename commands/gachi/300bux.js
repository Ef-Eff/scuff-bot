const commando = require("discord.js-commando");
const gachiData = require("./gachiData");
const name = "300bux";

class BuxCommand extends commando.Command {
  constructor(client) {
    super(client, {
      ...gachiData.baseOptions,
      name,
      memberName: name,
      description: "The cost of being fisted by senhor Darkholme himself."
    });
  }

  async run(message) {
    gachiData.runGachiCommand(message, name);
  }
}

module.exports = BuxCommand