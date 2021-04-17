const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => { 

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kimi döveceksin?");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı dövdü.(şakşakşak)**`
    )

    .setImage(
      `http://2.bp.blogspot.com/-v0Jvvy3DLIw/UZT802o73sI/AAAAAAAAAfw/0ijO74pLr1o/s1600/A%C4%9F%C4%B1r+%C3%A7ekimde+tokat.gif`
    );
  return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "döv",
  description: "İstediğiniz kişiyi döversiniz.",
  usage: "döv"
};
