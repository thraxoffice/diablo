const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let user = message.mentions.members.first()

  if(!user) user = message.member
  
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (user.hasPermission("ADMINISTRATOR")) x = "✅"
    if (!user.hasPermission("ADMINISTRATOR")) x = "❌"
    
    //Denetim kaydı
    if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "✅"
    if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌"
    
    //Sunucuyu yönet
    if (user.hasPermission("MANAGE_GUILD")) x3 = "✅"
    if (!user.hasPermission("MANAGE_GUILD")) x3 = "❌"
    
    //Rolleri yönet
    if (user.hasPermission("MANAGE_ROLES")) x4 = "✅"
    if (!user.hasPermission("MANAGE_ROLES")) x4 = "❌"
    
    //Kanalları yönet
    if (user.hasPermission("MANAGE_CHANNELS")) x5 = "✅"
    if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "❌"
    
    //üyeleri at
    if (user.hasPermission("KICK_MEMBERS")) x6 = "✅"
    if (!user.hasPermission("KICK_MEMBERS")) x6 = "❌"
    
    //üyeleri yasakla
    if (user.hasPermission("BAN_MEMBERS")) x7 = "✅"
    if (!user.hasPermission("BAN_MEMBERS")) x7 = "❌"
    
    //mesajları yönet
    if (user.hasPermission("MANAGE_MESSAGES")) x8 = "✅"
    if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "❌"
    
    //kullanıcı adlarını yönet
    if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "✅"
    if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "❌"
    
    //emojileri yönet
    if (user.hasPermission("MANAGE_EMOJIS")) x10 = "✅"
    if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "❌"

    
if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "✅"
    if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌"
      let embed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(`${user.user.tag}'ın Yetkileri:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
.addField('Başında ❌ olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında ✅  olanlar o yetkiye sahip olunduğunu gösterir.', `Yetkiler`)
    return message.channel.send(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinler', 'yetkilerim'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkiler',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};