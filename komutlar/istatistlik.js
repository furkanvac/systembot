const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor(message.guild.me.displayColor)
        .setTitle(`📊 İstatistikler`)
        .setDescription(`<:developer:850811141642518539> Geliştirici:   
       
<@!766932288058818581>\n
 <a:aktif:850826125944422432> | **Bellek Kullanımı**:  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB

 <a:onofff:850827470574845953> | **Çalışma süresi**: ${duration}   

 <:member:850825678575370270> | **Toplam Kullanıcı**:   ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}

 <a:discord:850827318872244284> | **Toplam Sunucu Sayısı**:  ${client.guilds.size.toLocaleString()}   
    
 <a:book:850825945497600070> | **Toplam Kanal Sayısı**:   ${client.channels.size.toLocaleString()}       

 <a:book2:850826070181281823> | **Discord.JS Sürümü**: v${Discord.version}

 <a:saniye:850826752556662844> | **Gecikme**: ${client.ping}`)  
            


        .setThumbnail(client.user.avatarURL)
        .setFooter(`System | 2021 Tüm Hakları Saklıdır`,client.user.avatarURL)

    return message.channel.send(embed);
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistiklerini Gösterir',
  usage: 'istatistik'
};