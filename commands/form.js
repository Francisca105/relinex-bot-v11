
exports.run = (client, message) => {
    let link = 'https://forms.gle/P61xfkn3XEZfphyh9'
    const discord = require('discord.js')
    let embed = new discord.RichEmbed()
    .setTitle('<:9549_link:708511077440159796> Formulário')
    .setDescription(`Para responder ao nosso formulário [clique aqui](${link})!`)
    .setColor('#005980')
    message.channel.send(embed)
}
module.exports.help = {
    name: "form",
    aliases: ["formulário", "formulario"]
}