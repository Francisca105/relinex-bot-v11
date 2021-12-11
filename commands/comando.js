exports.run = (client, message, args) => {
    const node = require('nodeactyl');
    const Client = node.Client;
    const {host, api, server1, server2, bungee, lobby, factions, factionsv2} = require('../config.json')
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Este comando é só para \`\`Adminstradores\`\`!')
    if(!args[0]) return message.reply('Indique o servidor que pretende escolher!\n*[server1, server2, bungee, factions, factionsv2]*')

    Client.login(host, api, (logged_in, msg) => {
        console.log('(Comando) Conexão: ' + logged_in);
    })

    if(args[0] === 'server1') {
        if(!args.slice(1).join(' ')) return message.reply('indique o comando que irá executar!')

        Client.sendCommand(server1, args.slice(1).join(' ')).then((response) => {
            message.channel.send('Comando enviado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    } else if(args[0] === 'server2'){
        if(!args.slice(1).join(' ')) return message.reply('indique o comando que irá executar!')

        Client.sendCommand(server2, args.slice(1).join(' ')).then((response) => {
            message.channel.send('Comando enviado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'bungee'){
        if(!args.slice(1).join(' ')) return message.reply('indique o comando que irá executar!')

        Client.sendCommand(bungee, args.slice(1).join(' ')).then((response) => {
            message.channel.send('Comando enviado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'factions'){
        if(!args.slice(1).join(' ')) return message.reply('indique o comando que irá executar!')

        Client.sendCommand(factions, args.slice(1).join(' ')).then((response) => {
            message.channel.send('Comando enviado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'factionsv2'){
        if(!args.slice(1).join(' ')) return message.reply('indique o comando que irá executar!')

        Client.sendCommand(factionsv2, args.slice(1).join(' ')).then((response) => {
            message.channel.send('Comando enviado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    } else {
        message.reply('Indique um servidor válido!\n**[server1, server2, bungee, factions, factionsv2]**')
    }
}
module.exports.help = {
    name: 'comando',
    aliases: ['cmd', 'console']
}