const fs = require("fs");

exports.run = (bot, message, args) => {
    fs.readFile('exp.json', 'utf-8', function(err, data){
        if (err) throw err;
        var expTable = JSON.parse(data);
        if(expTable[message.author.id] == undefined){
            message.channel.send("Please use the command !add to add yourself to the exp table!");
            return;
        }
        prevExp = expTable[message.author.id]['experience'];
        expGain = expTable[message.author.id]['level'] * Math.floor((Math.random() * 10) + 1);
        expTable[message.author.id]['experience'] = prevExp + expGain;
        fs.writeFile('exp.json', JSON.stringify(expTable), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        message.channel.send(`You gained ${expGain} exp!`);
        
    })
}