const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.");
  }
});

client.login("NjcwNDc1OTU2MzMwMjk5NDEy.XivUPQ.QWwb-2-xgX0KagEHLAwbupNw76k");
