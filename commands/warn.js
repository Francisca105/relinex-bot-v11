exports.run = async (client, message, args) => {
    const discord = require('discord.js')
    const db = require('../database/database.js')
    const Warns = require('../models/Warns.js')

    let avisar =  message.guild.member(message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || client.users.find(u => u.id.toLowerCase().includes(args[1].toLowerCase())) || client.users.find(u => u.username.toLowerCase().includes(args[1].toLowerCase()))))
    let ver = args[0] === 'ver'
    let add = args[0] === 'add'
    let remove = args[0] === 'remove'
    let resetar = args[0] === 'resetar'

    if(!args[0]){
        message.reply('Para executar este comando faça: \`/warn ver|add|remove|resetar\`')
    }
    else{
        if(!avisar) return message.reply('Menciona um usuário!')
    }

    let find_user = await Warns.findOne({
        where: {
            user: avisar.id
        }
    })

    if(ver){
        if(find_user) {
            let avisos = find_user.warns
            message.channel.send(avisar + ' tem \`'+ avisos+ '\` warns!')
        } else {
            message.reply(avisar + ' tem \`0\` warns!')
        }
    } else if(add) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

        if(find_user){
            const addwarns = find_user.increment('warns', { by: 1 })
            addwarns
            message.channel.send('Warn adicionado com sucesso a ' + avisar + '!')

        let avisosa = find_user.warns
        if(avisosa > 2) {
            message.channel.send(avisar + ' tem mais do que 2 avisos, pretende kickar do servidor?').then(e => e.react('✅'))
            const filter = (reaction, user) => {
                return reaction.emoji.name === '✅' && user.id === message.author.id;
            };
            
            const collector = message.createReactionCollector(filter, { time: 15000 });
            
            collector.on('collect', (reaction, user) => {
                avisar.kick()
                message.channel.send('O usuário foi kickado com sucesso.')
            });
        }
        }else{
            let criarwarn = Warns.create({
                user: avisar.id,
                warns: 1
        })
        criarwarn
        message.reply('Warn adicionado com sucesso!')
        

    }} else if(remove) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')
        if(find_user){
            let avisosr = find_user.warns
            if(avisosr <= 0) return message.reply('Não podes retirar mais nenhum aviso pois o usuário não tem mais nenhum para ser retirado!')

            else {       
                const removewarns = find_user.increment('warns', { by: -1 })
                removewarns
                message.reply('Warn removido com sucesso a ' + avisar + '!')
        }
    }else{
    message.reply('Esse usuário não possui warns para retirar.')
}}else if(resetar) {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

    if(find_user){
        find_user.destroy()
        message.channel.send('Os warns de ' + avisar +' foram resetados.')
    }else{
    message.channel.send(avisar + ' não possui warns para resetar.')
}} else{
    message.reply('Para executar este comando faça: \`/warn ver|add|remove|resetar\`')
}

    }
    module.exports.help = {
        name: "warn",
        aliases: ["warns"]
    }    