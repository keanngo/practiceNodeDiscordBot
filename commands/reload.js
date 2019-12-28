exports.run = (bot, message, args) => {
    if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];

    if(!bot.commands.has(commandName)){
        return message.reply("That command does not exist");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];
    bot.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    bot.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded!`);
}