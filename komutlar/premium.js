const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Premium`, client.user.avatarURL) 

      .setThumbnail(client.user.avatarURL)
 .setDescription('!!yardımkomut komut adı yazarak komutların ne işe yaradığını bulabilirsiniz')
    
      .addField('**Premium **','`reklamtaraması`,`öneri` ')
      .addField('**Premium **','`kayıtsistemi`,`banlimit`, `ust` ')
     .setImage("https://cdn.discordapp.com/attachments/848948555795136565/850738088573665310/standard_2.gif")
       .setFooter(``, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'premium',
      usage: 'premium',
      description: 'premium komutlarını gösteir.',
};