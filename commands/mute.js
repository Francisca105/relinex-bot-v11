exports.run = async(client, message, args, err) => {
    const Mute = require('../models/Mute.js')
    const discord = require('discord.js')
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply('Não tens permissão!')

    let mutar = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!mutar) return message.reply('Escolha alguém para mutar!')
    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'

    let mutado = await Mute.findOne({ where: { mutado: mutar.id, mute: false }}).catch(err => console.log(err))
    if(mutado) {
        Mute.update({ mute: true }, { where: { mutado: mutar.id, mute: false }}).catch(err => console.log(err))
        message.channel.send(mutar.user.username + ' mutado com sucesso.')
    }

    else{
    let mute = await Mute.create({
        guild: message.guild.id,
        mutado: mutar.id,
        mute: true
    }).catch(err => console.log(err))

    message.channel.send(mutar.user.username + ' mutado com sucesso.')
}}
module.exports.help = {
    name: "mute",
    aliases: ["mutar"]
}