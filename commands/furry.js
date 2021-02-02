const Discord = require("discord.js");
const furryRand = require("../module-furry.js");
const cofig = require("../config.json");
const prefix = cofig.prefix;

exports.run = async (client, message, args) => {
  
const item = args[0]
  if(!item) return message.channel.send(`❌ |você precisa fornecer uma categoria de imagens! \nExemplo: \`` +prefix+ 'furry <nsfw, gay>`')

if (item === "nsfw") {
  
 if (!message.channel.nsfw) return message.channel.send(":x: |sorry mais esse canal de texto não tem a função **nsfw** ativada!!");
 
 const nsfw = furryRand.furrynsfw();
 message.channel.send({
  content: "O//w//O",
  embed: {
    color: 34047,
    image: {
      url: ""+nsfw+""
    }
  }
})

}

if (item === "gay") {
  
 if (!message.channel.nsfw) return message.channel.send(":x: |sorry mais esse canal de texto não tem a função **nsfw** ativada!!");

 const gayf = furryRand.furrygay();
  
message.channel.send({
  content: "O//w//O",
  embed: {
    color: 34047,
    image: {
      url: ""+gayf+""
    }
  }
})
}

}