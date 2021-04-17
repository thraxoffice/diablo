const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client()
client.emojis.cache.get('784518934711762976');
client.emojis.cache.get('784518943423463484');

module.exports.run = async (client, message, args) => {  
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "c.";
  if (kontrol == "yokagayok") {
  
      
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`Lütfen bir prefix belirtiniz!`)

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
     
  
  } else {
   
      
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`Lütfen Bir Prefix Belirtiniz!`)

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix; \`${prefix}\`olarak ayarlandı!`)

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
      
  
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-ayarla"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix-ayarla"
};