const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== "812205123685842965") if(message.author.id !== "") return message.channel.send("Sahibimin Komudu Kullanmazsın!");
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(" Karalisteden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  };
  
  
  db.delete(`karalist_${user}`)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${user}> adlı kullanıcı başarıyla karalisteden çıkartıldı!`)
  return message.channel.send({embed: embed})
 //if (client.users.cache.get(user).send(` <@${message.author.id}> adlı yetkilimiz tarafından beyazlisteye alındın! Artık Asreaperin komutlarını kullanabilirsin.`)){
 // } else return
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whitelist", "beyaz-liste"],
  permLevel: 0
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};  