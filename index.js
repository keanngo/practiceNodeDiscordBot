//type "node index" to start the bot
//can't use git bash to receive console logs for some reason :*(


//kinda like importing discord.js
const  Discord = require("discord.js");
const config = require("./config.json");
const Enmap = require("enmap");
const fs = require("fs");
/*
var fortunes = [
    "Yes",
    "No",
    "Maybe"
];
*/

//creating new instance of a discord client
var bot = new Discord.Client();
//attach config to the bot so config is accessible everywhere
bot.config = config;

//this also could work inside module.exports yada yada by calling it CONFIG straight up
//CONFIG = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(eventName);
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        bot.commands.set(commandName, props);
        console.log(`${commandName} has been set`);
    });
});
/*
//currently reads as plain old text (i.e. unreadable)
var data = fs.readFileSync('data.json');
//interpret the data as JSON
var words = JSON.parse(data);
console.log(words);*/

bot.login(config.token);
/*

bot.on("message", (message) => {

    if (!message.content.startsWith(PREFIX) || message.author.equals(bot.user)) return;

    //remove PREFIX from message and split for multiple arguments

    var args = message.content.substring(PREFIX.length, message.length).trim().split(" ");
    //note that args.shift() removes the first element from the array. arrays are global so doing this affects everything!
    const command = args.shift().toLowerCase();

    //console.log(command);
    //console.log(args);


    switch (command) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("Bot created 24/12/2019");
            break;
        case "8ball":
            if (args[0]){
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else{
                message.channel.sendMessage("Can't read the ball");
            }
            break;

        case "naf":
            let [name, age, favourite] = args;
            //this ` is not ' and is located top left of keyboard
            message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
            break;
        
        case "mention":
            let member = message.mentions.members.first();
            console.log(member);
            break;
        
       
        case "say":
            let text = args.join(" ");
            message.delete();
            message.channel.send(text);
            break;
        
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("money money money", "test Description", true)
                .addField("1", "2", true)
                .setDescription("description")
                .setFooter("footer is placed here");
            message.channel.sendEmbed(embed);
            break;

        case "kick":
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            member.kick(reason);
            break;

        case "quote":
            //!quote <channelid> <messageID> quotename note
            //quotename is a single word and note can be multiple words (...note means take "the rest of the array")
            const [channelid, messageid, quotename, ...note] = args.splice(1);
            //const myVar = condition ? codeWhenConditionTrue : codeWhenConditionFalse;
            const channel = channelid == "here" ? message.channel : bot.channels.get(channelid);
            const message = messageid == "last" ? msg.channel.messages.last(2)[0] : await channel.messages.get(messageid);
            insertInDB(quotename, channel.id, message.id, note,join(" "));
        
        default:
            message.channel.sendMessage("Invalid command!");
    }
});
*/