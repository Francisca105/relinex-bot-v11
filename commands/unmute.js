exports.run = (client, message, args, err) => {
    const Mute = require('../models/Mute.js')
    const discord = require('discord.js')
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply('Não tens permissão!')

    let mutar = message.mentions.members.first()  || message.guild.members.get(args[0]) 
    if(!mutar) return message.reply('Escolha alguém para mutar!')
    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'
    
    let update = Mute.update({ mute: false}, { where: { mutado: mutar.id, mute: true }}).catch(err => console.log(err))
    update
    message.channel.send(mutar.user.username + ' desmutado com sucesso.')
}
module.exports.help = {
    name: "unmute",
    aliases: ["desmutar"]
}