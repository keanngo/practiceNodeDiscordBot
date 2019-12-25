//type "node index" to start the bot
//can't use git bash to receive console logs for some reason :*(


//kinda like importing discord.js
const  Discord = require("discord.js");
const config = require("./config.json")
const TOKEN = config.token;
const PREFIX = config.prefix;

var fortunes = [
    "Yes",
    "No",
    "Maybe"
];
//creating new instance of a discord client
var bot = new Discord.Client();

bot.on("ready", () => {
    console.log('test');
});

bot.on("message", (message) => {

    if (!message.content.startsWith(PREFIX) || message.author.equals(bot.user)) return;

    //remove PREFIX from message and split for multiple arguments
    var args = message.content.substring(PREFIX.length, message.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("Bot created 24/12/2019");
            break;
        case "8ball":
            if (args[1]){
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else{
                message.channel.sendMessage("Can't read the ball");
            }
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("money money money", "test Description", true)
                .addField("1", "2", true)
                .setDescription("description")
                .setFooter("footer is placed here");
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command!");
    }
});

bot.login(TOKEN);