const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Yardım Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addFields(
        { 
          name: `**__Moderasyon__**`, 
          value: `<a:ayarlar:810222847510446131> \`c.moderasyon\`\nModerasyon komutlarını gösterir.` , 
          inline: true
        },

        { 
          name: `**__Kullanıcı__**`, 
          value: `<:323e8134dda54ef5b1809a4965d64b3f:808663324089647104> \`c.kullanıcı\`\nKullanıcı komutlarını gösterir.` , 
          inline: true
        },
        { 
          name: `**__Ekonomi__**`, 
          value: `<a:yr_discord:810222783640502323> \`c.ekonomi\`\nEkonomi komutlarını\ngösterir.` , 
          inline: true
        },
        { 
          name: `**__Koruma Sistemi__**`, 
          value: `<a:bidiribidiri:810223381819162694> \`c.koruma-sistemi\`\nKoruma sistemi komutlarını gösterir.` , 
          inline: true
        },
        { 
          name: `**__Kayıt Sistemi__**`, 
          value: `<a:boostcuk:810223309303447614> \`c.kayıt-sistemi\nc.kayıtsistemi2 \`\nKayıt sistemi komutlarını gösterir.` , 
          inline: true
        },
        { 
          name: `**__Eğlence__**`, 
          value: `<:pandaemoim5:824195672143429642> \`c.eğlence\`\nEğlence komutlarını gösterir.` , 
          inline: true
        },
        { 
          name: `**__Bilgilendirme__**`, 
          value: `<a:RainbowOkGif:808663368420294706>\`Sponsor\` c.sponsor\n<a:RainbowOkGif:808663368420294706>\`c.davet\` Botu sunucuna davet eder.\n<a:RainbowOkGif:808663368420294706>\`Website\` https://cyrexbot.sitesi.tc/` , 
          inline: false
        },
      )
    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardim", "help", "h", "y"],
  permLevel: 0  
};

exports.help = { 
  name: 'yardım', 
  description: '',
  usage: '',
};