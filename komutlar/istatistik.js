const Discord = require("discord.js");
const db = require('quick.db');


const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (client, message, args) => {  
   const seksizaman = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setTitle("Cyrex İstatistik Menüsü")
  .addFields(
          {
            name:"__Sahip__",
            value:"<:pandamm:817321264746201098> Bot Sahip :<@812205123685842965>\n<:pandamm:817321264746201098> Bot Geliştirici :<@812205123685842965>",
            inline:false,
          },
          {
            name:"__Bot Bilgi__",
            value:"<a:B_Ileri:808663349902049300> Prefix: **c.**\n<a:B_Ileri:808663349902049300> Bot Dil: : :flag_tr:\n<a:B_Ileri:808663349902049300> Komut Sayısı: **137**",
            inline:true,
          },
          {
            name:"__Sunucu/Kullanıcı__",
            value:`<:ceixsapanda3:817321614281932841> Toplam Sunucular: **${client.guilds.cache.size}**\n<:ceixsapanda3:817321614281932841> Toplam Kullanıcılar: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`,
            inline:true,
          },
          {
            name:"__Sürümler__",
            value:"<a:yrnex_tiks:810222648113496075> Discord.js : **v12.5.1**\n<a:yrnex_tiks:810222648113496075> Node.js :  **v14.15.2**",
            inline:true,
          },
          {
            name:"__Gecikmeler__",
            value:`<a:yr_bulut:810222724886298634> Ping : **${client.ws.ping}ms**\n<a:yr_discord:810222783640502323> Uptime : **${seksizaman}**`,
            inline:true,
          },
          {
            name:"__Linkler__",
            value:"<a:KalpGif:808663362476179496> Rollü Davet [Tıkla](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)\n<a:KalpGif:808663362476179496> Rolsüz Davet [Tıkla](https://discord.com/api/oauth2/authorize?client_id=816550651131199498&permissions=0&scope=bot)\n<a:KalpGif:808663362476179496> Destek Sunucum [Tıkla](https://discord.gg/UTUTnp4)",
            inline:true,
          },
          {
            name:"__Youtube__",
            value:"<:548481801958719521:816027439888859136> [Frosty](https://www.youtube.com/channel/UC9QjCEfyqvVrArzQ7DpwSPQ)",
            inline:true,
          }
  )
   /*.setColor("#ff4400")
  .setThumbnail('https://media.discordapp.net/attachments/785558053902745611/786143739499642880/static_3.png?width=205&height=205', bot.user.avatarURL({dynamic: true}), true)
  .setTitle('Cyrex Bot \\\ Selam,Bunlar İstatistiklerim :', bot.user.avatarURL({dynamic: true}))
  .addField(" » Bot Sahibi", "• <@812205123685842965>", true) 
  .addField(" » **Geliştirici** ","• <@812205123685842965>", true)
  .addField(" » **Bellek Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField(" » **Çalışma Durumu**", seksizaman, true)
  .addField(" » **Kullanıcı Sayısı**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(" » **Sunucu Sayısı**", bot.guilds.cache.size.toLocaleString(), true)
  .addField(" » **Kanal Sayısı**", bot.channels.cache.size.toLocaleString(), true)
  .addField(" » **Ping Durumu**", bot.ws.ping+" ms", true)
  .addField(" » **Discord.js Sürümü**", `${Discord.version}`, true)
  .addField(" » **Beni Ekle**", " [Eklemeyi Unutma](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)", true)
  .addField(" » **Destek Sunucum**", "[Katılmayı Unutma](https://discord.gg/8bjNe3TNnb)", true)
  .addField(" » **Bota Oy Ver**", "[YAKINDA](Yakında)", true)*/
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i','bilgi', 'istatistik', 'bot-bilgi', 'bot-istatistik'],
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Bot i",
  usage: "bilgi"
};