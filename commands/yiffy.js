const Discord = require("discord.js");
const fs = require('fs');
let {all} = require("../yiff.json");

exports.run = async (client, message, args) => {
  
  if (all.length === 0) {
        let embed = new Discord.MessageEmbed()
          .setTitle('❌| não a imagems na minha database')
        return message.channel.send(embed)
      } else {
       if (!message.channel.nsfw) return message.channel.send(":x: |sorry mais esse canal de texto não tem a função **nsfw** ativada!!");

        var randomNumber = Math.floor(Math.random() * all.length)
        
        let embed = new Discord.MessageEmbed()
          .setAuthor('Yiff')
          .setImage(all[randomNumber])
        message.channel.send(embed)
      }
}