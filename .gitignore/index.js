const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("#Fuck Police !")
    console.log("Stitches a bien été connecté au server.")
});

bot.login("NDMyNTg5Njg3ODAzMjE1ODcz.DawFKw.oT4qgxXmq6dPE3I-xmppOjF0fdU");
