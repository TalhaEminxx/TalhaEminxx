const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Yardım Menusu")
    .setDescription(`${prefix}kayıtlı-rol\n${prefix}kayıt-ol butonda yazacak yazı + mesaj yazısı\n${prefix}logs`)
    .setColor("#007fff")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};