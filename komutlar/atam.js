const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setDescription('🌹 **Atam Sen Çok Yaşa. 1881-193∞**')
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: 'atam',
  description: '',
  usage: ''
};