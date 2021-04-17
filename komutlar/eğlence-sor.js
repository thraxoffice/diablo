const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Olabilir",
    "Olmayabilir",
    "Bilmiyorum",
    "Bilmem ki",
    "Sanırım Evet",
    "İyi",
    "Kötü",
    "Sanırım Hayır",

];

module.exports.run = async (bot, message, args) => {
const soru = args.join(' ');
  if(!soru) return message.channel.send('Ne Soracağını Yazmadın.')
  message.channel.send(" Cevap: " + (cevaplar[Math.floor(Math.random() * cevaplar.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  kategori: 'eğlence',
  description: 'Bota sorduğunuz soruya cevap verir.',
  usage: 'sor'
};