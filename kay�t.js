const {EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, interaction, args) => {
  let kayıtlı = db.fetch(`kayıtlı${interaction.guild.id}`)
if (!kayıtlı) return interaction.channel.send("kayıtlı rolü ayarlanmamis!")
  let logs = db.fetch(`log_${interaction.guild.id}`)
  if (!logs) return interaction.channel.send("log ayarlanmamis!")
  const config = require("../config.js")
  let prefix = config.prefix
  let tit = interaction.content.slice(prefix.length + 'kayıt-ol'.length);
	if(!tit.includes("+")) return interaction.reply("!kayıt-ol butonda yazacak yazı + mesaj yazısı")
        let tit2 = tit.split('+');
  const embed = new EmbedBuilder()
    .setTitle("Kayıt Sistemi")
    .setDescription(`${tit2[1]}`)
    .setColor("#007fff")
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
      .setLabel(`${tit2[0]}`)
      .setCustomId("kayıt")
      .setStyle(ButtonStyle.Success)
    )

    return interaction.channel.send({embeds : [embed], components: [row]})
 
 
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kayıt-ol"
};
