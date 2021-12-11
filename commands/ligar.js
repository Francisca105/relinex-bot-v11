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
        
        Client.startServer(server1).then((response) => {
            message.channel.send('Servidor ligado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    } else if(args[0] === 'server2'){
        
        Client.startServer(server2).then((response) => {
            message.channel.send('Servidor ligado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'bungee'){
        
        Client.startServer(bungee).then((response) => {
            message.channel.send('Servidor ligado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'factions'){
       
        Client.startServer(factions).then((response) => {
            message.channel.send('Servidor ligado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    }else if(args[0] === 'factionsv2'){
                
        Client.startServer(factionsv2).then((response) => {
            message.channel.send('Servidor ligado com sucesso!')
         }).catch((error) => {
             message.channel.send('Ocorreu um erro!\n\n' + error)
         });
    } else {
        message.reply('Indique um servidor válido!\n**[server1, server2, bungee, factions, factionsv2]**')
    }
}
module.exports.help = {
    name: 'ligar',
    aliases: ['start']
}