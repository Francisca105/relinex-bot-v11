const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberAdd", async (member) => {
    let guildID = member.guild.id
    if(guildID !== '541574907297923081') return;

    let frases = [`Olá **${member.user.username}**, seja muito bem-vindo!`,
    `Cuidado! **${member.user.username}** entrou no servidor!`,
    `Fujam todos. **${member.user.username}** entrou no servidor!`,
    `A lenda **${member.user.username}** entrou no servidor! Arrrghhh!`,
    `Uaaau !! **${member.user.username}** entrou no servidor!`,
    `Caros jogadores, apresento-vos **${member.user.username}**!`,
    `Acabou o jogo, **${member.user.username}** entrou no servidor :(`] 

    let random = frases[Math.floor(Math.random() * frases.length)];

    let canal = bot.channels.get('708476357931434055')
    let entrada = new discord.RichEmbed()
    .setAuthor('👤 Novo membro!')
    .setThumbnail(member.user.avatarURL)
    .setDescription(random)
    .addField('<:1824_coin:708511076416880692> Loja do servidor', `[loja.redelinex.com](https://loja.redelinex.com)`, true)
    .addField('<:9375_Information:708511077796937810> Ip do servidor', 'redelinex.com', true)
    .setColor('#EC6746')
    .setFooter(member.guild.memberCount + ' membros!')

    canal.send(entrada)
//member.guild.memberCount
})