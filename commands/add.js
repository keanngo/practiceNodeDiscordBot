const fs = require("fs");

exports.run = (bot, message, args) => {
    console.log(message.author.id);
    fs.readFile('exp.json', 'utf-8', function(err, data){
        if (err) throw err
        var expTable = JSON.parse(data);
        isInTable = false;
        console.log();
        if(expTable[message.author.id] == undefined){
            expTable[message.author.id] = {};
            expTable[message.author.id]['experience'] = 0;
            expTable[message.author.id]['level'] = 1;
            message.channel.send(message.author.id + " has been added to the exp file").catch(console.error);
        }else{
            message.channel.send("Name is already in the table!");
        }
        fs.writeFile('exp.json', JSON.stringify(expTable), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}