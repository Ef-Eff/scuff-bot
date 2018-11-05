const commando = require("discord.js-commando")
const request = require("request-promise")

class InsultCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "insult",
      group: "simple",
      memberName: "insult",
      description: "Hurls an insult at whatever target you give it, just make sure you give it a target.",
      examples: ["insult bura"],
    });
  }

  async run(message, args) {
    const answer = await request("https://insult.mattbas.org/api/insult")
    if (!args.length) {
      message.reply(`you are ${answer.slice(8)}`)
      return;
    }
    message.say(`${args} is ${answer.slice(8)}`);
  }
}

module.exports = InsultCommand;