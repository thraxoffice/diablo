const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if (message.author.id !== ayarlar.sahip) return message.reply('Bu komutu sadece yapımcım kullanabilir!');

    let user = args[0]
    let users = client.users.cache.get(user)
  if (!user) return message.channel.send(`Bir kullanıcı idsi girmelisin.`)

  db.set(`gold_${user}`, 'kapali')
  message.channel.send(`**${users.tag}** adlı kullanıcının gold üyesi başarıyla kapatıldı!`)
  users.send(`Yetkili **${message.author.tag}** senin gold üyeliğini başarıyla kapattı!`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  exports.help = {
    name: 'goldçıkar',
    description: 'Napcan?',
    usage: 'goldçıkar'
  };