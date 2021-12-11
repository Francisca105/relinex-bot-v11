exports.run = (client, message, args, err) => {

    var discord = require('discord.js');
    var Discord = require('discord.js');
    var request = require('request');
    var mcIP = 'redelinex.com'
    var url = 'https://api.minetools.eu/ping/' + mcIP  

    request(url, function(err, response, body) {
        body = JSON.parse(body);
        let off = new discord.RichEmbed()
            .setTitle('<:5765_Offline:708511077213667348> ' + mcIP)
            .setDescription('O servidor encontra-se atualmente __offline__, por isso, não consigo obter mais informações.')
            .setColor('#8a1807')


        if(body.error) return message.channel.send(off)
        
        else{
            let sv = new discord.RichEmbed()
            .setTitle('<:6951_Online:708511077188632597>  ' + mcIP)
            .setDescription('O servidor encontra-se atualmente __online__.\nCom ' + body.players.online + ' / ' + body.players.max + ' jogando.\n\n')
            .setColor('#90e627')
            .setTimestamp()
            .setFooter('Desenvolvido pela Francisca.105#8965')
            .setThumbnail('https://cdn.discordapp.com/attachments/572580049472192512/710895237916262400/AKT9zKVJ1ofOAAAAAElFTkSuQmCC.png')
            
            message.channel.send(sv)
        }
    })
}
module.exports.help = {
        name: "serverstatus",
        aliases: ["svstatus", "statussv", "server", "sv", "status", "ip"]
}