module.exports = {
  async runGachiCommand(message, url) {
    if (message.guild.voiceConnection) {
      return;
    }
    if (!message.member.voiceChannel) {
      message.reply("you must be in a voice channel to use this command, cabron.")
      return;
    }
    const connection = await message.member.voiceChannel.join();
    const dispatcher = await connection.playArbitraryInput(url);
    dispatcher.on("end", () => {
      message.guild.voiceConnection.disconnect();
    });
  },
  baseUrl: "http://soundboard.ass-we-can.com/static/music/",
  sounds: [
    {
      name: "suction",
      url: "VanD/Suction.mp3"
    }, 
    {
      name: "swallow",
      url: "VanD/Swallow%20my%20cum.mp3"
    },
    {
      name: "lube",
      url: "VanD/Lube%20it%20up.mp3"
    },
    {
      name: "sorry",
      url: "Unripped/Sorry.mp3"
    }, 
    {
      name: "the other night",
      url: "BillyH/The%20other%20night.mp3"
    },
    {
      name: "fuck you",
      url: "VanD/Fuck%20you.mp3"
    },
    {
      name: "scream",
      url: "BillyH/Aaaaahhhhhhhh.mp3"
    }
  ],
  getUrl(str) {
    const theOne = this.sounds.find(sound => sound.name === str);
    if (!theOne) {
      return null;
    } else {
      return this.baseUrl + theOne.url;
    }
  },
  baseOptions: {
    name: "",
    group: "gachi",
    memberName: "",
    examples: [],
    description: "",
  },
};