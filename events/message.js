const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if(!message.member) return;
  if(!message.guild) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
 
  if (cmd) {
    
// if (cmd) {
//
// }
// olan yerin arasına eklenmeli.
//
// Sorun olursa sohbetten etiket atarsınız.

if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
      const warningEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`**Ops! Bu botu kullanabilmek için şartları onaylamanız gerekmektedir.**\n\n**📘** butonuna basarak botun kullanım şartlarına bakabilirsin.`)

      const termsOfService = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`**
      1) <a:tac:809714822455361577> Bilgileriniz ayarlarınızın kalıcı olması için veri tabanımızda saklanmaktadır.
      2) <a:tac:809714822455361577> Botun her şeyi lisanslıdır kopyalanması durumunda gerekli yaptırımlar uygulanacaktır.
      3) <a:tac:809714822455361577> Bota zarar vericek herhangi birşey yapılamaz. Yapılması durumunda yaptırım uygulanacaktır.
      4) <a:tac:809714822455361577> Eğer kuralları kabul ediyorsan ✅ emojisine tıkla.
      **`)
      .setTitle(`${client.user.username} | Kullanım Şartları`);

      return message.channel.send(warningEmbed).then(async rifleman => {
        await rifleman.react('📘');
        await rifleman.awaitReactions((youth, anasia) => youth.emoji.name == '📘' && anasia.id == message.author.id, { max: 1 })
        .then(async () => {
          await rifleman.reactions.removeAll();
          await rifleman.edit(termsOfService).then(async leavemealone => {
            await leavemealone.react('✅');
            await leavemealone.awaitReactions((youth, anasia) => youth.emoji.name == '✅' && anasia.id == message.author.id, { max: 1 })
            .then(async () => {
              await leavemealone.reactions.removeAll();
              await rifleman.edit(termsOfService.setDescription('**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**'));
              await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
            });
          });
        });
      })
    };

    let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('KOMUTLARI KULLANAMAZSINIZ!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`Cyrex Tarafından Engellendiniz!`)
   .setImage("https://img.artigercek.com/uploads/1/0/7pOJ1lYcS2P0bKjoHMFpFC4xAT7bD3JnNSmjY4wJ.jpeg")
   .setThumbnail(client.user.avatarURL())
   
   const asreaper = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Cyrex`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı karalistede olup **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullanmayı denedi.")
   client.channels.cache.get("771401212712583188").send(asreaper)
  return message.channel.send(karaliste)

        }
       const asreaper = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Cyrex`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullandı.")
       
       
    //
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(` **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }

    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}

		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu sadece **sahip** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
  if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    }

};