exports.run = (client, message, args) => {
    const discord = require('discord.js')

    if(!args[0]) return message.reply('Indique o nick da head que pretende ver/baixar.')

    let nick = args[0],
    download = 'https://minotar.net/helm/' + nick + '/100.png',
    head = 'https://minotar.net/cube/' + nick + '/100.png'

    let embed = new discord.RichEmbed()
    .setTitle('Head de ' + nick)
    .setDescription(`[Baixe a head aqui.](${download})`)
    .setImage(head)
    .setColor('#197d20')

    message.channel.send(embed)
}
module.exports.help = {
    name: 'head',
    aliases: ['mchead']
}