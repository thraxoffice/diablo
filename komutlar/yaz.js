const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Resmi atmam için birşey yazmalısın!');
  message.channel.send(new Discord.MessageAttachment(`https://fortnitefontgenerator.com/img.php?textcolor=FFFFFF&text=${mesaj}&fontsize=250px`, `${mesaj}.png`));
};

exports.conf = {
  aliases: ['fornite-yazı', 'forniteyazı', 'fy', 'ft'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
//zNekStrafe#8806
//Emeğime saygı bu mesajı silme :D | zNekStrafe#8806