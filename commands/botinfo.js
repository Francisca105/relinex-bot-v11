exports.run = async (client, message) => {
    const Discord = require('discord.js')
    const discord = require('discord.js')
    const os = require('os')
    const cpuStat = require("cpu-stat");
    const moment = require("moment") 
    moment.locale('pt-BR');
    
    
        const a = await message.channel.send("A carregar o menu de informações...");   
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos.`
        }
        cpuStat.usagePercent(function(err, percent, seconds) {
            if (err) {
              return console.log(err);
            }
           
           let secs = Math.floor(client.uptime % 60);
           let days = Math.floor((client.uptime % 31536000) / 86400);
           let hours = Math.floor((client.uptime / 3600) % 24);
           let mins = Math.floor((client.uptime / 60) % 60);
    
        let embed1 = new Discord.RichEmbed()
        .setAuthor('Bot Info', client.user.avtarURL)
        .setColor('#f4ff21')
        .setDescription('Olá! Tudo bem?\nComo pedido aqui estão todas as minhas informações!')
        .addField('Criadora', 'Francisca.105#8965')
        .addField('Ping', `${a.createdTimestamp - message.createdTimestamp} ms`)
        .addField('Ping do Bot', `${Math.round(client.ping)} ms.`)
        .addField('Uptime', `${duration(client.uptime)}`)
        .setFooter('As minhas informações!')
        
        a.edit(embed1);
    
    
    
    })
    }
    
    module.exports.help = {
        name: "botinfo",
        aliases: ["bot", "infobot", "ping", "uptime"]
    }    