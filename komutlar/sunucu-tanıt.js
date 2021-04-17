const Discord = require("discord.js");

const ms = require("ms");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let cooldown = 8.64e7, // 24 Saat
    amount = Math.floor(Math.random() * 1000) + 4000;


  let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));

    const pinkcode = new Discord.MessageEmbed()
      .setDescription(
        "**Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin!**"
      )
      .setColor(0x00ffff);
   return message.channel.send({ pinkcode });
  } else {
    const pinkcode = new Discord.MessageEmbed()
      .setTitle("Başarılı")
      .setDescription(
        "**Sunucunuz Başarıyla** [Sunucumda](https://discord.gg/UfPx9SZyPQ) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz!**"
      )
      .setColor("GREEN");
    message.channel.send(pinkcode);
    message.channel.createInvite({ maxAge: 0 }).then(invite => {
      const pinkcode = new Discord.MessageEmbed()
        .addField(`Tanıtan Kişi`, message.author.tag, true)
        .addField(`Tanıtılan Sunucun İsmi`, message.guild.name, true)
        .addField(
          `Tanıtılan Sunucudaki Üye Sayısı`,
          message.guild.members.size,
          true
        )
        .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL);
      client.channels.cache.get("822475973093621790").send(pinkcode);
      db.set(`gunluk_${message.guild.id}`, Date.now());
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-tanıt"],
  permLevel: 0
};

exports.help = {
  name: "sunucu-tanıt",
  description: "Sunucunuzu Tanıtır.",
  usage: "sunucutanıt"
};