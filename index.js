const Commando = require("discord.js-commando");
const token = process.env.DISCORD_TOKEN;
const path = require("path");

const bot = new Commando.Client({
  commandPrefix: 'scuff',
  disableEveryone: true,
});

bot.registry
  .registerGroup("simple", "Simple")
  .registerGroup("gachi", "Garbage Gachi Soundboard")
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, "commands"));

bot.on('ready', () => {
  bot.user.setActivity("with myself")
  console.log("Bot Online");
});

bot.login(token); 
