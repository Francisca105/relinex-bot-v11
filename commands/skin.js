exports.run = (client, message, args) => {
    const discord = require('discord.js')

    if(!args[0]) return message.reply('Indique a skin que pretende ver/baixar.')

    let nick = args[0],
    download = 'https://minotar.net/download/' + nick,
    skin = 'https://minotar.net/skin/' + nick

    let embed = new discord.RichEmbed()
    .setTitle('Skin de ' + nick)
    .setDescription(`[Baixe a skin aqui.](${download})`)
    .setImage(skin)
    .setColor('#b28abd')
    .setFooter('Em busca da skin perfeita!')
    
    message.channel.send(embed)
}
module.exports.help = {
    name: 'skin',
    aliases: ['mcskin']
}