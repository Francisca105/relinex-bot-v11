exports.run = (client, message, args) => {
    const Discord = require('discord.js')
        let canal = client.channels.get('708472949287550977')

    message.reply('qual o seu nick?').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            nick = c.content

                message.reply('qual é o nick do acusado?').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        acusado = c.content

                        message.reply('qual o motivo?').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                                motivo = c.content

                                message.reply('quais as provas?').then(msg4 => {
                                    let c4 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                                    .on('collect', c => {
                                        provas = c.content

                                message.reply('**Report enviado com sucesso!**')

                                let embed = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle('<:1626_warning_1:708511076689510473> Denúncia')
                                .setColor('RANDOM')
                                .setDescription('-> Nick: ' + nick + '\n-> Acusado: ' + acusado + '\n-> Motivo: '+ motivo +'\n-> Provas: ' + provas)
                                .setFooter("Denúnciado por: " + message.author.username)
 
                                canal.send(embed)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
 
module.exports.help = {
    name: 'report',
    aliases: ['reportar', 'denuncia', 'denunciar']
}