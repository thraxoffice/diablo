const Discord = require('discord.js');
const asreaper = require('./ayarlar.json');
const bot = new Discord.Client()
const asreaper2 = new Discord.ShardingManager('./asreaper.js', {
    totalShards: 1,
    token: asreaper.token
});

asreaper2.spawn(); 

asreaper2.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    asreaper2.broadcastEval("process.exit()");
}, 21600000);