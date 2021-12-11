const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberRemove", async (member) => {
    let guildID = member.guild.id
    if(guildID !== '541574907297923081') return;
    let frases = [`Hey! **${member.user.username}** onde você pensa que vai? :'(`,
        `**${member.user.username}** saiu do servidor. Por favor volte!!`,
        `**${member.user.username}** parece que foi cry.`,
        `**${member.user.username}** arregou? Porque saiu do servidor?`,
        `Gente, perdemos um jogador. **${member.user.username}** saiu do servidor!`,
        `**${member.user.username}** Porque você faz isso connosco? Volte para nós!`,
        `Nossa, **${member.user.username}** para quê essa violência?! Sentiremos saudades`] 

    let random = frases[Math.floor(Math.random() * frases.length)];
    let canal = bot.channels.get('708476357931434055')
    let entrada = new discord.RichEmbed()
    .setAuthor('👤 Saída de um membro')
    .setThumbnail(member.user.avatarURL)
    .setDescription(random)
    .setColor('#EC6746')
    .setFooter('Até já!')

    canal.send(entrada)
//member.guild.memberCount
})