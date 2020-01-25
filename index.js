const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  if (message.content === "!ivana") {
    message.channel.send("mi sitio: https://github.com/jesuscirino/ivana/");
  }
});

client.login(config.token);
