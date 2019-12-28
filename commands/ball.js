var fortunes = [
    "Yes",
    "No",
    "Maybe"
]

exports.run = (bot, message, args) => {
    if (args[0]){
        message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    } else{
        message.channel.sendMessage("Can't read the ball");
    }
}