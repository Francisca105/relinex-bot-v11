exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply('Não tens permissão para executar este comando.')
    let kickar = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!kickar) return message.channel.send("Escolhe um membro para kickar!")
    if(!kickar.kickable) return message.reply('Não será possível kickar esse usuário.')
    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'
    kickar.kick(razao)
    message.channel.send(kickar + 'kickado com sucesso!')
}
module.exports.help = {
    name: "kick",
    aliases: ["kickar"]
}