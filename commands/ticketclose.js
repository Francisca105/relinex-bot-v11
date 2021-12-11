const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
let Ticket = require('../models/Ticket')


    const categoryId = "710912970586062879";


    if (message.channel.parentID == categoryId) {
 
        let find = await Ticket.findOne({where: {
            authorId: message.author.id
        }})
        await find.destroy();
        message.channel.delete()
 
    } else {
 
        message.channel.send("Não podes executar este comando aqui.");
 
    }
 
 
}
 
module.exports.help = {
    name: 'fechar',
    aliases: ['finalizar']
}