module.exports = {
  async runGachiCommand(message, name) {
    if (message.guild.voiceConnection) {
      return;
    }
    if (!message.member.voiceChannel) {
      message.reply("you must be in a voice channel to use this command, cabron.")
      return;
    }
    const connection = await message.member.voiceChannel.join();
    const dispatcher = await connection.playArbitraryInput(this.getUrl(name));
    dispatcher.on("end", () => {
      message.guild.voiceConnection.disconnect();
    });
  },
  baseUrl: __dirname + "/sounds/",
  getUrl(str) {
    return this.baseUrl + str + ".mp3";
  },
  baseOptions: {
    name: "",
    group: "gachi",
    memberName: "",
    examples: [],
    description: "",
  },
};