const Discord = require("discord.js");
const fs = require('fs');
let yiffy = require("../yiff.json");

exports.run = async (client, message, args) => {
  
  if (yiffy.length === 0) {
        let embed = new Discord.MessageEmbed()
          .setTitle('❌| não a imagems na minha database')
        return message.channel.send(embed)
      } else {
        var randomNumber = Math.floor(Math.random() * yiffy.length)
        
        let embed = new Discord.MessageEmbed()
          .setAuthor('Yiff')
          .setImage(yiffy[randomNumber])
        message.channel.send(embed)
      }
}