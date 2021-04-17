const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async(client, message, args) => {


let pingmesaj;
let pingdurum;

let mesaj;
  let mesajdurum;
if(Date.now() - message.createdAt < 100){
mesaj = "<a:3359_dnd:808663428751294506>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt < 30){
mesaj = "<:yesildaire:826024641969389588> "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
mesaj = ":<a:3359_dnd:808663428751294506>"
mesajdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt > 150){
mesaj = "<a:3359_dnd:808663428751294506>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
mesaj = "<a:3359_dnd:808663428751294506>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
/*for(var emojilers in client.emojiler){
let emojis = client.emojis.get(emojilers)
}*/
if(client.ws.ping < 100){
pingmesaj = "<a:3359_dnd:808663428751294506>"
pingdurum = "#ff0000"
}
if(client.ws.ping < 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping < 30){
pingmesaj = "<:yesildaire:826024641969389588>"
pingdurum = "#66ff00"
}
if(client.ws.ping > 100){
pingmesaj = "<:yesildaire:826024641969389588>"
pingdurum = "#ff0000"
}

if(client.ws.ping > 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping > 150){
pingmesaj = "<a:3359_dnd:808663428751294506>"
pingdurum = "#ff0000"
}
if(client.ws.ping > 250){
pingmesaj = "<a:3359_dnd:808663428751294506>"
pingdurum = "#ff0000"
}
if(client.ws.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username + " Adlı kullanıcı tarafından istendi.",message.author.avatarURL)
.setDescription(`<a:yr_discord:810222783640502323> Gecikme: **${client.ws.ping+ "ms"}** ${pingmesaj}\n\n<a:yr_bulut:810222724886298634> Mesaj Gecikmesi: **${(Date.now() - message.createdAt)+ "ms"}** ${mesaj}`)
.setColor(pingdurum)
.setFooter(client.user.username, client.user.avatarURL)
message.channel.send(embed)

}


  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Ping"],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};