const Discord = require('discord.js')
 
exports.run = (client, message, args) => {
    let em = new Discord.RichEmbed()
    .setTitle('<:9375_Information:708511077796937810> | Ajuda')
    .setDescription('Todos os meus comandos e todas as suas informações estão aqui!')
    .addField('anuncio', 'Faz um anúncio no servidor!')
    .addField('botinfo', 'Manda as informações do bot.')
    .addField('ban', 'Ban um user.')
    .addField('comando', 'Envia um comando diretamente para a console do servidor')
    .addField('desligar', 'Desliga um servidor.')
    .addField('form', 'Envia o formulário do servidor')
    .addField('ip', 'Informa o status do servidor e o ip!')
    .addField('kick', 'Irá kickar um usuário do servidor.')
    .addField('kill', 'Força o encerramento de um servidor.')
    .addField('ligar', 'Liga um servidor.')
    .addField('mute', 'Muta um usuário!')
    .addField('report', 'Reporta um user.')
    .addField('sugestão', 'Envia uma sugestão para nos ajudares!')
    .addField('ticket', 'Abre um ticket')
    .addField('fechar', 'Irá finalizar um ticket que esteja aberto.')
    .addField('unban', 'Tira um ban a um ex-user.')
    .addField('unmute', 'Perdoa um usuário e permite que ele volte a falar!')
    .addField('warn', 'Dá/tira/vê um aviso de um player')
    .setFooter('Eu sou só um bot.')
    .setColor('#21a3db')
    message.author.send(em)
    message.channel.send('<:redelinex:708511078132482110> | Verifique no seu privado!')
}
module.exports.help = {
    name: 'ajuda',
    aliases: ['help', '?']
}