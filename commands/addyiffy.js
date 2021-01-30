const Discord = require("discord.js");
const fs = require('fs');
let yiffy = [];

exports.run = async (client, message, args) => {
  //nao desligue o bot!, se não a database das imagens pode ser apagada por completo, vc pode modificar para isso n acontecer de vc perde as imagens quando o bot reinicia
 if (args[0]) {
      if (
        args[0].endsWith('.jpg') ||
        args[0].endsWith('.png') ||
        args[0].endsWith('.jpeg')
      ) {
        message.delete()
        if (args[0]) {
          yiffy.push(args[0])
          fs.writeFile('yiff.json', JSON.stringify(yiffy), function (err) {
            if (err) throw err
          })
          return message.channel.send(`Adiconado com susseso! <${args[0]}>`)
        }
      } else {
        return message.channel.send(
          'esse link não leva a alguma imagem1\n \nos links devem ser redicecionados para imagens em .png .jpg/.jpeg !'
        )
      }
    } else {
      return message.channel.send('esse link não leva a alguma imagem \n \nos links devem ser redicecionados para imagens em .png .jpg/.jpeg !')
    }
    
}