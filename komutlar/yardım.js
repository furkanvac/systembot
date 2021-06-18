const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('RANDOM')
             .setAuthor(`Yardım Menüsü`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField("_**Moderasyon**_", '`!!moderasyon`\nModerasyon Menüsünü Gösterir.', true)
              .addField("_**Eğlence**_", '`!!eğlence`\nEğlence Menüsünü Gösterir.', true)
              .addField("_**Premium**_", '`!!premium`\nPremium Menüsünü Gösterir.', true)
              .addField("_**Kullanıcı**_", '`!!kullanıcı`\nKullanıcı Menüsünü Gösterir.', true)
              .addField("_**Hazır Sunucu**_", '`!!hazır-sunucu-komutları`\nSunucu Kurma Menüsünü Gösterir.', true)    
              .setImage("https://cdn.discordapp.com/attachments/848948555795136565/850738088573665310/standard_2.gif")  
             .addField(`Discord ->`, `[Sunucumuz](https://discord.gg/uXhYPqjSRq)`)
         
        return message.channel.sendEmbed(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'heheh',
	usage : 'yaz'
}