const {bot} = require('../index');
const config = require("../config.json");
const db = require("../database/database")
const Ticket = require('../models/Ticket.js')
const Warns = require('../models/Warns')
const Mute = require('../models/Mute')
bot.on("ready", async message => {
    console.log(`\n${bot.user.username} está online em ${bot.guilds.size} servidores com ${bot.users.size} membros.\n\n`)
    bot.user.setActivity("fiquei online!", {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

//status

   let statuses = [
       `RedeLinex`,
       `RedeLinex.com`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

   }, 2* 5000)

    db.authenticate().then(() => {
        console.log("Conectado à base de dados!")
        Ticket.init(db)
        Ticket.sync()
        Warns.init(db)
        Warns.sync()
        Mute.init(db)
        Mute.sync()
    
    }).catch(function(err){console.log("\n\nOcorreu um erro ao conectar na base de dados!\n" + err)})
    //{ force: true }*/
    


})
