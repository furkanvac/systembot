const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Ekstra`, client.user.avatarURL) 
    .setDescription('**!yardımkomut  Komut ismi yazarak komutların ne işe yaradığını bulabilirsiniz.**')
      .setThumbnail(client.user.avatarURL)
      .addField('**🔥 **','`davet`,`istatistik`,  ')
      .addField('**🔥 **','`davet-oluştur`,`saat`,` ')
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
    name: 'ekstra',
      usage: 'ekstra',
      description: 'ekstra komutlarını gösteir.',
};