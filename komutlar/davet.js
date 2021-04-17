const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor('#ff4400')
  .setThumbnail(client.user.avatarURL({dynamic: true}))
  .setAuthor('Cyrex Bot Davet Bilgi', client.user.avatarURL({dynamic: true}))
  .setDescription(`
  **__Botun Davet Linki __**
  » [Davet Linkim](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
  
  **__Botun Destek Sunucusu__**
  » [Destek Sunucum](https://discord.gg/8bjNe3TNnb)
  
  **__Bota Oy Vermek İçin Tıkla__**
  » [YAKINDA](Yakında)`)
  
.setFooter(`Komutu ${message.author.username} kullanıcı istedi .`, message.author.avatarURL({dynamic: true}))
  message.channel.send(davet)
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet-et'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gönderir.',
  usage: 'davet'
};