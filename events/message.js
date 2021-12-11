const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const Ticket = require('../models/Ticket.js')
const Mute = require('../models/Mute')
const discord = require('discord.js')
bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;
  
/*  let warned = await Warns.findOne({ where: { user: message.author.id, warns: '3'}}).catch(err => console.log(err));
  if(warned) {
    let warn3 = new discord.RichEmbed()
    .setColor('FFFFFF')
    .setTitle('Warn')
    .setDescription('O usuário ' + message.author + ' tem 3 avisos!')
    .setFooter('Bot desevolvido pela Francisca.105#8965')

    bot.channels.get('705385822215471114').send(warn3)
     
  } */

  let mutado = await Mute.findOne({ where: { mutado: message.author.id, mute: true, guild: message.guild.id }}).catch(err => console.log(err));
  if(mutado) {
    message.delete()
    message.reply('Não podes mandar mensagens porque estás mutado!').then(a => a.delete(15000))
  }


    //Resposta a menção
    let menE = new discord.RichEmbed()
    .setAuthor('<:redelinex:708511078132482110> | Olá ' + message.author.username + '!', bot.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('Para veres os meus comandos faz \`/ajuda\`!')
    .setFooter('Bot feito pela Francisca.105#8965')
    .setColor('#3250a8')

    let mention = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`];
    mention.find(mention => {
      if (message.content === mention) {
        message.channel.send(menE)
         }})

    //Comandos
    

    let prefixo = prefix;
    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)


})