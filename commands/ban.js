exports.run = (client, message, args, err) => {

    const discord = require('discord.js')

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Não tens permissão.')
    
    if(!args[0]) return message.reply('Não encontrei o usuário.')
    let userban = message.guild.member(message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || client.users.find(u => u.id.toLowerCase().includes(args[0].toLowerCase())) || client.users.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()))))

    if(!userban) return message.reply('Não encontrei o usuário.')

    let userid = userban.id
    if(!userban.bannable) return message.reply('Não será possível banir esse usuário.')

    if(userban.id === message.author.id) return message.reply('Não te podes banir.')

    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'


    message.guild.ban(userid, {reason: razao})
    message.channel.send('Usuário ( ' + userban.user.username + ' ) banido com sucesso.')
}
module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}



