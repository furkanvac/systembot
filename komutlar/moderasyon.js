const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

    const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Moderasyon`, client.user.avatarURL) 
      .setDescription('**!!yardımkomut  Komut ismi yazarak komutların ne işe yaradığını bulabilirsiniz.**')
.setTitle('Prefix !!')
      .setThumbnail(client.user.avatarURL)
      .addField('**:fire: **','`ban`,`bankaldır`,`bansorgulama`,`reklamengel`,`sayaçyardım`,`otorolyardım`,`ototagkanal`,`ototag`,`davet-takip`')
      .addField('**:fire: **','`uyar`,`uyarı-kaldır`,`uyarı-sayı`,`yavaş-mod`,`seviyeyardım`')
      .addField('**:fire: **',' `güvenlik`,`güvenlik-sıfırla`,`sunucu-koruma`,`giriş-izni`,`küfürengel`,`prefix`,`temizle`,`özelkomutyardım`')
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
    name: 'moderasyon',
      category: 'moderasyon',
      description: 'moderasyon komutlarını gösteir.',
};