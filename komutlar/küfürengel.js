const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
        // Eğer kullanıcı herhangi bir durum belirtmediyse ona uyarı mesajı atalım
        if(!args[0]){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Küfür Engel Sistemini Açabilmek & Kapatabilmek İçin \`c.küfür-engel aç\`, \`c.küfür-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(cmfhata)
        }

        // Eğer komutu kullanan kişi Aç & Kapat belirttiyse Data işlmelerini yapalım
        if(args[0] === 'aç'){
            // Data İşemeleri
            db.set(`codemarefiküfürengel_${message.guild.id}`, 'aktif')

            // Bilgilendirme Mesajı
            const sistemaktif = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Küfür Engel Sistemini Başarılı Bir Şekilde Açtınız. Eğer Kapatmak İstersenizde** \`c.küfür-engel kapat\``)
            .setColor('#36393F')
            return message.channel.send(sistemaktif)
        }

        if(args[0] === 'kapat'){
            // Data İşemeleri
            db.delete(`codemarefiküfürengel_${message.guild.id}`)

            // Bilgilendirme Mesajı
            const sistemdevredişi = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Küfür Engel Sistemini Başarılı Bir Şekilde Kapattınız. Eğer Açmak İstersenizde** \`.küfür-engel aç\``)
            .setColor('#36393F')
            return message.channel.send(sistemdevredişi)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Küfür engel','KÜFÜR ENGEL', 'küfür engel','Küfür-engel','KÜFÜR-ENGEL'],
    permLevel: 0
}

exports.help = {
    name: 'küfür-engel'
}