const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`resebi o ping as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} horas`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json"); 
 
const cooldown = new Set()
var time_cooldown = 4 * 1000

const dbfunc = require("./db.js")
const db = dbfunc.db

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
     if (cooldown.has(message.author.id)) {
       message.channel.send({embed: {
  description: `🔥 hey ${message.author} aguarde 4 segundos para usar outro comando!`
}});
   } else {
       cooldown.add(message.author.id);

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro detectado:' + err);
    message.channel.send({
  content: "",
  embed: {
    description: "❌ |o comando **"+command+"** não existe :(",
    color: 16711680
  }
})
}
    setTimeout(() => {
       cooldown.delete(message.author.id);
   }, time_cooldown);
}
});

client.on("ready", () => {
db.defaults({"all":[]})
  .write();
  client.user.setActivity("OwO whats this?", {
        type: "WATCHING"
   })
});

client.login(process.env.TOKEN);