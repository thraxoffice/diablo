const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {

   message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let davetsayi = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} - <a:B_Ileri:808663349902049300> Davetinizle gelen kişi sayısı: **${davetsayi}**`);
   })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetsayım","davetkişi","davetim"],
  permLevel: 0
};

exports.help = {
  name: 'davetlerim',
  description: 'Davetinizle gelen kişi sayısını gösterir',
  usage: 'davetlerim'
};
//Cyrex