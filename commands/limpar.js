const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first()
    let reason = args[0]
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não tens permissão")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Eu não tenho permissão.")
    if (!reason) return message.reply("escolha um número de 2 a 100")
    if (isNaN(reason)) return message.reply("escolha um número de 2 a 100")
    if (reason < 2) return message.reply("Esse numero é muito baixo")
    if (reason > 100) return message.reply("Esse numero é muito alto")

    message.delete()
    let massagem ="";
    let viagem ="";

    message.channel.fetchMessages({
        limit: reason,
    }).then((messages) => {
        if (!user) {
            massagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = massagem.filter(a => a.pinned === false)
        }
        await message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        await message.channel.send(message.author.tag + ' limpou o chat.').then(clear => clear.delete(10000))
     })
}
module.exports.help = {
    name: "limpar",
    aliases: ["clear", "clean", "cc", "c"]
}    