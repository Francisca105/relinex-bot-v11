exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Não tens permissão.')
    let userban = args[0]
    if(!userban) return message.reply('Coloca o id da pessoa que queres desbanir.')

    message.guild.unban(userban)

    message.channel.send('<@' + userban + ' desbanido com sucesso.')
}
module.exports.help = {
    name: "unban",
    aliases: ["desbanir"]
}