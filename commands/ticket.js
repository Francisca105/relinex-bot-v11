const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
let Ticket = require('../models/Ticket')

let findTicket = await Ticket.findOne({ where: { authorId: message.author.id}}).catch(err => console.log(err));
if(findTicket) return message.channel.send("Já tens um ticket aberto!");

    const categoryId = "710912970586062879";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

            let a;
            let emb = new discord.RichEmbed()
            .setTitle('Ticket')
            .setDescription('**Qual o assunto do Ticket?**\n1- Denúncia\n2- Dúvida\n3- Sugestão\n4- Soliciar Tag YouTuber\n5- Reportar Jogador\n6- Avaliar Staff\n 7- Outro')
            .setFooter('Digite o número no chat.')
            .setColor('#adfa50')

            message.channel.send(emb).then(async msg1 => {
                let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', async c => {
                    //Denúncia, Dúvida, Sugestão, Soliciar Tag YouTuber, Reportar Jogador, Avaliar Staff
                    if(c.content == '1') a = 'Denúncia'
                    if(c.content == '2') a = 'Dúvida'
                    if(c.content == '3') a = 'Sugestão'
                    if(c.content == '4') a = 'Soliciar Tag YouTuber'
                    if(c.content == '5') a = 'Reportar Jogador'
                    if(c.content == '6') a = 'Avaliar Staff'
                    if(c.content == '7') a = 'Outro'
                    let arry = ['1', '2', '3', '4', '5', '6', '7']
                    if(!arry.includes(c.content)) return message.reply('Não encontrei essa opção.')
                    

        message.channel.send('Ticket criado com sucesso!');
        let criar = await Ticket.create({
            authorId: message.author.id,
        });
        message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
     
            createdChan.setParent(categoryId).then((settedParent) => { 
               
    
                settedParent.overwritePermissions(message.guild.roles.find('name', "【⚙】Equipe"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                
    
                settedParent.overwritePermissions(message.author, {
     
                    "READ_MESSAGES": true, "SEND_MESSAGES": true,
                    "ATTACH_FILES": true, "CONNECT": true,
                    "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
     
                });
     
                var embedParent = new discord.RichEmbed()
                    .setTitle('Ticket de ' + message.author.username)
                    .setDescription('Assunto do ticket: **' + a + '**')
                    .setFooter('Aqui pode falar com os staffs!')
                    .setColor('#fac150')
                    .setTimestamp()
     
                settedParent.send(embedParent);
            }).catch(err => {
                message.channel.send("Algo deu errado.");
            });
     
        }).catch(err => {
            message.channel.send("Algo deu errado.");
        });
    })
})

}
 
module.exports.help = {
    name: 'ticket',
    aliases: ['suporte']
}