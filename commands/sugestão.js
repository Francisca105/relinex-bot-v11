exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    let canal = client.channels.get('708472990341267520')

    let sugestao = args.slice(0).join(' ')
    if(!sugestao) return message.reply('indique a sua sugestão!')

        let embed = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle('Sugestão')
            .setColor('RANDOM')
            .setDescription(sugestao)
            .setFooter("Sugerido por: " + message.author.username)
 
            canal.send(embed)

}
 
module.exports.help = {
    name: 'sugestãpo',
    aliases: ['sugerir']
}