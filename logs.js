const Discord = require('discord.js');
  const db = require("croxydb")

  exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    let log = message.mentions.channels.first()
    if(!log) return message.reply({content: "> Bir Kanal Belirtmen Gerekiyor."})
    
    
    
  message.reply("ayarlandı!")
  
    db.set(`log_${message.guild.id}`, log.id)
    
  
  
  
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "logs"
};