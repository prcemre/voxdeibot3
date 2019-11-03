const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();
const db = require("quick.db");
require("moment-duration-format");
require('dotenv/config');
const http = require ('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);


let prefix = "+"; //botun ön eki
let owner = "294124910203240448"; // sizin id'niz

client.on("ready", guild => {
  client.user
    .setActivity("VoxDei", { type: "WATCHING" })
    .then(presence =>
      console.log(
        `Activity set to ${presence.game ? presence.game.name : "none"}`
      )
    )
    .catch(console.error);
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] CLIENT: Şu an ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
  console.log("Bağlandım!");
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "profil") {
    message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(`Avatarınız:`)
        .setImage(`${message.author.avatarURL} `)
        .setColor("RANDOM")
    );
  }
});

client.on("guildMemberAdd", member => {
  console.log("" +member.user + " VoxDei discorduna hoşgeldin! ");
  console.log(member);
  member.guild.channels
    .get("627455803519139851")
    .send("" +member.user + " VoxDei discorduna hoşgeldin! ");
});

client.on("guildMemberRemove", member => {
  member.guild.channels
  .get("627455803519139851")
  .send( ""  +member.user + " Guild discordundan ayrıldı...  ");
  
  
});


client.on('error' , err => {
  console.log(err);
});
client.login(process.env.TOKEN); //değiştirmeyin.
